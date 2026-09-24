import React from "react";
import { Footer } from "../Footer/Footer";
import { RegisterPanel } from "./RegisterPanel";
import { usePortfolio } from "../../hooks/usePortfolio";
import type { BoardHouse, PortfolioData } from "../../types/portfolio";
import { navigate, toPath } from "../../utils/routes";
import "../../styles/portfolio.css";
import "../../styles/board-page.css";

interface CadastroPageProps {
  data: PortfolioData;
}

export const CadastroPage: React.FC<CadastroPageProps> = ({ data }) => {
  const { houses, addCustomHouse, updateHouse, removeHouse } = usePortfolio(data.houses);

  const handleAdd = (house: BoardHouse) => {
    addCustomHouse(house);
  };

  return (
    <div className="portfolio-container">
      <header className="board-page__header">
        <div className="board-page__heading">
          <p className="board-page__kicker">Currículo artístico</p>
          <h1 className="board-page__title">Cadastro</h1>
        </div>
        <div className="board-page__actions">
          <a
            className="board-page__contact"
            href={toPath("/")}
            onClick={(event) => {
              event.preventDefault();
              navigate("/");
            }}
          >
            Voltar ao tabuleiro
          </a>
        </div>
        <p className="board-page__subtitle">
          Inclua um registro na trilha de {data.profile.name}.
        </p>
      </header>

      <main>
        <RegisterPanel
          records={houses.filter((house) => house.type === "experience" || house.type === "milestone")}
          onAdd={handleAdd}
          onUpdate={updateHouse}
          onRemove={removeHouse}
        />
      </main>

      <Footer />
    </div>
  );
};
