"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CalendarCheck, MessageSquare } from "lucide-react";
import { DashboardDataItem } from "@/data/dashboardData"; // Import DashboardDataItem type
import { useTranslation } from "react-i18next"; // Import useTranslation
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface AgendaItem {
  modelo: string;
  pnc: string;
  voltage: string;
  quantidade: number;
}

interface AgendaCategory {
  category: string;
  totalQuantidade: number;
  details: AgendaItem[];
}

interface AgendaFobStatusProps {
  onSuggestChatInput: (text: string) => void;
  agendaData: DashboardDataItem[]; // New prop for filtered agenda data
}

export const AgendaFobStatus: React.FC<AgendaFobStatusProps> = ({ onSuggestChatInput, agendaData }) => {
  const { t } = useTranslation(); // Initialize useTranslation

  const chatSuggestionText = t("agendaFobStatus.chatSuggestionText");
  const chatSuggestionTooltip = t("agendaFobStatus.chatSuggestionTooltip");

  // Grouping and ordering logic using the agendaData prop
  const groupedData: { [key: string]: AgendaItem[] } = {};
  agendaData.forEach(item => {
    const categoryKey = item.category.toUpperCase();
    if (!groupedData[categoryKey]) {
      groupedData[categoryKey] = [];
    }
    groupedData[categoryKey].push({
      modelo: item.modelo,
      pnc: item.pnc,
      voltage: item.voltage,
      quantidade: item.quantidade,
    });
  });

  const orderedCategories = ["REFRIGERADORES", "LAVADORAS", "FOGOES", "MICROONDAS"];
  const processedAgendaData: AgendaCategory[] = orderedCategories.map(category => {
    const details = groupedData[category] || [];
    const totalQuantidade = details.reduce((sum, item) => sum + item.quantidade, 0);
    return {
      category: category,
      totalQuantidade: totalQuantidade,
      details: details,
    };
  }).filter(category => category.details.length > 0);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b border-gray-200 pb-2">
        <h2 className="text-2xl font-semibold">{t("agendaFobStatus.title")}</h2> {/* Translated text */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onSuggestChatInput(chatSuggestionText)}
              aria-label={chatSuggestionTooltip}
            >
              <MessageSquare className="h-5 w-5 text-muted-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>{chatSuggestionTooltip}</p> {/* Translated text */}
          </TooltipContent>
        </Tooltip>
      </div>
      <Card className="rounded-none border border-gray-200 shadow-none">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <CalendarCheck className="h-5 w-5 text-muted-foreground" />
            {t("agendaFobStatus.pendingItemsByCategory")} {/* Translated text */}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            {processedAgendaData.map((categoryData, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                <AccordionTrigger className="hover:no-underline py-3 px-4 text-base font-medium text-left flex justify-between items-center">
                  <span className="flex-1">{categoryData.category}</span>
                  <span className="font-normal text-sm text-muted-foreground text-right">
                    {t("agendaFobStatus.totalItems", { count: categoryData.totalQuantidade })} {/* Translated text with interpolation */}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-100">
                          <TableHead>{t("detailedKpisTable.model")}</TableHead> {/* Reusing translation key */}
                          <TableHead>{t("detailedKpisTable.pnc")}</TableHead> {/* Reusing translation key */}
                          <TableHead>{t("detailedKpisTable.voltage")}</TableHead> {/* Reusing translation key */}
                          <TableHead className="text-right">{t("detailedKpisTable.quantity")}</TableHead> {/* Reusing translation key */}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {categoryData.details.map((item, detailIndex) => (
                          <TableRow key={detailIndex} className="border-gray-100">
                            <TableCell className="font-medium">{item.modelo}</TableCell>
                            <TableCell>{item.pnc}</TableCell>
                            <TableCell>{item.voltage}</TableCell>
                            <TableCell className="text-right">{item.quantidade}</TableCell>
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