"use client";

import React from "react";
import { Layout } from "@/components/Layout";
import { Filters } from "@/components/Filters";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { DetailedKpisTable } from "@/components/DetailedKpisTable";
import { AgendaFobStatus } from "@/components/AgendaFobStatus";
import { BlocksSection } from "@/components/BlocksSection";
import { SellInOut } from "@/components/SellInOut";
import { Recommendations } from "@/components/Recommendations";
import { ChatWidget } from "@/components/ChatWidget";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <Filters />
        <ExecutiveSummary />
        <DetailedKpisTable />
        <AgendaFobStatus />
        <BlocksSection />
        <SellInOut />
        <Recommendations />
      </div>
      <ChatWidget />
    </Layout>
  );
};

export default Dashboard;