import React from 'react';
import type { BoardHouse } from '../../types/portfolio';
import { TimelineCard } from '../TimelineCard/TimelineCard'; // Importar o novo componente
import '../TimelineCard/TimelineCard.css'; // Importar o CSS para o container dos cards
import './Board.css';

interface BoardProps {
  houses: BoardHouse[];
  onHouseClick: (house: BoardHouse) => void; // Manter, pode ser útil depois
  selectedHouse: BoardHouse | null; // Manter, pode ser útil depois
  // boardConfig: { // Comentar se não for usado imediatamente
  //   width: number;
  //   height: number;
  //   backgroundColor: string;
  //   pathColor: string;
  // };
}

export const Board: React.FC<BoardProps> = ({
  houses,
  onHouseClick,
  // selectedHouse, // Comentado pois não está sendo usado ainda
}) => {

  // Pegar os primeiros 10 itens para garantir scroll horizontal
  const timelineItems = houses.slice(0, 10);

  return (
    <div className="board"> 
      <div className="board-texture"></div>

      {/* Título da seção */}
      <div className="timeline-header">
        <h2 className="timeline-title">Trajetória Profissional</h2>
        <p className="timeline-subtitle">Navegue pela linha do tempo para conhecer a jornada de Samuel Estrella</p>
      </div>

      {/* Container para os cards da linha do tempo */}
      <div className="timeline-card-container">
        {timelineItems.map((house) => (
          <TimelineCard 
            key={house.id} 
            house={house} 
            onClick={onHouseClick}
          />
        ))}
      </div>

      {/* Outros elementos do board (faixas, centro, etc.) podem ser adicionados aqui depois */}
      
    </div>
  );
};