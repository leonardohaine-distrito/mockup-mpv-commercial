"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const SellInOut: React.FC = () => {
  const sellInData = [
    { category: "Refrigeradores", currentMonth: 1200, prevMonth: 1100, lastYearMonth: 1000, currentYear: 10000, lastYear: 9500 },
    { category: "Fogões", currentMonth: 800, prevMonth: 750, lastYearMonth: 700, currentYear: 6500, lastYear: 6000 },
  ];

  const sellOutData = [
    { category: "Refrigeradores", reported: 1150, cotaAchievement: "95%" },
    { category: "Fogões", reported: 780, cotaAchievement: "90%" },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">Sell-In e Sell-Out</h2>

      <Card className="rounded-none border border-gray-200 shadow-none">
        <CardHeader>
          <CardTitle className="text-lg">Sell-In (Comparativo por Categoria)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200">
                  <TableHead>Categoria</TableHead>
                  <TableHead className="text-right">Mês Atual</TableHead>
                  <TableHead className="text-right">Mês Anterior</TableHead>
                  <TableHead className="text-right">Mês Ano Passado</TableHead>
                  <TableHead className="text-right">Ano Atual (YTD)</TableHead>
                  <TableHead className="text-right">Ano Passado (YTD)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sellInData.map((item, index) => (
                  <TableRow key={index} className="border-gray-100">
                    <TableCell className="font-medium">{item.category}</TableCell>
                    <TableCell className="text-right">{item.currentMonth}</TableCell>
                    <TableCell className="text-right">{item.prevMonth}</TableCell>
                    <TableCell className="text-right">{item.lastYearMonth}</TableCell>
                    <TableCell className="text-right">{item.currentYear}</TableCell>
                    <TableCell className="text-right">{item.lastYear}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-none border border-gray-200 shadow-none">
        <CardHeader>
          <CardTitle className="text-lg">Sell-Out (Reportado pelo Cliente)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200">
                  <TableHead>Categoria</TableHead>
                  <TableHead className="text-right">Volume Reportado</TableHead>
                  <TableHead className="text-right">% Atingimento Cota</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sellOutData.map((item, index) => (
                  <TableRow key={index} className="border-gray-100">
                    <TableCell className="font-medium">{item.category}</TableCell>
                    <TableCell className="text-right">{item.reported}</TableCell>
                    <TableCell className="text-right">{item.cotaAchievement}</TableCell>
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