"use client";

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DetailedKpisTable: React.FC = () => {
  const data = [
    { category: "Refrigeradores", product: "Geladeira X", pnc: "PNC123", voltage: "110V", sold: 100, missing: 20, achievement: "83%" },
    { category: "Refrigeradores", product: "Geladeira Y", pnc: "PNC124", voltage: "220V", sold: 80, missing: 40, achievement: "67%" },
    { category: "Fogões", product: "Fogão Z", pnc: "PNC125", voltage: "Bivolt", sold: 50, missing: 10, achievement: "83%" },
    { category: "Lavadoras", product: "Máquina A", pnc: "PNC126", voltage: "110V", sold: 70, missing: 30, achievement: "70%" },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">Detalhamento dos KPIs</h2>
      <Card className="rounded-none border border-gray-200 shadow-none">
        <CardHeader>
          <CardTitle className="text-lg">Volume por Categoria, Produto, PNC e Voltagem</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200">
                  <TableHead className="w-[150px]">Categoria</TableHead>
                  <TableHead>Produto</TableHead>
                  <TableHead>PNC</TableHead>
                  <TableHead>Voltagem</TableHead>
                  <TableHead className="text-right">Volume Vendido</TableHead>
                  <TableHead className="text-right">Volume Faltante</TableHead>
                  <TableHead className="text-right">% Atingimento</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={index} className="border-gray-100">
                    <TableCell className="font-medium">{item.category}</TableCell>
                    <TableCell>{item.product}</TableCell>
                    <TableCell>{item.pnc}</TableCell>
                    <TableCell>{item.voltage}</TableCell>
                    <TableCell className="text-right">{item.sold}</TableCell>
                    <TableCell className="text-right">{item.missing}</TableCell>
                    <TableCell className="text-right">{item.achievement}</TableCell>
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