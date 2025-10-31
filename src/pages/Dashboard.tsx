"use client";

import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Filters } from "@/components/Filters";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { DetailedKpisTable } from "@/components/DetailedKpisTable";
import { AgendaFobStatus } from "@/components/AgendaFobStatus";
import { BlocksSection } from "@/components/BlocksSection";
import { SellInOut } from "@/components/SellInOut";
import { Recommendations } from "@/components/Recommendations";
import { ChatWidget } from "@/components/ChatWidget";
import { ChatAssistant } from "@/components/ChatAssistant";
import { ActivateChatButton } from "@/components/ActivateChatButton";

const Dashboard: React.FC = () => {
  const [showActivateButton, setShowActivateButton] = useState(false);
  const [showChatAssistant, setShowChatAssistant] = useState(false);

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
  };

  return (
    <Layout>
      <div className="space-y-8">
        {showChatAssistant && (
          <div className="mb-8">
            <ChatAssistant onClose={handleCloseChat} />
          </div>
        )}
        {showActivateButton && !showChatAssistant && (
          <div className="mb-8">
            <ActivateChatButton onActivate={handleActivateChat} />
          </div>
        )}
        <Filters />
        <ExecutiveSummary />
        <DetailedKpisTable />
        <AgendaFobStatus />
        <BlocksSection />
        <SellInOut />
        <Recommendations />
      </div>
      <ChatWidget onOpenAssistantPrompt={handleOpenAssistantPrompt} />
    </Layout>
  );
};

export default Dashboard;