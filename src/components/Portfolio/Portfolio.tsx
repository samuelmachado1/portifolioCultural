import React from 'react';
import { Board } from '../Board/Board';
import { Modal } from '../Modal/Modal';
import { usePortfolio } from '../../hooks/usePortfolio';
import type { PortfolioData } from '../../types/portfolio';
import '../../styles/portfolio.css';

interface PortfolioProps {
  data: PortfolioData;
}

export const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  const {
    houses,
    selectedHouse,
    isModalOpen,
    selectHouse,
    closeModal
  } = usePortfolio(data.houses);

  return (
    <div className="portfolio-container">
      {/* Header com informações do perfil */}
      <header className="portfolio-header">
        <div className="profile-info">
          <div className="profile-avatar">
            {data.profile.avatar ? (
              <img src={data.profile.avatar} alt={data.profile.name} />
            ) : (
              data.profile.name.charAt(0)
            )}
          </div>
          <div className="profile-details">
            <h1>{data.profile.name}</h1>
            <p>{data.profile.title}</p>
            <p>{data.profile.bio}</p>
          </div>
        </div>
      </header>

      {/* Área do tabuleiro */}
      <main className="board-container">
        <Board
          houses={houses}
          onHouseClick={selectHouse}
          selectedHouse={selectedHouse}
        />
      </main>

      {/* Modal para detalhes das experiências */}
      <Modal
        isOpen={isModalOpen}
        house={selectedHouse}
        portfolioData={data}
        onClose={closeModal}
      />
    </div>
  );
};
