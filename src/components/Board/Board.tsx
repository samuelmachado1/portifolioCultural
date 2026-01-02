import React, { useRef, useState, useEffect } from 'react';
import type { BoardHouse } from '../../types/portfolio';
import { TimelineCard } from '../TimelineCard/TimelineCard';
import '../TimelineCard/TimelineCard.css';
import './Board.css';

interface BoardProps {
  houses: BoardHouse[];
  onHouseClick: (house: BoardHouse) => void;
  selectedHouse: BoardHouse | null;
}

export const Board: React.FC<BoardProps> = ({
  houses,
  onHouseClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; scrollLeft: number }>({ x: 0, scrollLeft: 0 });

  const timelineItems = houses.slice(0, 10);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = 286;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(newIndex, timelineItems.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [timelineItems.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    setIsDragging(true);
    setDragStart({
      x: e.pageX,
      scrollLeft: container.scrollLeft
    });
    container.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    e.preventDefault();
    const container = containerRef.current;
    const x = e.pageX;
    const walk = (x - dragStart.x) * 2;
    container.scrollLeft = dragStart.scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;

    setIsDragging(true);
    setDragStart({
      x: e.touches[0].pageX,
      scrollLeft: container.scrollLeft
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const container = containerRef.current;
    const x = e.touches[0].pageX;
    const walk = (x - dragStart.x) * 2;
    container.scrollLeft = dragStart.scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      const cardWidth = 320;
      containerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const cardWidth = 320;
      containerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="board">
      <div className="timeline-navigation">
        <button
          className="timeline-nav-button timeline-nav-left"
          onClick={scrollLeft}
          aria-label="Navegar para experiências anteriores"
          disabled={currentIndex === 0}
        >
          ←
        </button>

        <div
          className="timeline-card-container"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
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
    </div>
  );
};