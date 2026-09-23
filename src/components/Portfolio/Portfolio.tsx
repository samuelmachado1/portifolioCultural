import React, { useMemo, useState } from "react";
import { Board } from "../Board/Board";
import { FilterBar } from "../FilterBar/FilterBar";
import { Modal } from "../Modal/Modal";
import { Footer } from "../Footer/Footer";
import { RegisterPanel } from "../Register/RegisterPanel";
import { usePortfolio } from "../../hooks/usePortfolio";
import type { BoardHouse, PortfolioData } from "../../types/portfolio";
import { education, mainPositions, personalInfo } from "../../data/personal-info";
import samuelAvatar from "../../assets/SamuelEstrella.jpg";
import { extractYear, parsePortfolioDate } from "../../utils/dates";
import "../../styles/portfolio.css";
import "../../styles/board-page.css";

interface PortfolioProps {
  data: PortfolioData;
}

export const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  const {
    houses,
    customHouses,
    selectedHouse,
    selectHouse,
    closeModal,
    isModalOpen,
    addCustomHouse,
    removeCustomHouse,
  } = usePortfolio(data.houses);

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [focusYear, setFocusYear] = useState<{ year: number; token: number } | null>(null);

  const filteredHouses = useMemo(() => {
    const filtered = houses.filter((house) => {
      if (activeFilter === "all") return true;
      return house.type === activeFilter;
    });

    return filtered.sort(
      (a, b) =>
        parsePortfolioDate(b.data?.date ?? "").getTime() -
        parsePortfolioDate(a.data?.date ?? "").getTime()
    );
  }, [houses, activeFilter]);

  const itemCounts = useMemo(() => {
    const counts: { [key: string]: number } = { all: houses.length };
    houses.forEach((house) => {
      counts[house.type] = (counts[house.type] || 0) + 1;
    });
    return counts;
  }, [houses]);

  const handleAdd = (house: BoardHouse) => {
    addCustomHouse(house);
    const year = extractYear(house.data?.date ?? "");
    if (year !== null) {
      setFocusYear({ year, token: Date.now() });
    }
  };

  const handleContact = () => {
    const phone = personalInfo.contact.phone.replace(/\s/g, "").replace(/[()-]/g, "");
    const message = encodeURIComponent(
      "Olá Samuel! Encontrei seu contato aqui no https://samuelmachado1.github.io/portifolioCultural/"
    );
    window.open(`https://wa.me/55${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="portfolio-container">
      <header className="board-page__header">
        <div className="board-page__heading">
          <p className="board-page__kicker">Currículo artístico</p>
          <h1 className="board-page__title">Portfólio</h1>
          <p className="board-page__subtitle">{data.profile.title}</p>
        </div>
        <div className="board-page__actions">
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            itemCounts={itemCounts}
          />
          <a className="board-page__cadastro" href="#cadastro">
            Novo registro
          </a>
          <button type="button" className="board-page__contact" onClick={handleContact}>
            Fale comigo
          </button>
        </div>
      </header>

      <main>
        <Board
          houses={filteredHouses}
          onHouseClick={selectHouse}
          selectedHouse={selectedHouse}
          focusYear={focusYear}
          profile={{
            name: personalInfo.artisticName,
            biography: personalInfo.biography,
            yearsActive: personalInfo.yearsActive,
            email: personalInfo.contact.email,
            phone: personalInfo.contact.phone,
            avatarSrc: samuelAvatar,
            alternativeNames: personalInfo.alternativeNames,
          }}
        />

        <section className="board-extras" aria-label="Formação e trabalhos">
          <article className="board-extra">
            <h2>Formação</h2>
            <ul>
              {education.map((item) => (
                <li key={item.id}>
                  <strong>{item.course}</strong>
                  <span>
                    {item.institution} — {item.year}
                  </span>
                </li>
              ))}
            </ul>
          </article>
          <article className="board-extra">
            <h2>Principais trabalhos</h2>
            <ul>
              {mainPositions.map((position) => (
                <li key={position}>{position}</li>
              ))}
            </ul>
          </article>
        </section>

        <RegisterPanel
          records={customHouses}
          activeFilter={activeFilter}
          onAdd={handleAdd}
          onRemove={removeCustomHouse}
        />
      </main>

      <Footer />

      <Modal isOpen={isModalOpen} house={selectedHouse} onClose={closeModal} />
    </div>
  );
};
