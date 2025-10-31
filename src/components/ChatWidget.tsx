"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const ChatWidget: React.FC = () => {
  const handleChatClick = () => {
    alert("Chat integrado em desenvolvimento!");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={handleChatClick}
        className="rounded-full h-14 w-14 shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
        aria-label="Abrir Chat"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  );
};