"use client";

import React, { useState, useMemo } from "react";
import { Layout } from "@/components/Layout";
import { Filters } from "@/components/Filters";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { DetailedKpisTable } from "@/components/DetailedKpisTable";
import { AgendaFobStatus } from "@/components/AgendaFobStatus";
import { FobStatusTable } from "@/components/FobStatusTable";
import { CreditBlockTable } from "@/components/CreditBlockTable";
import { OrderBlockTable } from "@/components/OrderBlockTable";
import { SellInOut } from "@/components/SellInOut";
import { Recommendations } from "@/components/Recommendations";
import { ChatWidget } from "@/components/ChatWidget";
import { ChatAssistant } from "@/components/ChatAssistant";
import { ActivateChatButton } from "@/components/ActivateChatButton";
import { ContextBar } from "@/components/ContextBar"; // New import
import { rawAgendaData, rawFobData, rawCreditBlockData, rawOrderBlockData, rawSellInData, rawSellOutData, DashboardDataItem, SellInOutDataItem } from "@/data/dashboardData";

// Helper type for DetailedKpisTable
interface KpiDetail {
  modelo: string;
  pnc: string;
  voltage: string;
  cota: number;
  faturado: number;
  alocado: number;
  faltaVenda: number;
  vendaTotal: number; // Added vendaTotal
}

interface KpiCategory {
  category: string;
  details: KpiDetail[];
}

// Function to transform DashboardDataItem into KpiCategory for DetailedKpisTable
const transformToKpiCategories = (data: DashboardDataItem[]): KpiCategory[] => {
  const grouped: { [key: string]: KpiDetail[] } = {};

  data.forEach(item => {
    const categoryKey = item.category.toUpperCase();
    if (!grouped[categoryKey]) {
      grouped[categoryKey] = [];
    }
    // Simple mock transformation for KPI details based on 'quantidade'
    const faturado = item.quantidade;
    const cota = Math.round(faturado * 1.2); // Example: quota is 20% higher than billed
    const alocado = Math.round(faturado * 0.1); // Example: 10% of billed is allocated
    const faltaVenda = cota - faturado - alocado;
    const vendaTotal = faturado + alocado; // Calculate vendaTotal

    grouped[categoryKey].push({
      modelo: item.modelo,
      pnc: item.pnc,
      voltage: item.voltage,
      cota,
      faturado,
      alocado,
      faltaVenda,
      vendaTotal, // Include vendaTotal
    });
  });

  const orderedCategories = ["REFRIGERADORES", "LAVADORAS", "FOGOES", "MICROONDAS"];
  return orderedCategories.map(category => ({
    category: category,
    details: grouped[category] || [],
  })).filter(cat => cat.details.length > 0);
};


