"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { X, Send } from "lucide-react";
import { useTranslation } from "react-i18next"; // Import useTranslation

interface ChatAssistantProps {
  onClose: () => void;
  initialInputText?: string | null;
  onInputTextUsed?: () => void;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({ onClose, initialInputText, onInputTextUsed }) => {
  const { t } = useTranslation(); // Initialize useTranslation

  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: "AI", text: t("chatAssistant.initialMessage") }, // Translated text
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (initialInputText) {
      setInput(initialInputText);
      if (onInputTextUsed) {
        onInputTextUsed(); // Notifica o pai que o texto foi usado
      }
    }
  }, [initialInputText, onInputTextUsed]);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [...prevMessages, { sender: "User", text: input.trim() }]);
      setInput("");
      // Simulação de resposta da IA
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "AI", text: t("chatAssistant.aiResponsePrefix", { message: input.trim() }) }, // Translated text with interpolation
        ]);
      }, 1000);
    }
  };

  return (
    <Card className="rounded-none border border-gray-200 shadow-none w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">{t("chatAssistant.title")}</CardTitle> {/* Translated text */}
        <Button variant="ghost" size="icon" onClick={onClose} aria-label={t("chatWidget.openChat")}> {/* Reusing translation key */}
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-64 p-4 border-t border-b border-gray-200">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "User" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] p-2 rounded-lg ${
                    msg.sender === "User"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex p-4 border-t border-gray-200 items-end">
        <Textarea
          placeholder={t("chatAssistant.inputPlaceholder")} // Translated text
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={5}
          className="flex-1 rounded-none border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none min-h-[40px]"
        />
        <Button onClick={handleSendMessage} className="ml-2 rounded-none h-10">
          <Send className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};