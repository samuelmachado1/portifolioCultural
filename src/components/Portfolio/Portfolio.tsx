import React from 'react';
import { Board } from '../Board/Board';
import { Modal } from '../Modal/Modal';
import { usePortfolio } from '../../hooks/usePortfolio';
import type { PortfolioData } from '../../types/portfolio';
import { personalInfo } from '../../data/personal-info';
import samuelAvatar from '../../assets/SamuelEstrella.jpg';
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
            <img src={samuelAvatar} alt={personalInfo.name} />
          </div>
          <div className="profile-details">
            <h1>{personalInfo.artisticName}</h1>
            <p className="profile-title">{data.profile.title}</p>
            <p className="profile-subtitle">
              {personalInfo.yearsActive} anos de atuação no campo da cultura
            </p>
            <div className="profile-contact">
              <span className="contact-item">📧 {personalInfo.contact.email}</span>
              <span className="contact-item">📱 {personalInfo.contact.phone}</span>
              <span className="contact-item">📍 {personalInfo.contact.address}</span>
            </div>
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
