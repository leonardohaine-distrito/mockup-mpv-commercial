"use client";

import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Filters } from "@/components/Filters";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { DetailedKpisTable } from "@/components/DetailedKpisTable";
import { AgendaFobStatus } from "@/components/AgendaFobStatus";
import { FobStatusTable } from "@/components/FobStatusTable";
import { CreditBlockTable } from "@/components/CreditBlockTable";
import { OrderBlockTable } from "@/components/OrderBlockTable";
// import { BlocksSection } from "@/components/BlocksSection"; // Removed
import { SellInOut } from "@/components/SellInOut";
import { Recommendations } from "@/components/Recommendations";
import { ChatWidget } from "@/components/ChatWidget";
import { ChatAssistant } from "@/components/ChatAssistant";
import { ActivateChatButton } from "@/components/ActivateChatButton";

const Dashboard: React.FC = () => {
  const [showActivateButton, setShowActivateButton] = useState(false);
  const [showChatAssistant, setShowChatAssistant] = useState(false);
  const [suggestedChatInput, setSuggestedChatInput] = useState<string | null>(null);

  const handleOpenAssistantPrompt = () => {
    setShowActivateButton(true);
  };

  const handleActivateChat = () => {
    setShowChatAssistant(true);
    setShowActivateButton(false); // Esconde o botão "Iniciar Assistente" quando o chat é aberto
  };

  const handleCloseChat = () => {
    setShowChatAssistant(false);
    setShowActivateButton(false); // Esconde o botão "Iniciar Assistente" quando o chat é fechado
    setSuggestedChatInput(null); // Limpa a sugestão ao fechar o chat
  };

  const handleSuggestChatInput = (text: string) => {
    setSuggestedChatInput(text);
    setShowChatAssistant(true); // Abre o assistente de chat
    setShowActivateButton(false); // Esconde o botão "Iniciar Assistente"
  };

  return (
    <Layout>
      <div className="space-y-8">
        {showChatAssistant && (
          <div className="mb-8">
            <ChatAssistant
              onClose={handleCloseChat}
              initialInputText={suggestedChatInput}
              onInputTextUsed={() => setSuggestedChatInput(null)} // Limpa a sugestão após ser usada
            />
          </div>
        )}
        {showActivateButton && !showChatAssistant && (
          <div className="mb-8">
            <ActivateChatButton onActivate={handleActivateChat} />
          </div>
        )}
        <Filters />
        <ExecutiveSummary />
        <DetailedKpisTable onSuggestChatInput={handleSuggestChatInput} />
        <AgendaFobStatus onSuggestChatInput={handleSuggestChatInput} />
        <FobStatusTable onSuggestChatInput={handleSuggestChatInput} />
        <CreditBlockTable onSuggestChatInput={handleSuggestChatInput} />
        <OrderBlockTable onSuggestChatInput={handleSuggestChatInput} />
        {/* <BlocksSection /> -- Removed */}
        <SellInOut />
        <Recommendations />
      </div>
      <ChatWidget onOpenAssistantPrompt={handleOpenAssistantPrompt} />
    </Layout>
  );
};

export default Dashboard;