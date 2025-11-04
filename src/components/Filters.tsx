"use client";

import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next"; // Import useTranslation

interface FiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedRegional: string; // New prop
  onRegionalChange: (regional: string) => void; // New prop
  selectedClient: string; // New prop
  onClientChange: (client: string) => void; // New prop
}

export const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  selectedRegional, // Destructure new props
  onRegionalChange, // Destructure new props
  selectedClient,   // Destructure new props
  onClientChange,   // Destructure new props
}) => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-2">
        <Label htmlFor="regional-filter">{t("filters.regionalLabel")}</Label> {/* Translated text */}
        <Select onValueChange={onRegionalChange} value={selectedRegional}> {/* Controlled */}
          <SelectTrigger id="regional-filter" className="w-[180px] rounded-none border-gray-300">
            <SelectValue placeholder={t("filters.selectRegionalPlaceholder")} /> {/* Translated text */}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("filters.allRegionals")}</SelectItem> {/* Add 'All' option */}
            <SelectItem value="north">{t("filters.north")}</SelectItem> {/* Translated text */}
            <SelectItem value="south">{t("filters.south")}</SelectItem> {/* Translated text */}
            <SelectItem value="east">{t("filters.east")}</SelectItem> {/* Translated text */}
            <SelectItem value="west">{t("filters.west")}</SelectItem> {/* Translated text */}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Label htmlFor="client-filter">{t("filters.clientLabel")}</Label> {/* Translated text */}
        <Select onValueChange={onClientChange} value={selectedClient}> {/* Controlled */}
          <SelectTrigger id="client-filter" className="w-[180px] rounded-none border-gray-300">
            <SelectValue placeholder={t("filters.selectClientPlaceholder")} /> {/* Translated text */}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("filters.allClients")}</SelectItem> {/* Add 'All' option */}
            <SelectItem value="magazine-luiza">{t("filters.magazineLuiza")}</SelectItem>
            <SelectItem value="casas-bahia">{t("filters.casasBahia")}</SelectItem>
            <SelectItem value="gazin">{t("filters.gazin")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Label htmlFor="category-filter">{t("filters.categoryLabel")}</Label> {/* Translated text */}
        <Select onValueChange={onCategoryChange} value={selectedCategory}>
          <SelectTrigger id="category-filter" className="w-[180px] rounded-none border-gray-300">
            <SelectValue placeholder={t("filters.selectCategoryPlaceholder")} /> {/* Translated text */}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("filters.allCategories")}</SelectItem> {/* New 'All' option */}
            <SelectItem value="refrigeradores">{t("filters.refrigerators")}</SelectItem>
            <SelectItem value="lavadoras">{t("filters.washers")}</SelectItem>
            <SelectItem value="fogoes">{t("filters.stoves")}</SelectItem>
            <SelectItem value="microondas">{t("filters.microwaves")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};