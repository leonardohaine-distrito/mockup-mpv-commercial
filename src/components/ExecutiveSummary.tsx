"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  description: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, description }) => (
  <Card className="rounded-none border border-gray-200 shadow-none">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

export const ExecutiveSummary: React.FC = () => {
  const kpis = [
    {
      title: "% Fat x Cota",
      value: "85%",
      description: "Atingimento de cota em relação ao faturado.",
    },
    {
      title: "% Fat + Alocado x Cota",
      value: "92%",
      description: "Atingimento de cota em relação ao faturado + alocado.",
    },
    {
      title: "% Proj. Resolvido x Cota",
      value: "95%",
      description: "Projeção do atingimento de cota em relação ao faturado + alocado.",
    },
    {
      title: "% Venda Total Aderente x Cota",
      value: "88%",
      description: "Percentual da venda total aderente à cota.",
    },
    {
      title: "% Venda Total Mês x Cota M0",
      value: "90%",
      description: "Diferença da venda total do mês em relação à cota M0.",
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">Resumo Executivo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpis.map((kpi, index) => (
          <KpiCard key={index} {...kpi} />
        ))}
      </div>
    </section>
  );
};