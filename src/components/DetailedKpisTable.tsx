"use client";

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface KpiDetail {
  modelo: string;
  pnc: string;
  voltage: string;
  faturado: number;
  cota: number;
  faltaExtraCota: number;
  atingimento: string;
}

interface KpiCategory {
  category: string;
  details: KpiDetail[];
}

const mockData: KpiCategory[] = [
  {
    category: "REFRIGERADORES",
    details: [
      { modelo: "TF41", pnc: "924263191", voltage: "220 VOLT", faturado: 180, cota: 200, faltaExtraCota: 20, atingimento: "90%" },
      { modelo: "IT70", pnc: "924263014", voltage: "DUAL VOLTAGE", faturado: 150, cota: 150, faltaExtraCota: 0, atingimento: "100%" },
    ],
  },
  {
    category: "LAVADORAS",
    details: [
      { modelo: "LED14", pnc: "900941713", voltage: "220 VOLT", faturado: 90, cota: 120, faltaExtraCota: 30, atingimento: "75%" },
      { modelo: "LEE15", pnc: "900941884", voltage: "127 VOLT", faturado: 110, cota: 100, faltaExtraCota: -10, atingimento: "110%" },
    ],
  },
  {
    category: "MICROONDAS",
    details: [
      { modelo: "MTD30", pnc: "947005124", voltage: "220 VOLT", faturado: 70, cota: 80, faltaExtraCota: 10, atingimento: "88%" },
      { modelo: "ME36B", pnc: "947005190", voltage: "127 VOLT", faturado: 60, cota: 60, faltaExtraCota: 0, atingimento: "100%" },
    ],
  },
];

export const DetailedKpisTable: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">Detalhamento dos KPIs</h2>
      <Card className="rounded-none border border-gray-200 shadow-none">
        <CardHeader>
          <CardTitle className="text-lg">Volume por Categoria</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {mockData.map((categoryData, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                <AccordionTrigger className="hover:no-underline py-3 px-4 text-base font-medium text-left">
                  {categoryData.category}
                </AccordionTrigger>
                <AccordionContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-100">
                          <TableHead>Modelo</TableHead>
                          <TableHead>PNC</TableHead>
                          <TableHead>Voltagem</TableHead>
                          <TableHead className="text-right">Faturado</TableHead>
                          <TableHead className="text-right">Cota</TableHead>
                          <TableHead className="text-right">Falta/Extra Cota</TableHead>
                          <TableHead className="text-right">Atingimento</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {categoryData.details.map((item, detailIndex) => (
                          <TableRow key={detailIndex} className="border-gray-100">
                            <TableCell className="font-medium">{item.modelo}</TableCell>
                            <TableCell>{item.pnc}</TableCell>
                            <TableCell>{item.voltage}</TableCell>
                            <TableCell className="text-right">{item.faturado}</TableCell>
                            <TableCell className="text-right">{item.cota}</TableCell>
                            <TableCell className="text-right">{item.faltaExtraCota}</TableCell>
                            <TableCell className="text-right">{item.atingimento}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};