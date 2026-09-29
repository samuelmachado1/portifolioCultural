import React, { useState } from "react";
import type { BoardHouse } from "../../types/portfolio";
import { activityLabel, activityOptions } from "../../utils/activities";
import { extractYear } from "../../utils/dates";
import { cachedMediaUrl, isMediaRef, saveMedia, toStorableMedia } from "../../utils/mediaStore";
import "./RegisterPanel.css";

interface RegisterPanelProps {
  records: BoardHouse[];
  onAdd: (house: BoardHouse) => void;
  onUpdate: (house: BoardHouse) => void;
  onRemove: (id: string) => void;
}

interface LinkDraft {
  title: string;
  url: string;
}

interface FormState {
  title: string;
  date: string;
  description: string;
  type: "experience" | "milestone";
  activity: string;
  imageUrl: string;
  photos: string[];
  videos: string[];
  youtube: string;
  spotify: string;
  website: string;
  links: LinkDraft[];
  clippings: LinkDraft[];
}

const EMPTY_FORM: FormState = {
  title: "",
  date: "",
  description: "",
  type: "experience",
  activity: "",
  imageUrl: "",
  photos: [],
  videos: [],
  youtube: "",
  spotify: "",
  website: "",
  links: [],
  clippings: [],
};

function isWebPath(value: string) {
  return value.startsWith("https://") || value.startsWith("http://") || value.startsWith("/");
}

/** Arquivo escolhido neste dispositivo: URL temporária, referência guardada ou base64 legado. */
function isLocalFile(value: string) {
  return value.startsWith("blob:") || value.startsWith("data:") || isMediaRef(value);
}

function isAcceptableImage(value: string) {
  return isWebPath(value) || value.startsWith("blob:") || isMediaRef(value) || value.startsWith("data:image/");
}

function isAcceptableVideo(value: string) {
  return isWebPath(value) || value.startsWith("blob:") || isMediaRef(value) || value.startsWith("data:video/");
}

/**
 * Guarda os arquivos no navegador (IndexedDB, sem limite além da cota do próprio navegador)
 * e devolve URLs prontas para exibir. Arquivos do tipo errado são ignorados com erro.
 */
async function storeFiles(files: FileList | null | undefined, kind: "image" | "video"): Promise<string[]> {
  if (!files || files.length === 0) return [];
  const urls: string[] = [];
  for (const file of Array.from(files)) {
    const ref = await saveMedia(file, kind);
    urls.push(cachedMediaUrl(ref) ?? ref);
  }
  return urls;
}

function houseToForm(house: BoardHouse): FormState {
  const data = house.data;
  const storedVideos = data?.videos?.filter(Boolean) ?? [];
  const legacyVideo = data?.socialLinks?.video;
  const videos = storedVideos.length > 0 ? storedVideos : legacyVideo ? [legacyVideo] : [];

  return {
    title: data?.title ?? "",
    date: data?.date ?? "",
    description: data?.description ?? "",
    type: house.type === "milestone" ? "milestone" : "experience",
    activity: activityLabel(house.style.theme),
    imageUrl: data?.flyerUrl ?? "",
    photos: data?.eventPhotos ?? [],
    videos,
    youtube: data?.socialLinks?.youtube ?? "",
    spotify: data?.socialLinks?.spotify ?? "",
    website: data?.socialLinks?.website ?? "",
    links: data?.links?.map((link) => ({ title: link.title, url: link.url })) ?? [],
    clippings: data?.clippingLinks?.map((link) => ({ title: link.title, url: link.url })) ?? [],
  };
}

