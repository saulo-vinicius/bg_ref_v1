import React from "react";
import { Substance } from "./useCalculator";

interface ResultPanelProps {
  substances: Substance[];
}

const ResultPanel: React.FC<ResultPanelProps> = ({ substances }) => {
  if (substances.length === 0) return null;

  // Cálculo simplificado: soma total de cada elemento nas substâncias
  const totalElements = substances.reduce<Record<string, number>>((acc, substance) => {
    for (const [element, value] of Object.entries(substance.elements)) {
      acc[element] = (acc[element] || 0) + value;
    }
    return acc;
  }, {});

  return (
    <div className="border-t pt-4 mt-4">
      <h3 className="text-lg font-semibold">Resumo dos Elementos</h3>
      <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
        {Object.entries(totalElements).map(([element, total]) => (
          <li key={element}>
            {element}: {total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultPanel;
