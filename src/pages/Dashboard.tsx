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
import { ContextBar } from "@/components/ContextBar";
import { rawAgendaData, rawFobData, rawCreditBlockData, rawOrderBlockData, rawSellInData, rawSellOutData, DashboardDataItem, SellInOutDataItem } from "@/data/dashboardData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"; // Import Dialog components

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
  const [isChatModalOpen, setIsChatModalOpen] = useState(false); // Renamed state for modal
  const [suggestedChatInput, setSuggestedChatInput] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedRegional, setSelectedRegional] = useState<string>("all");
  const [selectedClient, setSelectedClient] = useState<string>("all");

  const handleOpenChatModal = () => {
    setIsChatModalOpen(true);
  };

  const handleCloseChatModal = () => {
    setIsChatModalOpen(false);
    setSuggestedChatInput(null);
  };

  const handleSuggestChatInput = (text: string) => {
    setSuggestedChatInput(text);
    setIsChatModalOpen(true); // Open modal when suggestion is made
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
        {/* Chat Assistant Modal */}
        <Dialog open={isChatModalOpen} onOpenChange={setIsChatModalOpen}>
          <DialogContent className="sm:max-w-[600px] p-0 [&>button]:hidden"> {/* Added [&>button]:hidden to hide default close button */}
            {/* ChatAssistant already has its own Card structure, so we just render it */}
            <ChatAssistant
              onClose={handleCloseChatModal}
              initialInputText={suggestedChatInput}
              onInputTextUsed={() => setSuggestedChatInput(null)}
            />
          </DialogContent>
        </Dialog>

        <Filters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedRegional={selectedRegional}
          onRegionalChange={setSelectedRegional}
          selectedClient={selectedClient}
          onClientChange={setSelectedClient}
        />
        <ContextBar
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
          kpiData={filteredDetailedKpisData}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AgendaFobStatus
            onSuggestChatInput={handleSuggestChatInput}
            agendaData={filteredAgendaData}
          />
          <FobStatusTable
            onSuggestChatInput={handleSuggestChatInput}
            fobData={filteredFobData}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CreditBlockTable
            onSuggestChatInput={handleSuggestChatInput}
            creditBlockData={filteredCreditBlockData}
          />
          <OrderBlockTable
            onSuggestChatInput={handleSuggestChatInput}
            orderBlockData={filteredOrderBlockData}
          />
        </div>
        <SellInOut
          filteredSellInData={filteredSellInData}
          filteredSellOutData={filteredSellOutData}
        />
        <Recommendations />
      </div>
      <ChatWidget onOpenAssistantPrompt={handleOpenChatModal} /> {/* ChatWidget now opens the modal */}
    </Layout>
  );
};

export default Dashboard;