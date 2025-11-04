"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { SellInOutDataItem } from "@/data/dashboardData"; // Import SellInOutDataItem type

interface SellInOutProps {
  filteredSellInData: SellInOutDataItem[];
  filteredSellOutData: SellInOutDataItem[];
}

export const SellInOut: React.FC<SellInOutProps> = ({ filteredSellInData, filteredSellOutData }) => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">{t("sellInOut.title")}</h2> {/* Translated text */}

      <Card className="rounded-none border border-gray-200 shadow-none">
        <CardHeader>
          <CardTitle className="text-lg">{t("sellInOut.sellInComparative")}</CardTitle> {/* Translated text */}
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200">
                  <TableHead>{t("sellInOut.category")}</TableHead> {/* Translated text */}
                  <TableHead className="text-right">{t("sellInOut.currentMonth")}</TableHead> {/* Translated text */}
                  <TableHead className="text-right">{t("sellInOut.previousMonth")}</TableHead> {/* Translated text */}
                  <TableHead className="text-right">{t("sellInOut.lastYearMonth")}</TableHead> {/* Translated text */}
                  <TableHead className="text-right">{t("sellInOut.currentYearYTD")}</TableHead> {/* Translated text */}
                  <TableHead className="text-right">{t("sellInOut.lastYearYTD")}</TableHead> {/* Translated text */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSellInData.map((item, index) => (
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
          <CardTitle className="text-lg">{t("sellInOut.sellOutReported")}</CardTitle> {/* Translated text */}
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200">
                  <TableHead>{t("sellInOut.category")}</TableHead> {/* Translated text */}
                  <TableHead className="text-right">{t("sellInOut.currentMonth")}</TableHead> {/* Translated text */}
                  <TableHead className="text-right">{t("sellInOut.previousMonth")}</TableHead> {/* Translated text */}
                  <TableHead className="text-right">{t("sellInOut.lastYearMonth")}</TableHead> {/* Translated text */}
                  <TableHead className="text-right">{t("sellInOut.currentYearYTD")}</TableHead> {/* Translated text */}
                  <TableHead className="text-right">{t("sellInOut.lastYearYTD")}</TableHead> {/* Translated text */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSellOutData.map((item, index) => (
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
    </section>
  );
};