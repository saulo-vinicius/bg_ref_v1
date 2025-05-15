// Refatorado para React + Vite (modularizado)

"use client";

import React from "react";
import { Calculator } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCalculator } from "./useCalculator";
import SubstanceForm from "./SubstanceForm";
import SubstanceList from "./SubstanceList";
import ResultPanel from "./ResultPanel";

const BoraGrowCalculator = () => {
  const calculator = useCalculator();

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5" /> Calculadora Grow
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <SubstanceForm {...calculator} />
          <SubstanceList {...calculator} />
          <ResultPanel {...calculator} />
        </CardContent>
      </Card>
    </div>
  );
};

export default BoraGrowCalculator;
