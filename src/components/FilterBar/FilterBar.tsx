import React from "react";
import "./FilterBar.css";

export interface FilterOption {
  id: string;
  label: string;
}

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  itemCounts: { [key: string]: number };
  filters: FilterOption[];
}

export const FilterBar: React.FC<FilterBarProps> = ({
  activeFilter,
  onFilterChange,
  itemCounts,
  filters,
}) => {
  return (
    <label className="filter-bar">
      <span className="filter-bar__label">Filtro</span>
      <select
        value={activeFilter}
        aria-label="Filtrar registros"
        onChange={(event) => onFilterChange(event.target.value)}
      >
        {filters.map((filter) => (
          <option key={filter.id} value={filter.id}>
            {filter.label} ({itemCounts[filter.id] ?? 0})
          </option>
        ))}
      </select>
    </label>
  );
};
