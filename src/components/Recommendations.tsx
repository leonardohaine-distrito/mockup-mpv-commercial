"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export const Recommendations: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">Conclusões e Ações Recomendadas</h2>
      <Card className="rounded-none border border-gray-200 shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Recomendações da IA</CardTitle>
          <Lightbulb className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700">
            Atingimento de cota para "Refrigeradores" está abaixo de 70% após o dia 15 do mês.
            Recomendamos focar na liberação de bloqueios de crédito para o Cliente C e negociar
            agendas pendentes para produtos de alto valor.
          </p>
          <ul className="list-disc list-inside text-sm text-blue-600 mt-2 space-y-1">
            <li>Buscar produtos faltantes para "Geladeira Y".</li>
            <li>Liberar bloqueios de crédito para o Cliente C.</li>
            <li>Negociar agenda para 50 itens pendentes.</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};