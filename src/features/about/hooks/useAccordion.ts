import { useState } from "react";

export const useAccordion = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const isActive = (id: number) => activeId === id;

  return { activeId, toggle, isActive };
};
