import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface Substance {
  id: string;
  name: string;
  formula?: string;
  elements: Record<string, number>;
}

export function useCalculator() {
  const [substances, setSubstances] = useState<Substance[]>([]);
  const [selectedSubstance, setSelectedSubstance] = useState<Substance | null>(null);

  const addSubstance = (name: string, formula?: string, elements?: Record<string, number>) => {
    const newSubstance: Substance = {
      id: uuidv4(),
      name,
      formula,
      elements: elements || {},
    };
    setSubstances(prev => [...prev, newSubstance]);
  };

  const removeSubstance = (id: string) => {
    setSubstances(prev => prev.filter(s => s.id !== id));
  };

  const updateSubstance = (updated: Substance) => {
    setSubstances(prev => prev.map(s => (s.id === updated.id ? updated : s)));
  };

  const selectSubstance = (id: string) => {
    const found = substances.find(s => s.id === id) || null;
    setSelectedSubstance(found);
  };

  return {
    substances,
    selectedSubstance,
    addSubstance,
    removeSubstance,
    updateSubstance,
    selectSubstance,
  };
}
