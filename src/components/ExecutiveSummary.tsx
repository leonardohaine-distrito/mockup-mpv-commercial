"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";
import { rawAgendaData, rawFobData, rawCreditBlockData, rawOrderBlockData } from "@/data/dashboardData";
import { useTranslation } from "react-i18next"; // Import useTranslation

interface KpiCardProps {
  title: string;
  value: string | number;
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
  const { t } = useTranslation(); // Initialize useTranslation

  const kpis = [
    {
      title: t("executiveSummary.fatQuota"),
      value: "85%",
      description: t("executiveSummary.fatQuotaDescription"),
    },
    {
      title: t("executiveSummary.fatAllocatedQuota"),
      value: "92%",
      description: t("executiveSummary.fatAllocatedQuotaDescription"),
    },
    {
      title: t("executiveSummary.projectedResolvedQuota"),
      value: "95%",
      description: t("executiveSummary.projectedResolvedQuotaDescription"),
    },
    {
      title: t("executiveSummary.totalSalesAdherentQuota"),
      value: "88%",
      description: t("executiveSummary.totalSalesAdherentQuotaDescription"),
    },
    {
      title: t("executiveSummary.totalMonthSalesQuotaM0"),
      value: "90%",
      description: t("executiveSummary.totalMonthSalesQuotaM0Description"),
    },
  ];

  // Calculate totals for the new summary card
  const totalAgenda = rawAgendaData.reduce((sum, item) => sum + item.quantidade, 0);
  const totalFob = rawFobData.filter(item => item.indicador === "FOB Pendente").reduce((sum, item) => sum + item.quantidade, 0);
  const totalCreditBlock = rawCreditBlockData.filter(item => item.indicador === "Bloq. Crédito").reduce((sum, item) => sum + item.quantidade, 0);
  const totalOrderBlock = rawOrderBlockData.filter(item => item.indicador === "Ordens Bloq").reduce((sum, item) => sum + item.quantidade, 0);

  // Mock data for Sell-In and Sell-Out totals for current month, previous month, last year month, and current year YTD
  // These values should ideally come from a more robust data source or context
  const sellInTotals = {
    currentMonth: 1200 + 850 + 800 + 400,
    previousMonth: 1100 + 800 + 750 + 380,
    lastYearMonth: 1000 + 750 + 700 + 350,
    currentYearYTD: 10000 + 7000 + 6500 + 3200,
  };

  const sellOutTotals = {
    currentMonth: 1150 + 820 + 780 + 390,
    previousMonth: 1050 + 780 + 730 + 370,
    lastYearMonth: 980 + 730 + 680 + 340,
    currentYearYTD: 9800 + 6900 + 6300 + 3100,
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">{t("executiveSummary.title")}</h2> {/* Translated text */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpis.map((kpi, index) => (
          <KpiCard key={index} {...kpi} />
        ))}
        <Card className="rounded-none border border-gray-200 shadow-none lg:col-span-5">
          <CardHeader>
            <CardTitle className="text-lg">{t("executiveSummary.blockagesAndPendingTotals")}</CardTitle> {/* Translated text */}
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-flex items-center justify-center gap-1 cursor-help">
                    <p className="text-sm text-muted-foreground">{t("executiveSummary.awaitingScheduleReturn")}</p> {/* Translated text */}
                    <HelpCircle className="h-3 w-3 text-muted-foreground" />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>{t("executiveSummary.awaitingScheduleReturnDescription")}</p> {/* Translated text */}
                </TooltipContent>
              </Tooltip>
              <p className="text-xl font-bold">{totalAgenda}</p>
            </div>
            <div className="text-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-flex items-center justify-center gap-1 cursor-help">
                    <p className="text-sm text-muted-foreground">{t("executiveSummary.fobPending")}</p> {/* Translated text */}
                    <HelpCircle className="h-3 w-3 text-muted-foreground" />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>{t("executiveSummary.fobPendingDescription")}</p> {/* Translated text */}
                </TooltipContent>
              </Tooltip>
              <p className="text-xl font-bold">{totalFob}</p>
            </div>
            <div className="text-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-flex items-center justify-center gap-1 cursor-help">
                    <p className="text-sm text-muted-foreground">{t("executiveSummary.creditBlockage")}</p> {/* Translated text */}
                    <HelpCircle className="h-3 w-3 text-muted-foreground" />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>{t("executiveSummary.creditBlockageDescription")}</p> {/* Translated text */}
                </TooltipContent>
              </Tooltip>
              <p className="text-xl font-bold">{totalCreditBlock}</p>
            </div>
            <div className="text-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-flex items-center justify-center gap-1 cursor-help">
                    <p className="text-sm text-muted-foreground">{t("executiveSummary.orderBlockage")}</p> {/* Translated text */}
                    <HelpCircle className="h-3 w-3 text-muted-foreground" />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>{t("executiveSummary.orderBlockageDescription")}</p> {/* Translated text */}
                </TooltipContent>
              </Tooltip>
              <p className="text-xl font-bold">{totalOrderBlock}</p>
            </div>
          </CardContent>
        </Card>

        {/* New grouped card for Sell-In and Sell-Out totals */}
        <Card className="rounded-none border border-gray-200 shadow-none lg:col-span-5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              {t("executiveSummary.sellInOutTotals")}
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>{t("executiveSummary.sellInOutTotalsDescription")}</p>
                </TooltipContent>
              </Tooltip>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">{t("executiveSummary.totalSellInCurrentMonth")}</p>
              <p className="text-xl font-bold">{sellInTotals.currentMonth}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">{t("executiveSummary.totalSellInPreviousMonth")}</p>
              <p className="text-xl font-bold">{sellInTotals.previousMonth}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">{t("executiveSummary.totalSellInLastYearMonth")}</p>
              <p className="text-xl font-bold">{sellInTotals.lastYearMonth}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">{t("executiveSummary.totalSellInCurrentYearYTD")}</p>
              <p className="text-xl font-bold">{sellInTotals.currentYearYTD}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">{t("executiveSummary.totalSellOutCurrentMonth")}</p>
              <p className="text-xl font-bold">{sellOutTotals.currentMonth}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">{t("executiveSummary.totalSellOutPreviousMonth")}</p>
              <p className="text-xl font-bold">{sellOutTotals.previousMonth}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">{t("executiveSummary.totalSellOutLastYearMonth")}</p>
              <p className="text-xl font-bold">{sellOutTotals.lastYearMonth}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">{t("executiveSummary.totalSellOutCurrentYearYTD")}</p>
              <p className="text-xl font-bold">{sellOutTotals.currentYearYTD}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};