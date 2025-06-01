import React from 'react';
import './PositionIndicator.css';

interface PositionIndicatorProps {
  currentIndex: number;
  totalItems: number;
  onIndicatorClick: (index: number) => void;
  visibleItems?: number;
}

export const PositionIndicator: React.FC<PositionIndicatorProps> = ({
  currentIndex,
  totalItems,
  onIndicatorClick,
  visibleItems = 3,
}) => {
  const indicators = Array.from({ length: totalItems }, (_, index) => index);
  const progress = totalItems > 0 ? ((currentIndex + 1) / totalItems) * 100 : 0;

  return (
    <div className="position-indicator">
      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-label">
          <span className="progress-text">
            {currentIndex + 1} de {totalItems}
          </span>
          <span className="progress-percentage">{Math.round(progress)}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="indicators-container">
        {indicators.map((index) => {
          const isActive = index === currentIndex;
          const isVisible = Math.abs(index - currentIndex) <= Math.floor(visibleItems / 2);

          return (
            <button
              key={index}
              className={`indicator ${isActive ? 'active' : ''} ${isVisible ? 'visible' : 'hidden'
                }`}
              onClick={() => onIndicatorClick(index)}
              aria-label={`Ir para item ${index + 1}`}
              title={`Item ${index + 1} de ${totalItems}`}
            >
              <span className="indicator-dot" />
              {isActive && (
                <span className="indicator-number">{index + 1}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Navigation Hints */}
      <div className="navigation-hints">
        {currentIndex > 0 && (
          <button
            className="nav-hint nav-hint-left"
            onClick={() => onIndicatorClick(currentIndex - 1)}
            aria-label="Item anterior"
          >
            ← Anterior
          </button>
        )}
        {currentIndex < totalItems - 1 && (
          <button
            className="nav-hint nav-hint-right"
            onClick={() => onIndicatorClick(currentIndex + 1)}
            aria-label="Próximo item"
          >
            Próximo →
          </button>
        )}
      </div>
    </div>
  );
};
