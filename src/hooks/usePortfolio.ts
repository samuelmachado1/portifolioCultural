import { useState, useCallback } from "react";
import type { BoardHouse } from "../types/portfolio";

export const usePortfolio = (initialHouses: BoardHouse[]) => {
  const [selectedHouse, setSelectedHouse] = useState<BoardHouse | null>(null);
  const [houses] = useState<BoardHouse[]>(initialHouses);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectHouse = useCallback((house: BoardHouse) => {
    setSelectedHouse(house);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedHouse(null);
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
    closeModal,
    isModalOpen,
    getHousesByType,
  };
};
