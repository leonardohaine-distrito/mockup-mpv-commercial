"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Lock, ShieldAlert } from "lucide-react";

export const BlocksSection: React.FC = () => {
  const offenders = [
    { type: "Crédito", item: "Pedido #12345", value: "R$ 15.000" },
    { type: "Geral", item: "Produto X (Cliente B)", value: "R$ 5.000" },
    { type: "Crédito", item: "Cliente C", value: "R$ 20.000" },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">Bloqueios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="rounded-none border border-gray-200 shadow-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bloqueio de Crédito</CardTitle>
            <Lock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 35.000</div>
            <p className="text-xs text-muted-foreground">3 pedidos impactados</p>
          </CardContent>
        </Card>

        <Card className="rounded-none border border-gray-200 shadow-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bloqueio Geral</CardTitle>
            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 12.000</div>
            <p className="text-xs text-muted-foreground">2 produtos, 1 cliente</p>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-none border border-gray-200 shadow-none">
        <CardHeader>
          <CardTitle className="text-lg">Principais Ofensores de Bloqueio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200">
                  <TableHead>Tipo de Bloqueio</TableHead>
                  <TableHead>Item Impactado</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {offenders.map((offender, index) => (
                  <TableRow key={index} className="border-gray-100">
                    <TableCell>{offender.type}</TableCell>
                    <TableCell>{offender.item}</TableCell>
                    <TableCell className="text-right">{offender.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};