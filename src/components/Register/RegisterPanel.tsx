import React, { useState } from "react";
import type { BoardHouse } from "../../types/portfolio";
import { extractYear } from "../../utils/dates";
import "./RegisterPanel.css";

interface RegisterPanelProps {
  records: BoardHouse[];
  activeFilter: string;
  onAdd: (house: BoardHouse) => void;
  onRemove: (id: string) => void;
}

interface FormState {
  title: string;
  date: string;
  description: string;
  type: "experience" | "milestone";
  imageUrl: string;
}

const EMPTY_FORM: FormState = {
  title: "",
  date: "",
  description: "",
  type: "experience",
  imageUrl: "",
};

function isAcceptableImage(value: string) {
  return (
    value.startsWith("https://") ||
    value.startsWith("http://") ||
    value.startsWith("/") ||
    value.startsWith("data:image/")
  );
}

function createHouse(form: FormState): BoardHouse {
  const image = form.imageUrl.trim() || undefined;
  return {
    id: `custom-${crypto.randomUUID()}`,
    type: form.type,
    position: { x: 0, y: 0 },
    data: {
      title: form.title.trim(),
      date: form.date.trim(),
      description: form.description.trim(),
      flyerUrl: image,
    },
    style: {
      size: "medium",
      theme: form.type === "milestone" ? "milestone" : "cultural",
      icon: image,
    },
  };
}

export const RegisterPanel: React.FC<RegisterPanelProps> = ({
  records,
  activeFilter,
  onAdd,
  onRemove,
}) => {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const title = form.title.trim();
    const date = form.date.trim();
    const description = form.description.trim();
    const imageUrl = form.imageUrl.trim();

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
    if (imageUrl && !isAcceptableImage(imageUrl)) {
      setError("A imagem precisa ser uma URL http(s) ou um caminho começando com /.");
      return;
    }

    const house = createHouse({ ...form, title, date, description, imageUrl });
    onAdd(house);
    const year = extractYear(date);
    const hiddenByFilter = activeFilter !== "all" && activeFilter !== form.type;
    setNotice(
      hiddenByFilter
        ? `Incluído na casa ${year}. O filtro atual esconde esse tipo — escolha Todos para ver a casa.`
        : `Incluído na casa ${year}.`
    );
    setError(null);
    setForm(EMPTY_FORM);
  };

  return (
    <section className="register-panel" id="cadastro" aria-labelledby="cadastro-title">
      <div className="register-panel__intro">
        <h2 id="cadastro-title">Cadastro de registros</h2>
        <p>
          Novos registros entram na casa do ano correspondente. Eles ficam salvos só neste navegador
          e não alteram o arquivo do portfólio.
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
        <label className="register-form__wide">
          Imagem (opcional)
          <input
            value={form.imageUrl}
            onChange={(event) => update("imageUrl", event.target.value)}
            placeholder="https://..."
            inputMode="url"
          />
        </label>
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
