import React, { useEffect } from 'react';
import type { BoardHouse, PortfolioData } from '../../types/portfolio';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  house: BoardHouse | null;
  portfolioData?: PortfolioData;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, house, portfolioData, onClose }) => {
  // Fechar modal com ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !house || !house.data) {
    return null;
  }

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const isProfileHouse = house.id === 'profile';
  const profile = portfolioData?.profile;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ✕
        </button>

        <div className="modal__header">
          <div className="modal__icon" style={{
            background: `linear-gradient(135deg, ${getThemeColors(house.style.theme)})`
          }}>
            {house.style.icon || '🏠'}
          </div>
          <div className="modal__header-text">
            <h2 className="modal__title">{house.data.title}</h2>
            <span className="modal__date">{house.data.date}</span>
          </div>
        </div>

        <div className="modal__content">
          <div className="modal__description">
            <h3>Sobre o Projeto</h3>
            <p>{house.data.fullDescription || house.data.description}</p>
          </div>

          {house.data.achievements && house.data.achievements.length > 0 && (
            <div className="modal__achievements">
              <h4>Principais Conquistas</h4>
              <ul className="modal__achievements-list">
                {house.data.achievements.map((achievement, index) => (
                  <li key={index} className="modal__achievement-item">
                    <span className="modal__achievement-icon">🏆</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {house.data.skills && house.data.skills.length > 0 && (
            <div className="modal__skills">
              <h4>Competências Desenvolvidas</h4>
              <div className="modal__skills-list">
                {house.data.skills.map((skill, index) => (
                  <span key={index} className="modal__skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {house.data.tags && house.data.tags.length > 0 && (
            <div className="modal__tags">
              <h4>Tags</h4>
              <div className="modal__tags-list">
                {house.data.tags.map((tag, index) => (
                  <span key={index} className="modal__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {house.data.links && (
            <div className="modal__links">
              <h4>Links</h4>
              <div className="modal__links-list">
                {house.data.links.website && (
                  <a
                    href={house.data.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__link"
                  >
                    🌐 Website
                  </a>
                )}
                {house.data.links.social && (
                  <a
                    href={house.data.links.social}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__link"
                  >
                    📱 Instagram
                  </a>
                )}
                {house.data.links.video && (
                  <a
                    href={house.data.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__link"
                  >
                    🎥 Vídeo
                  </a>
                )}
                {house.data.links.spotify && (
                  <a
                    href={house.data.links.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__link"
                  >
                    🎵 Spotify
                  </a>
                )}
                {house.data.links.youtube && (
                  <a
                    href={house.data.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__link"
                  >
                    📺 YouTube
                  </a>
                )}
              </div>
            </div>
          )}

          {isProfileHouse && profile && (
            <div className="modal__contact">
              <h4>Contato</h4>
              <div className="modal__contact-list">
                {profile.contact.email && (
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="modal__contact-item"
                  >
                    📧 {profile.contact.email}
                  </a>
                )}
                {profile.contact.whatsapp && (
                  <a
                    href={`https://wa.me/${profile.contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__contact-item"
                  >
                    📱 {profile.contact.whatsapp}
                  </a>
                )}
                {profile.contact.social?.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${profile.contact.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__contact-item"
                  >
                    💼 LinkedIn
                  </a>
                )}
                {profile.contact.social?.instagram && (
                  <a
                    href={`https://instagram.com/${profile.contact.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__contact-item"
                  >
                    📸 Instagram
                  </a>
                )}
              </div>
            </div>
          )}

          {house.data.flyerUrl && (
            <div className="modal__flyer">
              <h4>Material Visual</h4>
              <img
                src={house.data.flyerUrl}
                alt={`Flyer de ${house.data.title}`}
                className="modal__flyer-image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Função auxiliar para obter cores do tema
const getThemeColors = (theme: string): string => {
  const colors = {
    cultural: '#ff6b6b, #ee5a24',
    artistic: '#a8e6cf, #55a3ff',
    production: '#ffd93d, #6bcf7f',
    education: '#6c5ce7, #a29bfe',
    milestone: '#fd79a8, #fdcb6e'
  };

  return colors[theme as keyof typeof colors] || '#6c63ff, #764ba2';
};
