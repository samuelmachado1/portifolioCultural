import React, { useState, useEffect } from 'react';
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

  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Gestor Cultural & Artista';

  useEffect(() => {
    // Delay para começar a animação após o nome aparecer
    const startDelay = setTimeout(() => {
      let index = 0;
      const timer = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }, 2500); // Começa após 2.5 segundos

    return () => clearTimeout(startDelay);
  }, [fullText]);

  const handleDownloadCV = () => {
    // Simula download do CV - pode ser implementado com um link real
    const cvUrl = '/SamuelEstrella-Curriculo.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Samuel_Estrella_CV.pdf';
    link.click();
  };

  const handleContactProject = () => {
    // Abre WhatsApp com mensagem predefinida
    const phone = personalInfo.contact.phone.replace(/\s/g, '').replace(/[()-]/g, '');
    const message = encodeURIComponent('Olá Samuel! Gostaria de conversar sobre um projeto cultural.');
    window.open(`https://wa.me/55${phone}?text=${message}`, '_blank');
  }; return (
    <div className="portfolio-container">
      {/* Header Premium Redesenhado - Inspirado nos melhores portfólios do mundo */}
      <header className="portfolio-header">
        <div className="header-background">
          <div className="floating-particles">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
        </div>

        <div className="header-content">
          <div className="main-profile">
            <div className="avatar-section">
              <div className="avatar-container">
                <div className="avatar-ring-outer">
                  <div className="avatar-ring-inner">
                    <img src={samuelAvatar} alt={personalInfo.name} className="avatar-image" />
                  </div>
                </div>
                <div className="status-indicator">
                  <div className="pulse-ring"></div>
                  <div className="status-dot"></div>
                </div>
                <div className="role-badge">
                  <span className="role-icon">🎭</span>
                </div>
              </div>
            </div>

            <div className="profile-info">
              <div className="name-section">
                <h1 className="primary-name">{personalInfo.artisticName}</h1>
                <div className="name-accent"></div>
              </div>

              <div className="title-section">
                <h2 className="primary-title">{data.profile.title}</h2>
                <div className="title-subtitle typing-animation">
                  {displayedText}
                  <span className="cursor">|</span>
                </div>
              </div>

              <div className="stats-row">
                <div className="stat-item">
                  <div className="stat-number">{personalInfo.yearsActive}+</div>
                  <div className="stat-label">Anos de experiência</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Projetos realizados</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">8</div>
                  <div className="stat-label">Reggae na Praça</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-panel">
            <div className="panel-header">
              <h3 className="panel-title">Entre em contato</h3>
              <div className="panel-subtitle">Vamos criar juntos</div>
            </div>

            <div className="contact-grid">
              <div className="contact-row">
                <div className="contact-icon email-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="contact-info">
                  <div className="contact-label">Email</div>
                  <div className="contact-value">{personalInfo.contact.email}</div>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon phone-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="contact-info">
                  <div className="contact-label">Telefone</div>
                  <div className="contact-value">{personalInfo.contact.phone}</div>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon location-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="contact-info">
                  <div className="contact-label">Localização</div>
                  <div className="contact-value">São Sebastião, DF</div>
                </div>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-primary" onClick={handleContactProject}>
                <span>Iniciar projeto</span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </button>
              <button className="btn-secondary" onClick={handleDownloadCV}>
                <span>Download CV</span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="scroll-indicator">
          <div className="scroll-text">Explore o portfólio</div>
          <div className="scroll-arrow">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
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