function createHouse(form: FormState, id = `custom-${crypto.randomUUID()}`): BoardHouse {
  // URLs blob: só valem enquanto a página está aberta; o que fica salvo é a referência media:.
  const image = toStorableMedia(form.imageUrl.trim()) || undefined;
  const photos = form.photos.map((photo) => toStorableMedia(photo.trim())).filter(Boolean);
  const videos = form.videos.map((video) => toStorableMedia(video.trim())).filter(Boolean);
  const links = form.links
    .map((link) => ({ title: link.title.trim(), url: link.url.trim() }))
    .filter((link) => link.title && link.url);
  const clippings = form.clippings
    .map((link) => ({ title: link.title.trim(), url: link.url.trim() }))
    .filter((link) => link.title && link.url);
  const socialLinks = {
    video: videos[0],
    youtube: form.youtube.trim() || undefined,
    spotify: form.spotify.trim() || undefined,
    website: form.website.trim() || undefined,
  };
  const hasSocial = Object.values(socialLinks).some(Boolean);

  return {
    id,
    type: form.type,
    position: { x: 0, y: 0 },
    data: {
      title: form.title.trim(),
      date: form.date.trim(),
      description: form.description.trim(),
      flyerUrl: image,
      eventPhotos: photos.length > 0 ? photos : undefined,
      videos: videos.length > 0 ? videos : undefined,
      links: links.length > 0 ? links : undefined,
      clippingLinks: clippings.length > 0 ? clippings : undefined,
      socialLinks: hasSocial ? socialLinks : undefined,
    },
    style: {
      size: "medium",
      theme: form.activity.trim(),
      icon: image,
    },
  };
}

function validateMedia(form: FormState) {
  if (form.imageUrl && !isAcceptableImage(form.imageUrl)) {
    return "A imagem de capa precisa ser uma URL http(s), um caminho começando com / ou um arquivo de imagem.";
  }

  const invalidPhoto = form.photos.some((photo) => photo.trim() && !isAcceptableImage(photo.trim()));
  if (invalidPhoto) {
    return "Cada foto extra precisa ser uma URL http(s), um caminho começando com / ou um arquivo de imagem.";
  }

  const invalidVideo = form.videos.some((video) => video.trim() && !isAcceptableVideo(video.trim()));
  if (invalidVideo) {
    return "Cada vídeo precisa ser um link http(s), um caminho começando com / ou um arquivo de vídeo.";
  }

  const socials = [form.youtube, form.spotify, form.website];
  if (socials.some((value) => value.trim() && !isWebPath(value.trim()))) {
    return "YouTube, Spotify e site precisam ser links http(s) ou caminhos começando com /.";
  }

  const incompleteLink = form.links.some((link) => {
    const title = link.title.trim();
    const url = link.url.trim();
    return (title && !url) || (!title && url);
  });
  if (incompleteLink) {
    return "Cada link precisa de título e URL.";
  }

  const invalidLink = form.links.some((link) => link.url.trim() && !isWebPath(link.url.trim()));
  if (invalidLink) {
    return "Os links precisam ser http(s) ou caminhos começando com /.";
  }

  const incompleteClipping = form.clippings.some((link) => {
    const title = link.title.trim();
    const url = link.url.trim();
    return (title && !url) || (!title && url);
  });
  if (incompleteClipping) {
    return "Cada clipping precisa de título e URL.";
  }

  const invalidClipping = form.clippings.some((link) => link.url.trim() && !isWebPath(link.url.trim()));
  if (invalidClipping) {
    return "Os clippings precisam ser links http(s) ou caminhos começando com /.";
  }

  return null;
}

interface MediaPreviewProps {
  value: string;
  kind: "image" | "video";
  alt: string;
}

/** Mostra o arquivo escolhido; se ainda não deu para carregar a mídia, indica que está guardada. */
const MediaPreview: React.FC<MediaPreviewProps> = ({ value, kind, alt }) => {
  const src = isMediaRef(value) ? cachedMediaUrl(value) : value;
  if (!src) {
    return <span className="register-file__label">Arquivo guardado neste navegador.</span>;
  }
  if (kind === "image") {
    return <img src={src} alt={alt} className="register-file__preview" />;
  }
  return <video src={src} className="register-file__preview" muted playsInline preload="metadata" />;
};

