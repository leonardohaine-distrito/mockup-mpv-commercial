"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next"; // Import useTranslation

interface ChatWidgetProps {
  onOpenAssistantPrompt: () => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ onOpenAssistantPrompt }) => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={onOpenAssistantPrompt}
        className="rounded-full h-14 w-14 shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
        aria-label={t("chatWidget.openChat")}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  );
};