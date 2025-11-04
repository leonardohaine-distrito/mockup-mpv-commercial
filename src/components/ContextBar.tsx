"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { format, getDate } from "date-fns";
import { pt, enUS, es } from "date-fns/locale"; // Import locales for date-fns

interface ContextBarProps {
  selectedRegional: string;
  selectedClient: string;
  selectedCategory: string;
}

// Helper function to get the correct date-fns locale
const getLocale = (lng: string) => {
  switch (lng) {
    case "pt":
      return pt;
    case "en":
      return enUS;
    case "es":
      return es;
    default:
      return enUS;
  }
};

export const ContextBar: React.FC<ContextBarProps> = ({
  selectedRegional,
  selectedClient,
  selectedCategory,
}) => {
  const { t, i18n } = useTranslation();
  const currentLocale = getLocale(i18n.language);
  const currentDate = new Date();

  const currentMonthYear = format(currentDate, "MMMM yyyy", { locale: currentLocale });
  const dayOfMonth = getDate(currentDate);

  let currentWeekNumber;
  if (dayOfMonth <= 7) {
    currentWeekNumber = 1;
  } else if (dayOfMonth <= 14) {
    currentWeekNumber = 2;
  } else if (dayOfMonth <= 21) {
    currentWeekNumber = 3;
  } else {
    currentWeekNumber = 4;
  }

  const weeklyWeights: { [key: number]: string } = {
    1: "15%",
    2: "20%",
    3: "25%",
    4: "40%",
  };

  const currentWeekWeight = weeklyWeights[currentWeekNumber];

  // Function to format filter values using translation keys
  const formatFilterValue = (value: string) => {
    if (value === "all" || !value) return "";
    // Attempt to translate the filter value using existing keys
    const translatedValue = t(`filters.${value.toLowerCase()}`);
    return translatedValue !== `filters.${value.toLowerCase()}` ? translatedValue : value;
  };

  const appliedFilters = [
    selectedRegional !== "all" && selectedRegional !== "" ? `${t("filters.regionalLabel")} ${formatFilterValue(selectedRegional)}` : "",
    selectedClient !== "all" && selectedClient !== "" ? `${t("filters.clientLabel")} ${formatFilterValue(selectedClient)}` : "",
    selectedCategory !== "all" && selectedCategory !== "" ? `${t("filters.categoryLabel")} ${formatFilterValue(selectedCategory)}` : "",
  ].filter(Boolean); // Remove empty strings

  const filtersDisplay = appliedFilters.length > 0
    ? `${t("contextBar.appliedFilters")}: ${appliedFilters.join(" | ")}`
    : t("contextBar.noFiltersApplied");

  return (
    <div className="bg-gray-50 p-4 border-b border-gray-200 text-sm text-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
      <div className="font-medium">
        {currentMonthYear} | {t("contextBar.currentWeek")}: {currentWeekNumber}ª {t("contextBar.week")} ({t("contextBar.weight")}: {currentWeekWeight})
      </div>
      <div className="text-muted-foreground">
        {filtersDisplay}
      </div>
    </div>
  );
};