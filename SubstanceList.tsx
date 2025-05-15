import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Edit } from "lucide-react";
import { Substance } from "./useCalculator";

interface SubstanceListProps {
  substances: Substance[];
  removeSubstance: (id: string) => void;
  selectSubstance: (id: string) => void;
}

const SubstanceList: React.FC<SubstanceListProps> = ({
  substances,
  removeSubstance,
  selectSubstance,
}) => {
  if (substances.length === 0) {
    return <p className="text-muted-foreground">Nenhuma substância adicionada.</p>;
  }

  return (
    <div className="space-y-2">
      {substances.map((s) => (
        <Card key={s.id} className="p-2 flex items-center justify-between">
          <div>
            <p className="font-medium">{s.name}</p>
            {s.formula && <p className="text-sm text-muted-foreground">{s.formula}</p>}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => selectSubstance(s.id)}>
              <Edit className="w-4 h-4" />
            </Button>
            <Button variant="destructive" size="icon" onClick={() => removeSubstance(s.id)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SubstanceList;
