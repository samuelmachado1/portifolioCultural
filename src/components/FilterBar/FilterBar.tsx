import React from 'react';
import './FilterBar.css';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  itemCounts: { [key: string]: number };
}

export const FilterBar: React.FC<FilterBarProps> = () => {
  return (
    <div className="filter-bar">
      <p className="filter-bar__subtitle">
        Por vezes citado como TechRasta, Calangos Sounds ou Calango Rasta
      </p>
    </div>
  );
};
