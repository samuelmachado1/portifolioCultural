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
    // { key: 'education', label: 'Educação', icon: '🎓' },
  ];

  return (
    <div className="filter-bar">
      <p className="filter-bar__subtitle">
        Por vezes citado como TechRasta, Calangos Sounds ou Calango Rasta
      </p>
    </div>
  );
};
