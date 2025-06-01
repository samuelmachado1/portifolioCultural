import React from 'react';
import './FilterBar.css';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  itemCounts: { [key: string]: number };
}

export const FilterBar: React.FC<FilterBarProps> = ({
  activeFilter,
  onFilterChange,
  itemCounts,
}) => {
  const filters = [
    { key: 'all', label: 'Todos', icon: '🎯' },
    { key: 'milestone', label: 'Marcos', icon: '🏆' },
    { key: 'experience', label: 'Experiências', icon: '💼' },
    { key: 'education', label: 'Educação', icon: '🎓' },
  ];

  return (
    <div className="filter-bar">
      <div className="filter-label">
        <span className="filter-icon">🔍</span>
        Filtrar por categoria:
      </div>
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter.key}
            className={`filter-button ${activeFilter === filter.key ? 'active' : ''
              }`}
            onClick={() => onFilterChange(filter.key)}
            aria-label={`Filtrar por ${filter.label}`}
          >
            <span className="filter-button-icon">{filter.icon}</span>
            <span className="filter-button-label">{filter.label}</span>
            <span className="filter-button-count">
              {itemCounts[filter.key] || 0}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
