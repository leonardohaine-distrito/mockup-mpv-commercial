"use client";

import React from "react";
import { Toolbar } from "./Toolbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Toolbar />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};