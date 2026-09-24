import React from "react";
import "./FilterBar.css";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  itemCounts: { [key: string]: number };
}

const FILTERS = [
  { id: "all", label: "Todos" },
  { id: "experience", label: "Experiências" },
  { id: "milestone", label: "Marcos" },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  activeFilter,
  onFilterChange,
  itemCounts,
}) => {
  return (
    <label className="filter-bar">
      <span className="filter-bar__label">Filtro</span>
      <select
        value={activeFilter}
        aria-label="Filtrar registros"
        onChange={(event) => onFilterChange(event.target.value)}
      >
        {FILTERS.map((filter) => (
          <option key={filter.id} value={filter.id}>
            {filter.label} ({itemCounts[filter.id] ?? 0})
          </option>
        ))}
      </select>
    </label>
  );
};
