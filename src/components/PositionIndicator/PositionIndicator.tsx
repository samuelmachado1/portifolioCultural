import React from 'react';
import type { BoardHouse } from '../../types/portfolio';
import './PositionIndicator.css';

interface PositionIndicatorProps {
  currentIndex: number;
  totalItems: number;
  onIndicatorClick: (index: number) => void;
  visibleItems?: number;
  timelineItems?: BoardHouse[]; // Adicionar os dados dos cards
}

export const PositionIndicator: React.FC<PositionIndicatorProps> = ({
  currentIndex,
  totalItems,
  onIndicatorClick,
  // visibleItems = 3,
  timelineItems = [],
}) => {
  // const indicators = Array.from({ length: totalItems }, (_, index) => index);
  const progress = totalItems > 0 ? ((currentIndex + 1) / totalItems) * 100 : 0;

  // Extrair o ano do card atual
  const getCurrentYear = () => {
    if (timelineItems[currentIndex]?.data?.date) {
      const dateString = timelineItems[currentIndex].data.date;
      // Extrair o primeiro ano da string (ex: "2020-2021" -> "2020", "2018" -> "2018")
      const yearMatch = dateString.match(/\d{4}/);
      return yearMatch ? yearMatch[0] : 'Atual';
    }
    return 'Atual';
  };

  // Extrair o ano final (mais recente) para mostrar o período completo
  const getYearRange = () => {
    if (timelineItems.length === 0) return 'Atual';

    const years: number[] = [];
    timelineItems.forEach(item => {
      if (item.data?.date) {
        const dateString = item.data.date;
        // Extrair todos os anos da string
        const yearMatches = dateString.match(/\d{4}/g);
        if (yearMatches) {
          years.push(...yearMatches.map(y => parseInt(y)));
        }
      }
    });

    if (years.length === 0) return 'Atual';

    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);

    return minYear === maxYear ? `${minYear}` : `${minYear}-${maxYear}`;
  };
  const sholdShowLeftHint = currentIndex > 0;
  const sholdShowRightHint = currentIndex < totalItems - 1;
  return (
    <div className="position-indicator">

      {/* Dot Indicators */}
      <div className="indicators-container">
        <button
          className="nav-hint nav-hint-left"
          onClick={() => onIndicatorClick(currentIndex - 1)}
          aria-label="Item anterior"
          disabled={!sholdShowLeftHint}
        >
          ← Anterior
        </button>
      </div>
      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-label">
          <span className="progress-text">
            {currentIndex + 1} de {totalItems}
          </span>
          <span className="progress-year">{getCurrentYear()}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="timeline-range">
          <span className="range-text">Período: {getYearRange()}</span>
        </div>
      </div>

      {/* Navigation Hints */}
      <div className="navigation-hints">

        <button
          className="nav-hint nav-hint-right"
          onClick={() => onIndicatorClick(currentIndex + 1)}
          aria-label="Próximo item"
          disabled={!sholdShowRightHint}
        >
          Próximo →
        </button>

      </div>
    </div>
  );
};
