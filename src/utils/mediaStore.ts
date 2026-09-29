import type { BoardHouse } from "../types/portfolio";

const DB_NAME = "portfolio-media";
const DB_VERSION = 1;
const STORE_NAME = "files";
const REF_PREFIX = "media:";

let dbPromise: Promise<IDBDatabase> | null = null;

const urlByRef = new Map<string, string>();
const refByUrl = new Map<string, string>();
const pendingByRef = new Map<string, Promise<string>>();
// Arquivos gravados nesta sessão que talvez ainda não estejam em nenhum registro
// (ex.: escolhidos no formulário, mas não salvos). A limpeza não os remove.
const savedThisSession = new Set<string>();

function openDatabase(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("Este navegador não permite guardar arquivos."));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Não foi possível abrir o armazenamento."));
    request.onblocked = () => reject(new Error("O armazenamento está em uso em outra aba."));
  });
  dbPromise.catch(() => {
    dbPromise = null;
  });
  return dbPromise;
}

function requestToPromise<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Falha no armazenamento."));
  });
}

function transactionDone(transaction: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error ?? new Error("Falha no armazenamento."));
    transaction.onabort = () => reject(transaction.error ?? new Error("Gravação cancelada."));
  });
}

function isQuotaError(error: unknown) {
  return (
    (error instanceof DOMException && error.name === "QuotaExceededError") ||
    (error instanceof Error && /quota/i.test(error.name + error.message))
  );
}

export function isMediaRef(value: string | undefined | null): boolean {
  return typeof value === "string" && value.startsWith(REF_PREFIX);
}

export function isLocalMediaUrl(value: string | undefined | null): boolean {
  return typeof value === "string" && (value.startsWith("blob:") || value.startsWith("data:"));
}

/**
 * Grava o arquivo no IndexedDB e devolve uma referência estável (`media:<uuid>`).
 * Não há limite de tamanho além da cota do próprio navegador.
 */
export async function saveMedia(file: File, kind: "image" | "video"): Promise<string> {
  if (!file.type.startsWith(`${kind}/`)) {
    throw new Error(kind === "image" ? "Escolha um arquivo de imagem." : "Escolha um arquivo de vídeo.");
  }

  const ref = `${REF_PREFIX}${crypto.randomUUID()}`;
  try {
    const db = await openDatabase();
    const transaction = db.transaction(STORE_NAME, "readwrite");
    transaction.objectStore(STORE_NAME).put(file, ref);
    await transactionDone(transaction);
  } catch (error) {
    if (isQuotaError(error)) {
      throw new Error("O navegador não tem espaço para guardar este arquivo. Libere espaço ou use um link.");
    }
    throw error instanceof Error ? error : new Error("Não foi possível guardar o arquivo.");
  }

  const url = URL.createObjectURL(file);
  urlByRef.set(ref, url);
  refByUrl.set(url, ref);
  savedThisSession.add(ref);
  return ref;
}

/**
 * Converte uma referência `media:<uuid>` em uma URL `blob:` utilizável em <img>/<video>.
 * O resultado fica em cache enquanto a página estiver aberta.
 */
export function resolveMediaUrl(ref: string): Promise<string> {
  const cached = urlByRef.get(ref);
  if (cached) return Promise.resolve(cached);
  const pending = pendingByRef.get(ref);
  if (pending) return pending;

  const promise = (async () => {
    const db = await openDatabase();
    const transaction = db.transaction(STORE_NAME, "readonly");
    const blob = await requestToPromise<Blob | undefined>(transaction.objectStore(STORE_NAME).get(ref));
    if (!blob) {
      throw new Error("Arquivo não encontrado neste navegador.");
    }
    const url = URL.createObjectURL(blob);
    urlByRef.set(ref, url);
    refByUrl.set(url, ref);
    return url;
  })();

  pendingByRef.set(ref, promise);
  promise.finally(() => pendingByRef.delete(ref)).catch(() => undefined);
  return promise;
}

/** Devolve a URL `blob:` já resolvida para uma referência, se existir. */
export function cachedMediaUrl(ref: string): string | undefined {
  return urlByRef.get(ref);
}

/** Recupera a referência `media:` de uma URL `blob:` criada por este módulo. */
export function refForUrl(url: string): string | undefined {
  return refByUrl.get(url);
}

/** Normaliza um valor de mídia para o formato persistível (`media:` em vez de `blob:`). */
export function toStorableMedia(value: string): string {
  if (value.startsWith("blob:")) {
    return refForUrl(value) ?? value;
  }
  return value;
}

export function collectMediaRefs(houses: BoardHouse[]): Set<string> {
  const refs = new Set<string>();
  const add = (value: string | undefined) => {
    if (value && isMediaRef(value)) refs.add(value);
  };
  houses.forEach((house) => {
    add(house.style?.icon);
    add(house.data?.flyerUrl);
    add(house.data?.socialLinks?.video);
    house.data?.eventPhotos?.forEach(add);
    house.data?.videos?.forEach(add);
  });
  return refs;
}

/**
 * Apaga do IndexedDB os arquivos que não são mais referenciados por nenhum registro.
 * Arquivos gravados nesta sessão são preservados (podem estar num formulário ainda não salvo);
 * se ficarem órfãos, saem na limpeza da próxima abertura da página.
 */
export async function pruneMedia(usedRefs: Set<string>): Promise<void> {
  try {
    const db = await openDatabase();
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const keys = await requestToPromise(store.getAllKeys());
    keys.forEach((key) => {
      if (typeof key === "string" && !usedRefs.has(key) && !savedThisSession.has(key)) {
        store.delete(key);
        const url = urlByRef.get(key);
        if (url) {
          URL.revokeObjectURL(url);
          urlByRef.delete(key);
          refByUrl.delete(url);
        }
      }
    });
    await transactionDone(transaction);
  } catch {
    // Limpeza é melhor esforço; não deve quebrar o cadastro.
  }
}
