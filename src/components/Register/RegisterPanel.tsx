import React, { useState } from "react";
import type { BoardHouse } from "../../types/portfolio";
import { extractYear } from "../../utils/dates";
import "./RegisterPanel.css";

interface RegisterPanelProps {
  records: BoardHouse[];
  onAdd: (house: BoardHouse) => void;
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
  imageUrl: string;
  photos: string[];
  videoUrl: string;
  youtube: string;
  spotify: string;
  website: string;
  links: LinkDraft[];
}

const EMPTY_FORM: FormState = {
  title: "",
  date: "",
  description: "",
  type: "experience",
  imageUrl: "",
  photos: [],
  videoUrl: "",
  youtube: "",
  spotify: "",
  website: "",
  links: [],
};

const MAX_IMAGE_BYTES = 800_000;

function isWebPath(value: string) {
  return value.startsWith("https://") || value.startsWith("http://") || value.startsWith("/");
}

function isAcceptableImage(value: string) {
  return isWebPath(value) || value.startsWith("data:image/");
}

function readImageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("Escolha um arquivo de imagem."));
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      reject(new Error("Cada imagem precisa ter até 800 KB para caber neste navegador."));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Não foi possível ler a imagem."));
    reader.readAsDataURL(file);
  });
}

function createHouse(form: FormState): BoardHouse {
  const image = form.imageUrl.trim() || undefined;
  const photos = form.photos.map((photo) => photo.trim()).filter(Boolean);
  const links = form.links
    .map((link) => ({ title: link.title.trim(), url: link.url.trim() }))
    .filter((link) => link.title && link.url);
  const socialLinks = {
    video: form.videoUrl.trim() || undefined,
    youtube: form.youtube.trim() || undefined,
    spotify: form.spotify.trim() || undefined,
    website: form.website.trim() || undefined,
  };
  const hasSocial = Object.values(socialLinks).some(Boolean);

  return {
    id: `custom-${crypto.randomUUID()}`,
    type: form.type,
    position: { x: 0, y: 0 },
    data: {
      title: form.title.trim(),
      date: form.date.trim(),
      description: form.description.trim(),
      flyerUrl: image,
      eventPhotos: photos.length > 0 ? photos : undefined,
      links: links.length > 0 ? links : undefined,
      socialLinks: hasSocial ? socialLinks : undefined,
    },
    style: {
      size: "medium",
      theme: form.type === "milestone" ? "milestone" : "cultural",
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

  const video = form.videoUrl.trim();
  if (video && !isWebPath(video)) {
    return "O vídeo precisa ser um link http(s) ou um caminho começando com /.";
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

  return null;
}

export const RegisterPanel: React.FC<RegisterPanelProps> = ({
  records,
  onAdd,
  onRemove,
}) => {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const storeImage = async (file: File | undefined, apply: (image: string) => void) => {
    if (!file) return;
    try {
      apply(await readImageFile(file));
      setError(null);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Não foi possível ler a imagem.");
    }
  };

  const updatePhoto = (index: number, value: string) => {
    setForm((current) => ({
      ...current,
      photos: current.photos.map((photo, photoIndex) => (photoIndex === index ? value : photo)),
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
    if (mediaError) {
      setError(mediaError);
      return;
    }

    const house = createHouse({ ...form, title, date, description, imageUrl });
    onAdd(house);
    setError(null);
    setForm(EMPTY_FORM);
  };

  return (
    <section className="register-panel" id="cadastro" aria-labelledby="cadastro-title">
      <div className="register-panel__intro">
        <h2 id="cadastro-title">Cadastro de registros</h2>
        <p>
          Novos registros entram na casa do ano correspondente. Fotos, vídeos e links são opcionais
          e ficam salvos só neste navegador.
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
            Nada disso é obrigatório. Imagens podem ser um link ou um arquivo de até 800 KB. Vídeos entram por link.
          </p>

          <div className="register-extra__grid">
            <label>
              Imagem de capa
              {form.imageUrl.startsWith("data:") ? (
                <span className="register-file__chosen">Imagem selecionada neste computador.</span>
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
                onChange={(event) => {
                  void storeImage(event.target.files?.[0], (image) => update("imageUrl", image));
                  event.target.value = "";
                }}
              />
            </label>

            <label>
              Vídeo
              <input
                value={form.videoUrl}
                onChange={(event) => update("videoUrl", event.target.value)}
                placeholder="https://youtube.com/watch?v=... ou link .mp4"
                inputMode="url"
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
              <button
                type="button"
                className="register-add"
                onClick={() => setForm((current) => ({ ...current, photos: [...current.photos, ""] }))}
              >
                Adicionar foto
              </button>
            </div>
            {form.photos.map((photo, index) => (
              <div className="register-repeat" key={`photo-${index}`}>
                <label>
                  Foto {index + 1}
                  {photo.startsWith("data:") ? (
                    <span className="register-file__chosen">Imagem selecionada neste computador.</span>
                  ) : (
                    <input
                      value={photo}
                      onChange={(event) => updatePhoto(index, event.target.value)}
                      placeholder="https://..."
                      inputMode="url"
                    />
                  )}
                </label>
                <label className="register-file">
                  Arquivo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      void storeImage(event.target.files?.[0], (image) => updatePhoto(index, image));
                      event.target.value = "";
                    }}
                  />
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
        </details>
        {error && <p className="register-form__error" role="alert">{error}</p>}
        {notice && <p className="register-form__notice" role="status">{notice}</p>}
        <button type="submit" className="register-form__submit">Incluir no tabuleiro</button>
      </form>

      <div className="register-list">
        <h3>Registros deste navegador</h3>
        {records.length === 0 ? (
          <p>Nenhum registro local ainda.</p>
        ) : (
          <ul>
            {records.map((record) => (
              <li key={record.id}>
                <span>
                  <strong>{record.data?.title}</strong>
                  <small>{record.data?.date}</small>
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onRemove(record.id);
                    setNotice("Registro removido do tabuleiro.");
                    setError(null);
                  }}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
