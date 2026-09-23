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
    <div className="filter-bar" role="group" aria-label="Filtrar registros">
      {FILTERS.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={`filter-chip${activeFilter === filter.id ? " filter-chip--active" : ""}`}
          aria-pressed={activeFilter === filter.id}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
          <span className="filter-chip__count">{itemCounts[filter.id] ?? 0}</span>
        </button>
      ))}
    </div>
  );
};
