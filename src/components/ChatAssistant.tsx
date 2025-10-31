"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send } from "lucide-react";

interface ChatAssistantProps {
  onClose: () => void;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: "AI", text: "Olá! Como posso ajudar com o seu dashboard hoje?" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [...prevMessages, { sender: "User", text: input.trim() }]);
      setInput("");
      // Simulação de resposta da IA
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "AI", text: `Entendi que você disse: "${input.trim()}". Como posso ajustar o dashboard com base nisso?` },
        ]);
      }, 1000);
    }
  };

  return (
    <Card className="rounded-none border border-gray-200 shadow-none w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Assistente de Dashboard</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Fechar Assistente">
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
      <CardFooter className="flex p-4 border-t border-gray-200">
        <Input
          placeholder="Faça uma pergunta ou dê um comando..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          className="flex-1 rounded-none border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button onClick={handleSendMessage} className="ml-2 rounded-none">
          <Send className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};