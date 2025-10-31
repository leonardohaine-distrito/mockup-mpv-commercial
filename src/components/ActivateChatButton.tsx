"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ActivateChatButtonProps {
  onActivate: () => void;
}

export const ActivateChatButton: React.FC<ActivateChatButtonProps> = ({ onActivate }) => {
  return (
    <div className="flex justify-center p-4 border-b border-gray-200 bg-white">
      <Button onClick={onActivate} className="rounded-none">
        Iniciar Assistente
      </Button>
    </div>
  );
};