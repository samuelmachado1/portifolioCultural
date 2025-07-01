import React, { useState, useEffect, useMemo } from 'react';
import { Board } from '../Board/Board';
import { FilterBar } from '../FilterBar/FilterBar';
import { Modal } from '../Modal/Modal';
import { usePortfolio } from '../../hooks/usePortfolio';
import type { PortfolioData } from '../../types/portfolio';
import { personalInfo } from '../../data/personal-info';
import samuelAvatar from '../../assets/SamuelEstrella.jpg';
import calangosLogo from '../../assets/calangos-sounds-logo.png';
import '../../styles/portfolio.css';

interface PortfolioProps {
  data: PortfolioData;
}

export const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  const {
    houses,
    selectedHouse,
    selectHouse,
    closeModal,
    isModalOpen
  } = usePortfolio(data.houses);

  const [displayedText, setDisplayedText] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isMobile, setIsMobile] = useState(false);
  const fullText = 'Arte, Cultura e Tecnologia';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const extractLatestYear = (dateString: string): number => {
    if (!dateString) return 0;
    const yearMatches = dateString.match(/\d{4}/g);
    if (!yearMatches) return 0;
    return Math.max(...yearMatches.map(year => parseInt(year, 10)));
  };

  const filteredHouses = useMemo(() => {
    const filtered = houses.filter(house => {
      if (activeFilter === 'all') return true;
      return house.type === activeFilter;
    });

    return filtered.sort((a, b) => {
      const dateA = a.data?.date || '';
      const dateB = b.data?.date || '';
      const yearA = extractLatestYear(dateA);
      const yearB = extractLatestYear(dateB);
      return yearB - yearA;
    });
  }, [houses, activeFilter]);

  const itemCounts = useMemo(() => {
    const counts: { [key: string]: number } = {
      all: houses.length,
    };
    houses.forEach(house => {
      counts[house.type] = (counts[house.type] || 0) + 1;
    });
    return counts;
  }, [houses]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  useEffect(() => {

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
    }, 2500);

    return () => clearTimeout(startDelay);
  }, [fullText]);



  const handleContactProject = () => {
    const phone = personalInfo.contact.phone.replace(/\s/g, '').replace(/[()-]/g, '');
    const message = encodeURIComponent('Olá Samuel! Encontrei seu contato aqui no https://samuelmachado1.github.io/portifolioCultural/');
    window.open(`https://wa.me/55${phone}?text=${message}`, '_blank');
  }; return (
    <div className="portfolio-container">
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
                  <img src={calangosLogo} alt="Calangos Sounds" className="role-icon" />
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
                  <div className="stat-number">+{personalInfo.yearsActive}</div>
                  <div className="stat-label">Anos de experiência artística</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">+{new Date().getFullYear() - 2013}</div>
                  <div className="stat-label">Anos de experiência em Gestão de Projetos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">+{new Date().getFullYear() - 2015}</div>
                  <div className="stat-label">Anos de experiência em Captação de Recursos</div>
                </div>
                <div className="stat-divider"></div>

              </div>
            </div>
          </div>

          <div className="contact-panel">
            <div className="panel-header">
              <h3 className="panel-title">Contatos</h3>
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

              {!isMobile && (
                <div className="contact-row phone-row">
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
              )}

            </div>

            <div className="action-buttons">
              <button className="btn-primary" onClick={handleContactProject}>
                <span>Fale comigo</span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </button>

            </div>

            {!isMobile && (
              <div className="contact-filter-section">
                <FilterBar
                  activeFilter={activeFilter}
                  onFilterChange={handleFilterChange}
                  itemCounts={itemCounts}
                />
              </div>
            )}
          </div>
        </div>

      </header>

      <main className="board-container">
        <Board
          houses={filteredHouses}
          onHouseClick={selectHouse}
          selectedHouse={selectedHouse}
        />
      </main>

      <Modal
        isOpen={isModalOpen}
        house={selectedHouse}
        onClose={closeModal}
      />
    </div>
  );
};
