"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { LanguageSwitcher } from "./LanguageSwitcher"; // Import LanguageSwitcher

export const Toolbar: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-4">
        <img src="/electrolux-logo.png" alt="Electrolux Logo" className="h-8" />
        <h1 className="text-xl font-bold text-primary">{t("toolbar.dashboardTitle")}</h1> {/* Translated text */}
      </div>
      <div className="flex items-center space-x-4">
        <LanguageSwitcher /> {/* Add LanguageSwitcher here */}
        <Button variant="outline" className="rounded-none">{t("toolbar.loginButton")}</Button> {/* Translated text */}
      </div>
    </header>
  );
};