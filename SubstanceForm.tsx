import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SubstanceFormProps {
  addSubstance: (name: string, formula?: string, elements?: Record<string, number>) => void;
}

const SubstanceForm: React.FC<SubstanceFormProps> = ({ addSubstance }) => {
  const [name, setName] = useState("");
  const [formula, setFormula] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    addSubstance(name.trim(), formula.trim());
    setName("");
    setFormula("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div>
        <Label htmlFor="name">Nome da Substância</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="formula">Fórmula (opcional)</Label>
        <Input id="formula" value={formula} onChange={(e) => setFormula(e.target.value)} />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
};

export default SubstanceForm;
