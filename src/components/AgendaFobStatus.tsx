"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, Package } from "lucide-react";

export const AgendaFobStatus: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">Status de Agenda e FOB</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="rounded-none border border-gray-200 shadow-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aguardando Retorno de Agenda</CardTitle>
            <CalendarCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50 itens</div>
            <p className="text-xs text-muted-foreground">+10% em relação à semana passada</p>
            <p className="text-sm text-blue-600 mt-2">Ação: Cobrar clientes para agendamento.</p>
          </CardContent>
        </Card>

        <Card className="rounded-none border border-gray-200 shadow-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produtos Aguardando Retirada (FOB)</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 clientes</div>
            <p className="text-xs text-muted-foreground">Total de 120 produtos</p>
            <p className="text-sm text-blue-600 mt-2">Ação: Notificar logística para acompanhamento.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};