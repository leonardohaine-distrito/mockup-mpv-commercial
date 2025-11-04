"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";

interface ContextBarProps {
  selectedRegional: string;
  selectedClient: string;
  selectedCategory: string;
}

// Helper function to get the week of the month
const getWeekOfMonth = (date: Date): number => {
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfMonth = date.getDate();
  // Adjust for week starting on Sunday (0) or Monday (1)
  // For simplicity, we'll use a common approximation: ceil(dayOfMonth / 7)
  return Math.ceil(dayOfMonth / 7);
};

// Static map for weekly weights
const weeklyWeightsMap: { [key: number]: string } = {
  1: "15%",
  2: "20%",
  3: "25%",
  4: "40%",
  5: "40%", // Handle months with 5 weeks, assign to last week's weight
};

export const ContextBar: React.FC<ContextBarProps> = ({
  selectedRegional,
  selectedClient,
  selectedCategory,
}) => {
  const { t, i18n } = useTranslation();
  const today = new Date();

  const currentMonth = today.toLocaleString(i18n.language, { month: 'long' });
  const currentYear = today.getFullYear();
  const currentWeekNumber = getWeekOfMonth(today);
  const currentWeekWeight = weeklyWeightsMap[currentWeekNumber] || "N/A";

  const formatFilterValue = (value: string, translationKeyPrefix: string) => {
    if (value === "all") {
      return t("contextBar.all");
    }
    // Attempt to translate specific filter values if they exist in the filters section
    const translatedValue = t(`filters.${value.toLowerCase()}`);
    return translatedValue.startsWith('filters.') ? value : translatedValue; // Fallback to original value if not translated
  };

  return (
    <Card className="rounded-none border border-gray-200 shadow-none p-4 mb-4 bg-white text-sm text-gray-700">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        {/* Date and Week Info */}
        <div className="font-semibold">
          {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)} {currentYear} | {t("contextBar.currentWeek")}: {currentWeekNumber}ª {t("contextBar.week")} ({t("contextBar.weight")}: {currentWeekWeight})
        </div>

        {/* Applied Filters */}
        <div className="text-right md:text-left">
          <span className="font-semibold">{t("contextBar.appliedFilters")}: </span>
          {t("contextBar.regional")}: {formatFilterValue(selectedRegional, "filters.regional")}{" "}
          | {t("contextBar.client")}: {formatFilterValue(selectedClient, "filters.client")}{" "}
          | {t("contextBar.category")}: {formatFilterValue(selectedCategory, "filters.category")}
        </div>
      </div>
    </Card>
  );
};