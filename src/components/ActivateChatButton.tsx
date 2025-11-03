"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next"; // Import useTranslation

interface ActivateChatButtonProps {
  onActivate: () => void;
}

export const ActivateChatButton: React.FC<ActivateChatButtonProps> = ({ onActivate }) => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="flex justify-center p-4 border-b border-gray-200 bg-white">
      <Button onClick={onActivate} className="rounded-none">
        {t("activateChatButton.activateAssistant")} {/* Translated text */}
      </Button>
    </div>
  );
};