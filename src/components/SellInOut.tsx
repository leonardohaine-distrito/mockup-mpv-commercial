"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslation } from "react-i18next"; // Import useTranslation

export const SellInOut: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  const sellInData = [
    { category: "REFRIGERADORES", currentMonth: 1200, prevMonth: 1100, lastYearMonth: 1000, currentYear: 10000, lastYear: 9500 },
    { category: "LAVADORAS", currentMonth: 850, prevMonth: 800, lastYearMonth: 750, currentYear: 7000, lastYear: 6800 },
    { category: "FOGÕES", currentMonth: 800, prevMonth: 750, lastYearMonth: 700, currentYear: 6500, lastYear: 6000 },
    { category: "MICROONDAS", currentMonth: 400, prevMonth: 380, lastYearMonth: 350, currentYear: 3200, lastYear: 3000 },
  ];

  // Updated sellOutData to match the structure of sellInData
  const sellOutData = [
    { category: "REFRIGERADORES", currentMonth: 1150, prevMonth: 1050, lastYearMonth: 980, currentYear: 9800, lastYear: 9300 },
    { category: "LAVADORAS", currentMonth: 820, prevMonth: 780, lastYearMonth: 730, currentYear: 6900, lastYear: 6700 },
    { category: "FOGÕES", currentMonth: 780, prevMonth: 730, lastYearMonth: 680, currentYear: 6300, lastYear: 5800 },
    { category: "MICROONDAS", currentMonth: 390, prevMonth: 370, lastYearMonth: 340, currentYear: 3100, lastYear: 2900 },
  ];

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
                {sellOutData.map((item, index) => (
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