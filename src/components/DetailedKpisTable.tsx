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
  vendaTotal: number; // Added vendaTotal
}

interface KpiCategory {
  category: string;
  details: KpiDetail[];
}

interface DetailedKpisTableProps {
  onSuggestChatInput: (text: string) => void;
  kpiData: KpiCategory[]; // New prop for filtered KPI data
}

export const DetailedKpisTable: React.FC<DetailedKpisTableProps> = ({ onSuggestChatInput, kpiData }) => {
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
            {kpiData.map((categoryData, index) => { // Use kpiData prop
              const totalCota = categoryData.details.reduce((sum, item) => sum + item.cota, 0);
              const totalFaturado = categoryData.details.reduce((sum, item) => sum + item.faturado, 0);
              const totalAlocado = categoryData.details.reduce((sum, item) => sum + item.alocado, 0);
              const totalFaltaVenda = categoryData.details.reduce((sum, item) => sum + item.faltaVenda, 0);
              const totalVendaTotal = categoryData.details.reduce((sum, item) => sum + item.vendaTotal, 0); // Calculate totalVendaTotal

              return (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                  <AccordionTrigger className="hover:no-underline py-3 px-4 text-base font-medium text-left flex justify-between items-center">
                    <span className="flex-1">{categoryData.category}</span>
                    <div className="flex-1 grid grid-cols-5 text-right gap-4 min-w-[500px]"> {/* Adjusted grid-cols */}
                      <span className="font-normal text-sm text-muted-foreground">{t("detailedKpisTable.quota")} {totalCota}</span> {/* Translated text */}
                      <span className="font-normal text-sm text-muted-foreground">{t("detailedKpisTable.billed")} {totalFaturado}</span> {/* Translated text */}
                      <span className="font-normal text-sm text-muted-foreground">{t("detailedKpisTable.allocated")} {totalAlocado}</span> {/* Translated text */}
                      <span className="font-normal text-sm text-muted-foreground">{t("detailedKpisTable.salesShortfall")} {totalFaltaVenda}</span> {/* Translated text */}
                      <span className="font-normal text-sm text-muted-foreground">{t("detailedKpisTable.totalSales")} {totalVendaTotal}</span> {/* Display totalVendaTotal */}
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
                            <TableHead className="text-right">{t("detailedKpisTable.totalSales")}</TableHead> {/* New TableHead for Venda Total */}
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
                              <TableCell className="text-right">{item.vendaTotal}</TableCell> {/* Display vendaTotal */}
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