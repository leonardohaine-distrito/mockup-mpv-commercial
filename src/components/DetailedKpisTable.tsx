"use client";

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next"; // Import useTranslation

interface KpiDetail {
  modelo: string;
  pnc: string;
  voltage: string;
  cota: number;
  faturado: number;
  alocado: number;
  faltaVenda: number;
}

interface KpiCategory {
  category: string;
  details: KpiDetail[];
}

const mockData: KpiCategory[] = [
  {
    category: "REFRIGERADORES",
    details: [
      { modelo: "TF41", pnc: "924263191", voltage: "220 VOLT", cota: 200, faturado: 180, alocado: 10, faltaVenda: 10 },
      { modelo: "IT70", pnc: "924263014", voltage: "DUAL VOLTAGE", cota: 150, faturado: 150, alocado: 0, faltaVenda: 0 },
    ],
  },
  {
    category: "LAVADORAS",
    details: [
      { modelo: "LED14", pnc: "900941713", voltage: "220 VOLT", cota: 120, faturado: 90, alocado: 15, faltaVenda: 15 },
      { modelo: "LEE15", pnc: "900941884", voltage: "127 VOLT", cota: 100, faturado: 110, alocado: 0, faltaVenda: -10 },
    ],
  },
  {
    category: "FOGÕES",
    details: [
      { modelo: "FS50", pnc: "946501234", voltage: "127 VOLT", cota: 100, faturado: 70, alocado: 15, faltaVenda: 15 },
      { modelo: "FC60", pnc: "946505678", voltage: "220 VOLT", cota: 80, faturado: 60, alocado: 10, faltaVenda: 10 },
    ],
  },
  {
    category: "MICROONDAS",
    details: [
      { modelo: "MTD30", pnc: "947005124", voltage: "220 VOLT", cota: 80, faturado: 70, alocado: 5, faltaVenda: 5 },
      { modelo: "ME36B", pnc: "947005190", voltage: "127 VOLT", cota: 60, faturado: 60, alocado: 0, faltaVenda: 0 },
    ],
  },
];

interface DetailedKpisTableProps {
  onSuggestChatInput: (text: string) => void;
}

export const DetailedKpisTable: React.FC<DetailedKpisTableProps> = ({ onSuggestChatInput }) => {
  const { t } = useTranslation(); // Initialize useTranslation

  const chatSuggestionText = t("detailedKpisTable.chatSuggestionText");

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b border-gray-200 pb-2">
        <h2 className="text-2xl font-semibold">{t("detailedKpisTable.title")}</h2> {/* Translated text */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onSuggestChatInput(chatSuggestionText)}
              aria-label={t("detailedKpisTable.chatSuggestionTooltip")}
            >
              <MessageSquare className="h-5 w-5 text-muted-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>{t("detailedKpisTable.chatSuggestionTooltip")}</p> {/* Translated text */}
          </TooltipContent>
        </Tooltip>
      </div>
      <Card className="rounded-none border border-gray-200 shadow-none">
        <CardHeader>
          <CardTitle className="text-lg">{t("detailedKpisTable.volumeByCategory")}</CardTitle> {/* Translated text */}
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {mockData.map((categoryData, index) => {
              const totalCota = categoryData.details.reduce((sum, item) => sum + item.cota, 0);
              const totalFaturado = categoryData.details.reduce((sum, item) => sum + item.faturado, 0);
              const totalAlocado = categoryData.details.reduce((sum, item) => sum + item.alocado, 0);
              const totalFaltaVenda = categoryData.details.reduce((sum, item) => sum + item.faltaVenda, 0);
              // const overallAtingimento = totalCota > 0 ? (((totalFaturado + totalAlocado) / totalCota) * 100).toFixed(0) + "%" : "0%";


              return (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                  <AccordionTrigger className="hover:no-underline py-3 px-4 text-base font-medium text-left flex justify-between items-center">
                    <span className="flex-1">{categoryData.category}</span>
                    <div className="flex-1 grid grid-cols-4 text-right gap-4 min-w-[400px]">
                      <span className="font-normal text-sm text-muted-foreground">{t("detailedKpisTable.quota")} {totalCota}</span> {/* Translated text */}
                      <span className="font-normal text-sm text-muted-foreground">{t("detailedKpisTable.billed")} {totalFaturado}</span> {/* Translated text */}
                      <span className="font-normal text-sm text-muted-foreground">{t("detailedKpisTable.allocated")} {totalAlocado}</span> {/* Translated text */}
                      <span className="font-normal text-sm text-muted-foreground">{t("detailedKpisTable.salesShortfall")} {totalFaltaVenda}</span> {/* Translated text */}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-0">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="border-gray-100">
                            <TableHead>{t("detailedKpisTable.model")}</TableHead> {/* Translated text */}
                            <TableHead>{t("detailedKpisTable.pnc")}</TableHead> {/* Translated text */}
                            <TableHead>{t("detailedKpisTable.voltage")}</TableHead> {/* Translated text */}
                            <TableHead className="text-right">{t("detailedKpisTable.quota")}</TableHead> {/* Translated text */}
                            <TableHead className="text-right">{t("detailedKpisTable.billed")}</TableHead> {/* Translated text */}
                            <TableHead className="text-right">{t("detailedKpisTable.allocated")}</TableHead> {/* Translated text */}
                            <TableHead className="text-right">{t("detailedKpisTable.salesShortfall")}</TableHead> {/* Translated text */}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {categoryData.details.map((item, detailIndex) => (
                            <TableRow key={detailIndex} className="border-gray-100">
                              <TableCell className="font-medium">{item.modelo}</TableCell>
                              <TableCell>{item.pnc}</TableCell>
                              <TableCell>{item.voltage}</TableCell>
                              <TableCell className="text-right">{item.cota}</TableCell>
                              <TableCell className="text-right">{item.faturado}</TableCell>
                              <TableCell className="text-right">{item.alocado}</TableCell>
                              <TableCell className="text-right">
                                <span className={item.faltaVenda < 0 ? "text-green-600" : "text-red-600"}>
                                  {item.faltaVenda}
                                </span>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};