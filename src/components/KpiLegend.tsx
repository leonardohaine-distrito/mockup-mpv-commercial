"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslation } from "react-i18next";

export const KpiLegend: React.FC = () => {
  const { t } = useTranslation();

  const kpiRules = [
    {
      kpi: t("kpiLegend.fatQuota"),
      green: t("kpiLegend.greenRuleWeeklyWeight"),
      yellow: t("kpiLegend.yellowRuleWeeklyWeight"),
      red: t("kpiLegend.redRuleWeeklyWeight"),
    },
    {
      kpi: t("kpiLegend.fatAllocatedQuota"),
      green: t("kpiLegend.greenRuleWeeklyWeight"),
      yellow: t("kpiLegend.yellowRuleWeeklyWeight"),
      red: t("kpiLegend.redRuleWeeklyWeight"),
    },
    {
      kpi: t("kpiLegend.projectedResolvedQuota"),
      green: t("kpiLegend.greenRuleWeeklyWeight"),
      yellow: t("kpiLegend.yellowRuleWeeklyWeight"),
      red: t("kpiLegend.redRuleWeeklyWeight"),
    },
    {
      kpi: t("kpiLegend.totalSalesAdherentQuota"),
      green: t("kpiLegend.greenRuleWeeklyWeight"),
      yellow: t("kpiLegend.yellowRuleWeeklyWeight"),
      red: t("kpiLegend.redRuleWeeklyWeight"),
    },
    {
      kpi: t("kpiLegend.totalMonthSalesQuotaM0"),
      green: t("kpiLegend.greenRuleAccumulated"),
      yellow: t("kpiLegend.yellowRuleAccumulated"),
      red: t("kpiLegend.redRuleAccumulated"),
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">{t("kpiLegend.title")}</h2>
      <Card className="rounded-none border border-gray-200 shadow-none">
        <CardHeader>
          <CardTitle className="text-lg">{t("kpiLegend.colorRulesTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200">
                  <TableHead>{t("kpiLegend.kpiColumn")}</TableHead>
                  <TableHead className="text-center">{t("kpiLegend.greenColumn")}</TableHead>
                  <TableHead className="text-center">{t("kpiLegend.yellowColumn")}</TableHead>
                  <TableHead className="text-center">{t("kpiLegend.redColumn")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kpiRules.map((rule, index) => (
                  <TableRow key={index} className="border-gray-100">
                    <TableCell className="font-medium">{rule.kpi}</TableCell>
                    <TableCell className="text-center text-green-600">{rule.green}</TableCell>
                    <TableCell className="text-center text-yellow-600">{rule.yellow}</TableCell>
                    <TableCell className="text-center text-red-600">{rule.red}</TableCell>
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