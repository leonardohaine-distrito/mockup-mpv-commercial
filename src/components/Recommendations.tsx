"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next"; // Import useTranslation

export const Recommendations: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2">{t("recommendations.title")}</h2> {/* Translated text */}
      <Card className="rounded-none border border-gray-200 shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("recommendations.aiRecommendations")}</CardTitle> {/* Translated text */}
          <Lightbulb className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700">
            {t("recommendations.recommendationText")} {/* Translated text */}
          </p>
          <ul className="list-disc list-inside text-sm text-blue-600 mt-2 space-y-1">
            <li>{t("recommendations.action1")}</li> {/* Translated text */}
            <li>{t("recommendations.action2")}</li> {/* Translated text */}
            <li>{t("recommendations.action3")}</li> {/* Translated text */}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};