const Dashboard: React.FC = () => {
  const [showActivateButton, setShowActivateButton] = useState(false);
  const [showChatAssistant, setShowChatAssistant] = useState(false);
  const [suggestedChatInput, setSuggestedChatInput] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedRegional, setSelectedRegional] = useState<string>("all"); // New state
  const [selectedClient, setSelectedClient] = useState<string>("all");     // New state

  const handleOpenAssistantPrompt = () => {
    setShowActivateButton(true);
  };

  const handleActivateChat = () => {
    setShowChatAssistant(true);
    setShowActivateButton(false);
  };

  const handleCloseChat = () => {
    setShowChatAssistant(false);
    setShowActivateButton(false);
    setSuggestedChatInput(null);
  };

  const handleSuggestChatInput = (text: string) => {
    setSuggestedChatInput(text);
    setShowChatAssistant(true);
    setShowActivateButton(false);
  };

  // Filter data based on selectedCategory
  const filteredAgendaData = useMemo(() => {
    if (selectedCategory === "all") return rawAgendaData;
    return rawAgendaData.filter(item => item.category.toUpperCase() === selectedCategory.toUpperCase());
  }, [selectedCategory]);

  const filteredFobData = useMemo(() => {
    if (selectedCategory === "all") return rawFobData;
    return rawFobData.filter(item => item.category.toUpperCase() === selectedCategory.toUpperCase());
  }, [selectedCategory]);

  const filteredCreditBlockData = useMemo(() => {
    if (selectedCategory === "all") return rawCreditBlockData;
    return rawCreditBlockData.filter(item => item.category.toUpperCase() === selectedCategory.toUpperCase());
  }, [selectedCategory]);

  const filteredOrderBlockData = useMemo(() => {
    if (selectedCategory === "all") return rawOrderBlockData;
    return rawOrderBlockData.filter(item => item.category.toUpperCase() === selectedCategory.toUpperCase());
  }, [selectedCategory]);

  const filteredSellInData = useMemo(() => {
    if (selectedCategory === "all") return rawSellInData;
    return rawSellInData.filter(item => item.category.toUpperCase() === selectedCategory.toUpperCase());
  }, [selectedCategory]);

  const filteredSellOutData = useMemo(() => {
    if (selectedCategory === "all") return rawSellOutData;
    return rawSellOutData.filter(item => item.category.toUpperCase() === selectedCategory.toUpperCase());
  }, [selectedCategory]);

  // Combine all raw data for the DetailedKpisTable transformation
  const allRawData = useMemo(() => [
    ...rawAgendaData,
    ...rawFobData,
    ...rawCreditBlockData,
    ...rawOrderBlockData,
  ], []);

  const filteredDetailedKpisData = useMemo(() => {
    const dataToProcess = selectedCategory === "all"
      ? allRawData
      : allRawData.filter(item => item.category.toUpperCase() === selectedCategory.toUpperCase());
    return transformToKpiCategories(dataToProcess);
  }, [selectedCategory, allRawData]);


  return (
    <Layout>
      <div className="space-y-8">
        {showChatAssistant && (
          <div className="mb-8">
            <ChatAssistant
              onClose={handleCloseChat}
              initialInputText={suggestedChatInput}
              onInputTextUsed={() => setSuggestedChatInput(null)}
            />
          </div>
        )}
        {showActivateButton && !showChatAssistant && (
          <div className="mb-8">
            <ActivateChatButton onActivate={handleActivateChat} />
          </div>
        )}
        <Filters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedRegional={selectedRegional} // Pass new props
          onRegionalChange={setSelectedRegional} // Pass new props
          selectedClient={selectedClient}     // Pass new props
          onClientChange={setSelectedClient}     // Pass new props
        />
        <ContextBar // New component
          selectedRegional={selectedRegional}
          selectedClient={selectedClient}
          selectedCategory={selectedCategory}
        />
        <ExecutiveSummary
          filteredAgendaData={filteredAgendaData}
          filteredFobData={filteredFobData}
          filteredCreditBlockData={filteredCreditBlockData}
          filteredOrderBlockData={filteredOrderBlockData}
          filteredSellInData={filteredSellInData}
          filteredSellOutData={filteredSellOutData}
        />
        <DetailedKpisTable
          onSuggestChatInput={handleSuggestChatInput}
          kpiData={filteredDetailedKpisData} // Pass filtered data
        />
        <AgendaFobStatus
          onSuggestChatInput={handleSuggestChatInput}
          agendaData={filteredAgendaData} // Pass filtered data
        />
        <FobStatusTable
          onSuggestChatInput={handleSuggestChatInput}
          fobData={filteredFobData} // Pass filtered data
        />
        <CreditBlockTable
          onSuggestChatInput={handleSuggestChatInput}
          creditBlockData={filteredCreditBlockData} // Pass filtered data
        />
        <OrderBlockTable
          onSuggestChatInput={handleSuggestChatInput}
          orderBlockData={filteredOrderBlockData} // Pass filtered data
        />
        <SellInOut
          filteredSellInData={filteredSellInData}
          filteredSellOutData={filteredSellOutData}
        />
        <Recommendations />
      </div>
      <ChatWidget onOpenAssistantPrompt={handleOpenAssistantPrompt} />
    </Layout>
  );
};

export default Dashboard;