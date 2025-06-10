import { useState, useCallback } from "react";
import type { BoardHouse } from "../types/portfolio";

export const usePortfolio = (initialHouses: BoardHouse[]) => {
  const [selectedHouse, setSelectedHouse] = useState<BoardHouse | null>(null);
  const [houses] = useState<BoardHouse[]>(initialHouses);

  const selectHouse = useCallback((house: BoardHouse) => {
    setSelectedHouse(house);
  }, []);

  const getHousesByType = useCallback(
    (type: BoardHouse["type"]) => {
      return houses.filter((house) => house.type === type);
    },
    [houses]
  );

  return {
    houses,
    selectedHouse,
    selectHouse,
    getHousesByType,
  };
};
