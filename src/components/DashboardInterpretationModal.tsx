"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslation } from "react-i18next";
import { HelpCircle } from "lucide-react";

export const DashboardInterpretationModal: React.FC = () => {
  const { t } = useTranslation();

  const weeklyWeights = [
    { week: t("interpretationModal.week1"), weight: "15%", justification: t("interpretationModal.week1Justification") },
    { week: t("interpretationModal.week2"), weight: "20%", justification: t("interpretationModal.week2Justification") },
    { week: t("interpretationModal.week3"), weight: "25%", justification: t("interpretationModal.week3Justification") },
    { week: t("interpretationModal.week4"), weight: "40%", justification: t("interpretationModal.week4Justification") },
  ];

  const kpiColorRulesTotalizers = [
    { kpi: t("executiveSummary.fatQuota"), green: t("interpretationModal.kpiRuleGreenWeeklyWeight"), yellow: t("interpretationModal.kpiRuleYellowWeeklyWeight"), red: t("interpretationModal.kpiRuleRedWeeklyWeight") },
    { kpi: t("executiveSummary.fatAllocatedQuota"), green: t("interpretationModal.kpiRuleGreenWeeklyWeight"), yellow: t("interpretationModal.kpiRuleYellowWeeklyWeight"), red: t("interpretationModal.kpiRuleRedWeeklyWeight") },
    { kpi: t("executiveSummary.projectedResolvedQuota"), green: t("interpretationModal.kpiRuleGreenWeeklyWeight"), yellow: t("interpretationModal.kpiRuleYellowWeeklyWeight"), red: t("interpretationModal.kpiRuleRedWeeklyWeight") },
    { kpi: t("executiveSummary.totalSalesAdherentQuota"), green: t("interpretationModal.kpiRuleGreenWeeklyWeight"), yellow: t("interpretationModal.kpiRuleYellowWeeklyWeight"), red: t("interpretationModal.kpiRuleRedWeeklyWeight") },
    { kpi: t("executiveSummary.totalMonthSalesQuotaM0"), green: t("interpretationModal.kpiRuleGreenExpectedAccumulated"), yellow: t("interpretationModal.kpiRuleYellowExpectedAccumulated"), red: t("interpretationModal.kpiRuleRedExpectedAccumulated") },
  ];

  const kpiColorRulesBlockages = [
    { kpi: t("executiveSummary.awaitingScheduleReturn"), green: t("interpretationModal.blockageRuleGreen5"), yellow: t("interpretationModal.blockageRuleYellow5_10"), red: t("interpretationModal.blockageRuleRed10") },
    { kpi: t("executiveSummary.fobPending"), green: t("interpretationModal.blockageRuleGreen3"), yellow: t("interpretationModal.blockageRuleYellow3_7"), red: t("interpretationModal.blockageRuleRed7") },
    { kpi: t("executiveSummary.creditBlockage"), green: t("interpretationModal.blockageRuleGreen2"), yellow: t("interpretationModal.blockageRuleYellow2_5"), red: t("interpretationModal.blockageRuleRed5") },
    { kpi: t("executiveSummary.orderBlockage"), green: t("interpretationModal.blockageRuleGreen2"), yellow: t("interpretationModal.blockageRuleYellow2_5"), red: t("interpretationModal.blockageRuleRed5") },
  ];

  const kpiColorRulesSellInOut = [
    { kpi: t("executiveSummary.totalSellInCurrentMonth"), green: t("interpretationModal.sellInOutRuleGreenAdjustedAverage"), yellow: t("interpretationModal.sellInOutRuleYellowAdjustedAverage"), red: t("interpretationModal.sellInOutRuleRedAdjustedAverage") },
    { kpi: t("executiveSummary.totalSellOutCurrentMonth"), green: t("interpretationModal.sellInOutRuleGreenAdjustedAverage"), yellow: t("interpretationModal.sellInOutRuleYellowAdjustedAverage"), red: t("interpretationModal.sellInOutRuleRedAdjustedAverage") },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-none flex items-center gap-2">
          <HelpCircle className="h-4 w-4" />
          {t("interpretationModal.buttonText")}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("interpretationModal.title")}</DialogTitle>
          <DialogDescription>
            {t("interpretationModal.description")}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Distribuição de Pesos Semanais */}
          <div>
            <h3 className="text-lg font-semibold mb-2">{t("interpretationModal.weeklyWeightsTitle")}</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("interpretationModal.weekOfMonth")}</TableHead>
                  <TableHead>{t("interpretationModal.weight")}</TableHead>
                  <TableHead>{t("interpretationModal.justification")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {weeklyWeights.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.week}</TableCell>
                    <TableCell>{item.weight}</TableCell>
                    <TableCell>{item.justification}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Regras de Cores por KPI */}
          <div>
            <h3 className="text-lg font-semibold mb-2">{t("interpretationModal.colorRulesTitle")}</h3>

            {/* Totalizadores com Cota Reservada */}
            <h4 className="text-md font-medium mb-2">{t("interpretationModal.totalizersWithReservedQuota")}</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>KPI</TableHead>
                  <TableHead className="text-green-600">{t("interpretationModal.green")}</TableHead>
                  <TableHead className="text-yellow-600">{t("interpretationModal.yellow")}</TableHead>
                  <TableHead className="text-red-600">{t("interpretationModal.red")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kpiColorRulesTotalizers.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.kpi}</TableCell>
                    <TableCell>{item.green}</TableCell>
                    <TableCell>{item.yellow}</TableCell>
                    <TableCell>{item.red}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Bloqueios e Pendências */}
            <h4 className="text-md font-medium mt-4 mb-2">{t("interpretationModal.blockagesAndPending")}</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>KPI</TableHead>
                  <TableHead className="text-green-600">{t("interpretationModal.green")}</TableHead>
                  <TableHead className="text-yellow-600">{t("interpretationModal.yellow")}</TableHead>
                  <TableHead className="text-red-600">{t("interpretationModal.red")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kpiColorRulesBlockages.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.kpi}</TableCell>
                    <TableCell>{item.green}</TableCell>
                    <TableCell>{item.yellow}</TableCell>
                    <TableCell>{item.red}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Sell-In & Sell-Out */}
            <h4 className="text-md font-medium mt-4 mb-2">{t("executiveSummary.sellInOutTotals")}</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>KPI</TableHead>
                  <TableHead className="text-green-600">{t("interpretationModal.green")}</TableHead>
                  <TableHead className="text-yellow-600">{t("interpretationModal.yellow")}</TableHead>
                  <TableHead className="text-red-600">{t("interpretationModal.red")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kpiColorRulesSellInOut.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.kpi}</TableCell>
                    <TableCell>{item.green}</TableCell>
                    <TableCell>{item.yellow}</TableCell>
                    <TableCell>{item.red}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={4} className="text-sm text-muted-foreground">
                    {t("interpretationModal.sellInOutYTDNote")}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Exemplos de Interpretação */}
          <div>
            <h3 className="text-lg font-semibold mb-2">{t("interpretationModal.interpretationExamplesTitle")}</h3>
            <p className="text-sm text-gray-700">
              {t("interpretationModal.interpretationExample1")}
            </p>
            <p className="text-sm text-gray-700 mt-2">
              {t("interpretationModal.interpretationExample2")}
            </p>
          </div>

          {/* Informações sobre Sazonalidade */}
          <div>
            <h3 className="text-lg font-semibold mb-2">{t("interpretationModal.seasonalityInfoTitle")}</h3>
            <p className="text-sm text-gray-700">
              {t("interpretationModal.seasonalityInfoText")}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};