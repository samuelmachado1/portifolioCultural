import React from 'react';
import type { BoardHouse, ExperienceData } from '../../types/portfolio'; // Ajuste o caminho se necessário
import './TimelineCard.css';

interface TimelineCardProps {
  house: BoardHouse;
  onClick?: (house: BoardHouse) => void; // Função opcional de clique
  index?: number; // Índice para animação sequencial
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ house, onClick }) => {
  // Verifica se house.data existe antes de desestruturar
  if (!house.data) {
    return null; // Ou <></> se preferir um fragmento vazio, ou um placeholder
  }

  const { title, date, description, tags } = house.data as ExperienceData; // Cast para ExperienceData após a verificação

  const handleClick = () => {
    if (onClick) {
      onClick(house);
    }
  };

  // Mapeamento de tipos para ícones
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'milestone': return '🏆';
      case 'experience': return '💼';
      case 'education': return '🎓';
      default: return house.style.icon || '📍';
    }
  };

  // Mapeamento de temas para cores
  const getThemeColor = (theme: string) => {
    switch (theme) {
      case 'cultural': return '#ff6b6b';
      case 'artistic': return '#74b9ff';
      case 'production': return '#00b894';
      case 'education': return '#6c5ce7';
      case 'milestone': return '#fd79a8';
      default: return '#7f8c8d';
    }
  };

  return (
    <div
      className="timeline-card"
      onClick={handleClick}

    >
      {/* Header do card com ícone e tipo */}
      <div className="timeline-card-header">
        <div
          className="timeline-card-icon"
          style={{ backgroundColor: getThemeColor(house.style.theme) }}
        >
          {getTypeIcon(house.type)}
        </div>
        <div className="timeline-card-type">
          {house.style.theme.charAt(0).toUpperCase() + house.style.theme.slice(1)}
        </div>
      </div>

      <h3 className="timeline-card-title">{title}</h3>
      {date && <p className="timeline-card-date">{date}</p>}
      {description && <p className="timeline-card-description">{description}</p>}

      {/* Tags se existirem */}
      {tags && tags.length > 0 && (
        <div className="timeline-card-tags">
          {tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="timeline-card-tag">
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="timeline-card-tag timeline-card-tag-more">
              +{tags.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Indicador de clique */}
      <div className="timeline-card-click-indicator">
        👁️ Ver detalhes
      </div>
    </div>
  );
};
