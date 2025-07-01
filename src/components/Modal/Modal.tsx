import React, { useEffect } from 'react';
import type { BoardHouse } from '../../types/portfolio';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  house: BoardHouse | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, house, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !house?.data) return null;

  const { data } = house;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        <div className="modal-header">
          <div className="modal-title-section">
            <span className="modal-icon">{house.style.icon}</span>
            <div>
              <h2 id="modal-title" className="modal-title">{data.title}</h2>
              <p className="modal-date">{data.date}</p>
            </div>
          </div>
          <div className="modal-badge-container">
            <span className={`modal-badge ${house.style.theme}`}>
              {house.style.theme}
            </span>
          </div>
        </div>

        <div className="modal-body">
          {data.achievements && data.achievements.length > 0 && (
            <div className="modal-section">
              <h3>Principais Conquistas</h3>
              <ul className="modal-achievements">
                {data.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {(data.flyerUrl || data.socialLinks?.video) && (
            <div className="modal-media-section">
              <h3>Mídia do Evento</h3>
              <div className="modal-media-container">
                {data.flyerUrl && (
                  <div className="modal-media-item">
                    <img
                      src={data.flyerUrl}
                      alt={`Flyer do ${data.title}`}
                      className="modal-flyer"
                    />
                  </div>
                )}

                {data.socialLinks?.video && (
                  <div className="modal-media-item">
                    <video
                      controls
                      className="modal-video"
                      preload="metadata"
                    >
                      <source src={data.socialLinks.video} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="modal-description">
            <h3>Descrição Completa</h3>
            <p>{data.fullDescription || data.description}</p>
          </div>

          {data.clippingLinks && data.clippingLinks.length > 0 && (
            <div className="modal-section">
              <h3>Clipping da Atividade</h3>
              <div className="modal-clipping">
                {data.clippingLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-clipping-link"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H14L20 9V19C20 20.1 19.1 21 19 21M19 10H14V5H5V19H19V10M7 13H17V15H7V13M7 9H12V11H7V9M7 17H17V19H7V17Z" />
                    </svg>
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          )}

          {data.skills && data.skills.length > 0 && (
            <div className="modal-section">
              <h3>Competências Desenvolvidas</h3>
              <div className="modal-skills">
                {data.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {data.tags && data.tags.length > 0 && (
            <div className="modal-section">
              <h3>Tags</h3>
              <div className="modal-tags">
                {data.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          )}

          {(data.links && data.links.length > 0) || data.socialLinks && (
            <div className="modal-section">
              <h3>Links Relacionados</h3>
              <div className="modal-links">
                {data.links?.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                    {link.title}
                  </a>
                ))}

                {data.socialLinks?.spotify && (
                  <a
                    href={data.socialLinks.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link spotify-link"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.9,10.9C14.7,9 9.35,8.8 6.3,9.75C5.8,9.9 5.2,9.6 5.05,9.15C4.9,8.65 5.2,8.05 5.65,7.9C9.35,6.8 15.5,7 19.4,9.2C19.85,9.45 20.05,10.05 19.8,10.5C19.6,10.9 19,11.1 17.9,10.9M17.8,13.7C17.55,14.05 17.1,14.2 16.75,13.95C14.05,12.3 9.95,11.8 6.8,12.8C6.4,12.9 5.95,12.7 5.85,12.3C5.75,11.9 5.95,11.45 6.35,11.35C10,10.25 14.5,10.8 17.6,12.7C18,12.9 18.05,13.35 17.8,13.7M16.6,16.45C16.4,16.75 16.05,16.85 15.75,16.65C13.4,15.2 10.45,14.9 6.95,15.7C6.6,15.8 6.25,15.55 6.15,15.2C6.05,14.85 6.3,14.5 6.65,14.4C10.55,13.5 13.85,13.85 16.5,15.5C16.85,15.7 16.9,16.1 16.6,16.45Z" />
                    </svg>
                    Spotify
                  </a>
                )}

                {data.socialLinks?.youtube && (
                  <a
                    href={data.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link youtube-link"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
                    </svg>
                    YouTube
                  </a>
                )}

                {data.socialLinks?.website && (
                  <a
                    href={data.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link website-link"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                    Website
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
