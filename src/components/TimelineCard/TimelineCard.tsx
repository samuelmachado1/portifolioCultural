import React from 'react';
import type { BoardHouse, ExperienceData } from '../../types/portfolio'; // Ajuste o caminho se necessário
import './TimelineCard.css';

interface TimelineCardProps {
  house: BoardHouse;
  onClick?: (house: BoardHouse) => void; // Função opcional de clique
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ house, onClick }) => {
  // Verifica se house.data existe antes de desestruturar
  if (!house.data) {
    return null; // Ou <></> se preferir um fragmento vazio, ou um placeholder
  }

  const { title, date, description } = house.data as ExperienceData; // Cast para ExperienceData após a verificação

  const handleClick = () => {
    if (onClick) {
      onClick(house);
    }
  };

  return (
    <div className="timeline-card" onClick={handleClick}>
      <h3 className="timeline-card-title">{title}</h3>
      {date && <p className="timeline-card-date">{date}</p>}
      {description && <p className="timeline-card-description">{description}</p>}
      {/* Adicionaremos mais detalhes ou ícones futuramente, se necessário */}
    </div>
  );
};