export const RegisterPanel: React.FC<RegisterPanelProps> = ({
  records,
  onAdd,
  onUpdate,
  onRemove,
}) => {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [creatingActivity, setCreatingActivity] = useState(false);
  const [saving, setSaving] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  /** Guarda os arquivos escolhidos e aplica as URLs resultantes ao formulário. */
  const storeMedia = async (
    files: FileList | null | undefined,
    kind: "image" | "video",
    apply: (urls: string[]) => void
  ) => {
    if (!files || files.length === 0) return;
    setSaving(true);
    try {
      const urls = await storeFiles(files, kind);
      if (urls.length > 0) apply(urls);
      setError(null);
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : kind === "image"
            ? "Não foi possível guardar a imagem."
            : "Não foi possível guardar o vídeo."
      );
    } finally {
      setSaving(false);
    }
  };

  const updatePhoto = (index: number, value: string) => {
    setForm((current) => ({
      ...current,
      photos: current.photos.map((photo, photoIndex) => (photoIndex === index ? value : photo)),
    }));
  };

  const updateVideo = (index: number, value: string) => {
    setForm((current) => ({
      ...current,
      videos: current.videos.map((video, videoIndex) => (videoIndex === index ? value : video)),
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (saving) {
      setError("Aguarde terminar de guardar os arquivos.");
      return;
    }
    const title = form.title.trim();
    const date = form.date.trim();
    const description = form.description.trim();
    const imageUrl = form.imageUrl.trim();
    const mediaError = validateMedia({ ...form, title, date, description, imageUrl });

    if (!title) {
      setError("Informe o título do registro.");
      return;
    }
    if (!extractYear(date)) {
      setError('Informe a data com o ano, como em "Maio 2022" ou "28 de Junho de 2025".');
      return;
    }
    if (description.length < 3) {
      setError("Escreva uma descrição curta.");
      return;
    }
    if (!form.activity.trim()) {
      setError("Informe a atividade principal.");
      return;
    }
    if (mediaError) {
      setError(mediaError);
      return;
    }

    const house = createHouse({ ...form, title, date, description, imageUrl }, editingId ?? undefined);
    if (editingId) {
      onUpdate(house);
      setNotice("Registro atualizado.");
    } else {
      onAdd(house);
      setNotice("Registro incluído. Ele aparece na lista abaixo e pode ser editado.");
    }
    setError(null);
    setEditingId(null);
    setCreatingActivity(false);
    setForm(EMPTY_FORM);
  };

  const startEdit = (house: BoardHouse) => {
    setForm(houseToForm(house));
    setCreatingActivity(false);
    setEditingId(house.id);
    setError(null);
    setNotice(`Editando “${house.data?.title ?? "registro"}”.`);
    document.getElementById("cadastro")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="register-panel" id="cadastro" aria-labelledby="cadastro-title">
      <div className="register-panel__intro">
        <h2 id="cadastro-title">Cadastro de registros</h2>
        <p>
          Novos registros entram na casa do ano correspondente. A lista abaixo reúne todos os
          registros: dá para editar os dados, incluir fotos e vídeos do dispositivo ou por link,
          acrescentar clippings e apagar. O que for criado ou alterado aqui fica salvo só neste navegador.
        </p>
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          Título
          <input
            value={form.title}
            onChange={(event) => update("title", event.target.value)}
            maxLength={120}
            required
          />
        </label>
        <label>
          Data
          <input
            value={form.date}
            onChange={(event) => update("date", event.target.value)}
            placeholder="28 de Junho de 2025"
            required
          />
        </label>
        <label>
          Tipo
          <select
            value={form.type}
            onChange={(event) => update("type", event.target.value)}
          >
            <option value="experience">Experiência</option>
            <option value="milestone">Marco</option>
          </select>
        </label>
        <label className="register-form__wide">
          Atividade principal
          <select
            value={creatingActivity ? "__new__" : form.activity}
            onChange={(event) => {
              if (event.target.value === "__new__") {
                setCreatingActivity(true);
                update("activity", "");
                return;
              }
              setCreatingActivity(false);
              update("activity", event.target.value);
            }}
            required={!creatingActivity}
          >
            <option value="">Selecione a atividade</option>
            {activityOptions(form.activity, ...records.map((record) => record.style.theme)).map((activity) => (
              <option key={activity} value={activity}>
                {activity}
              </option>
            ))}
            <option value="__new__">Criar nova atividade</option>
          </select>
          {creatingActivity && (
            <input
              value={form.activity}
              onChange={(event) => update("activity", event.target.value)}
              placeholder="Nome da nova atividade"
              maxLength={60}
              required
            />
          )}
        </label>
        <label className="register-form__wide">
          Descrição
          <textarea
            value={form.description}
            onChange={(event) => update("description", event.target.value)}
            rows={3}
            maxLength={500}
            required
          />
        </label>
        <details className="register-extra">
          <summary>Fotos, vídeos e links (opcional)</summary>
          <p className="register-extra__hint">
            Nada disso é obrigatório. Fotos e vídeos podem ser links ou arquivos deste dispositivo,
            sem limite de tamanho (dá para escolher vários de uma vez). Os arquivos ficam guardados só
            neste navegador.
          </p>

          <div className="register-extra__grid">
            <label>
              Imagem de capa
              {isLocalFile(form.imageUrl) ? (
                <span className="register-file__chosen">
                  <MediaPreview value={form.imageUrl} kind="image" alt="Capa escolhida" />
                  <button type="button" className="register-remove" onClick={() => update("imageUrl", "")}>
                    Trocar
                  </button>
                </span>
              ) : (
                <input
                  value={form.imageUrl}
                  onChange={(event) => update("imageUrl", event.target.value)}
                  placeholder="https://..."
                  inputMode="url"
                />
              )}
            </label>
            <label className="register-file">
              Arquivo da capa
              <input
                type="file"
                accept="image/*"
                disabled={saving}
                onChange={(event) => {
                  void storeMedia(event.target.files, "image", ([image]) => update("imageUrl", image));
                  event.target.value = "";
                }}
              />
            </label>

            <label>
              YouTube
              <input
                value={form.youtube}
                onChange={(event) => update("youtube", event.target.value)}
                placeholder="https://youtube.com/..."
                inputMode="url"
              />
            </label>
            <label>
              Spotify
              <input
                value={form.spotify}
                onChange={(event) => update("spotify", event.target.value)}
                placeholder="https://open.spotify.com/..."
                inputMode="url"
              />
            </label>
            <label>
              Site
              <input
                value={form.website}
                onChange={(event) => update("website", event.target.value)}
                placeholder="https://..."
                inputMode="url"
              />
            </label>
          </div>

          <div className="register-extra__block">
            <div className="register-extra__heading">
              <h3>Mais fotos</h3>
              <div className="register-extra__tools">
                <label className="register-upload">
                  Escolher arquivos
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    disabled={saving}
                    onChange={(event) => {
                      void storeMedia(event.target.files, "image", (images) =>
                        setForm((current) => ({
                          ...current,
                          photos: [...current.photos.filter((photo) => photo.trim()), ...images],
                        }))
                      );
                      event.target.value = "";
                    }}
                  />
                </label>
                <button
                  type="button"
                  className="register-add"
                  onClick={() => setForm((current) => ({ ...current, photos: [...current.photos, ""] }))}
                >
                  Adicionar link
                </button>
              </div>
            </div>
            {form.photos.map((photo, index) => (
              <div className="register-repeat register-repeat--media" key={`photo-${index}`}>
                <label>
                  Foto {index + 1}
                  {isLocalFile(photo) ? (
                    <span className="register-file__chosen">
                      <MediaPreview value={photo} kind="image" alt={`Foto ${index + 1}`} />
                    </span>
                  ) : (
                    <input
                      value={photo}
                      onChange={(event) => updatePhoto(index, event.target.value)}
                      placeholder="https://..."
                      inputMode="url"
                    />
                  )}
                </label>
                <button
                  type="button"
                  className="register-remove"
                  onClick={() =>
                    setForm((current) => ({
                      ...current,
                      photos: current.photos.filter((_, photoIndex) => photoIndex !== index),
                    }))
                  }
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          <div className="register-extra__block">
            <div className="register-extra__heading">
              <h3>Vídeos</h3>
              <div className="register-extra__tools">
                <label className="register-upload">
                  Escolher arquivos
                  <input
                    type="file"
                    accept="video/*"
                    multiple
                    disabled={saving}
                    onChange={(event) => {
                      void storeMedia(event.target.files, "video", (files) =>
                        setForm((current) => ({
                          ...current,
                          videos: [...current.videos.filter((video) => video.trim()), ...files],
                        }))
                      );
                      event.target.value = "";
                    }}
                  />
                </label>
                <button
                  type="button"
                  className="register-add"
                  onClick={() => setForm((current) => ({ ...current, videos: [...current.videos, ""] }))}
                >
                  Adicionar link
                </button>
              </div>
            </div>
            {form.videos.map((video, index) => (
              <div className="register-repeat register-repeat--media" key={`video-${index}`}>
                <label>
                  Vídeo {index + 1}
                  {isLocalFile(video) ? (
                    <span className="register-file__chosen">
                      <MediaPreview value={video} kind="video" alt={`Vídeo ${index + 1}`} />
                    </span>
                  ) : (
                    <input
                      value={video}
                      onChange={(event) => updateVideo(index, event.target.value)}
                      placeholder="https://youtube.com/... ou link .mp4"
                      inputMode="url"
                    />
                  )}
                </label>
                <button
                  type="button"
                  className="register-remove"
                  onClick={() =>
                    setForm((current) => ({
                      ...current,
                      videos: current.videos.filter((_, videoIndex) => videoIndex !== index),
                    }))
                  }
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          <div className="register-extra__block">
            <div className="register-extra__heading">
              <h3>Outros links</h3>
              <button
                type="button"
                className="register-add"
                onClick={() =>
                  setForm((current) => ({ ...current, links: [...current.links, { title: "", url: "" }] }))
                }
              >
                Adicionar link
              </button>
            </div>
            {form.links.map((link, index) => (
              <div className="register-repeat" key={`link-${index}`}>
                <label>
                  Título
                  <input
                    value={link.title}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        links: current.links.map((item, linkIndex) =>
                          linkIndex === index ? { ...item, title: event.target.value } : item
                        ),
                      }))
                    }
                  />
                </label>
                <label>
                  URL
                  <input
                    value={link.url}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        links: current.links.map((item, linkIndex) =>
                          linkIndex === index ? { ...item, url: event.target.value } : item
                        ),
                      }))
                    }
                    placeholder="https://..."
                    inputMode="url"
                  />
                </label>
                <button
                  type="button"
                  className="register-remove"
                  onClick={() =>
                    setForm((current) => ({
                      ...current,
                      links: current.links.filter((_, linkIndex) => linkIndex !== index),
                    }))
                  }
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          <div className="register-extra__block">
            <div className="register-extra__heading">
              <h3>Clippings</h3>
              <button
                type="button"
                className="register-add"
                onClick={() =>
                  setForm((current) => ({
                    ...current,
                    clippings: [...current.clippings, { title: "", url: "" }],
                  }))
                }
              >
                Adicionar clipping
              </button>
            </div>
            {form.clippings.map((clipping, index) => (
              <div className="register-repeat" key={`clipping-${index}`}>
                <label>
                  Título
                  <input
                    value={clipping.title}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        clippings: current.clippings.map((item, clippingIndex) =>
                          clippingIndex === index ? { ...item, title: event.target.value } : item
                        ),
                      }))
                    }
                  />
                </label>
                <label>
                  URL
                  <input
                    value={clipping.url}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        clippings: current.clippings.map((item, clippingIndex) =>
                          clippingIndex === index ? { ...item, url: event.target.value } : item
                        ),
                      }))
                    }
                    placeholder="https://..."
                    inputMode="url"
                  />
                </label>
                <button
                  type="button"
                  className="register-remove"
                  onClick={() =>
                    setForm((current) => ({
                      ...current,
                      clippings: current.clippings.filter((_, clippingIndex) => clippingIndex !== index),
                    }))
                  }
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        </details>
        {error && <p className="register-form__error" role="alert">{error}</p>}
        {notice && <p className="register-form__notice" role="status">{notice}</p>}
        <div className="register-form__actions">
          {editingId && (
            <button
              type="button"
              className="register-form__cancel"
              onClick={() => {
                setEditingId(null);
                setCreatingActivity(false);
                setForm(EMPTY_FORM);
                setNotice(null);
                setError(null);
              }}
            >
              Cancelar edição
            </button>
          )}
          <button type="submit" className="register-form__submit" disabled={saving}>
            {saving ? "Guardando arquivos..." : editingId ? "Salvar alterações" : "Incluir no tabuleiro"}
          </button>
        </div>
      </form>

      <div className="register-list">
        <h3>Todos os registros</h3>
        {records.length === 0 ? (
          <p>Nenhum registro ainda.</p>
        ) : (
          <ul>
            {records.map((record) => (
              <li key={record.id}>
                <span>
                  <strong>{record.data?.title}</strong>
                  <small>
                    {record.data?.date}
                    {record.style.theme ? ` · ${activityLabel(record.style.theme)}` : ""}
                  </small>
                </span>
                <span className="register-list__actions">
                  <button type="button" onClick={() => startEdit(record)}>
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onRemove(record.id);
                      if (editingId === record.id) {
                        setEditingId(null);
                        setForm(EMPTY_FORM);
                      }
                      setNotice("Registro removido do tabuleiro.");
                      setError(null);
                    }}
                  >
                    Apagar
                  </button>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
