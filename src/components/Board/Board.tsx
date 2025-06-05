import React, { useRef, useState, useEffect, useMemo } from 'react';
import type { BoardHouse } from '../../types/portfolio';
import { TimelineCard } from '../TimelineCard/TimelineCard';
import { PositionIndicator } from '../PositionIndicator/PositionIndicator';
import '../TimelineCard/TimelineCard.css';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // As casas já vêm filtradas do Portfolio
  const timelineItems = houses.slice(0, 10);

  // Detectar mudança de posição no scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = 305; // largura do card (285px) + gap (20px)
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(newIndex, timelineItems.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [timelineItems.length]);

  const scrollLeft = () => {
    if (containerRef.current) {
      const cardWidth = 305;
      containerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const cardWidth = 305;
      containerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    if (containerRef.current) {
      const cardWidth = 305;
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="board">
      <div className="board-texture"></div>

      {/* Título da seção */}
      <div className="timeline-header">
        <h2 className="timeline-title">Trajetória Profissional</h2>
        <p className="timeline-subtitle">Navegue pela linha do tempo para conhecer a jornada de Samuel Estrella</p>
      </div>

      {/* Indicadores de Posição */}
      {timelineItems.length > 1 && (
        <PositionIndicator
          currentIndex={currentIndex}
          totalItems={timelineItems.length}
          onIndicatorClick={handleIndicatorClick}
          visibleItems={3}
          timelineItems={timelineItems}
        />
      )}

      {/* Container para os cards da linha do tempo */}
      <div className="timeline-navigation">
        <button
          className="timeline-nav-button timeline-nav-left"
          onClick={scrollLeft}
          aria-label="Navegar para experiências anteriores"
          disabled={currentIndex === 0}
        >
          ←
        </button>

        <div className="timeline-card-container" ref={containerRef}>
          {timelineItems.map((house, index) => (
            <TimelineCard
              key={house.id}
              house={house}
              onClick={onHouseClick}
              index={index}
            />
          ))}
        </div>

        <button
          className="timeline-nav-button timeline-nav-right"
          onClick={scrollRight}
          aria-label="Navegar para próximas experiências"
          disabled={currentIndex >= timelineItems.length - 1}
        >
          →
        </button>
      </div>

      {/* Estatísticas rápidas */}
      <div className="timeline-stats">
        <div className="stat-item">
          <span className="stat-number">{timelineItems.length}</span>
          <span className="stat-label">Experiências</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{currentIndex + 1}</span>
          <span className="stat-label">Atual</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{Math.round(((currentIndex + 1) / timelineItems.length) * 100)}%</span>
          <span className="stat-label">Progresso</span>
        </div>
      </div>

    </div>
  );
};