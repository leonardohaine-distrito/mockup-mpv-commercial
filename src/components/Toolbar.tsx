"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export const Toolbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-4">
        <img src="/placeholder.svg" alt="Brand Logo" className="h-8 w-8" />
        <h1 className="text-xl font-bold text-primary">Dyad Dashboard</h1>
      </div>
      <Button variant="outline" className="rounded-none">Login</Button>
    </header>
  );
};