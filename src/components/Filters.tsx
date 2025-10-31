"use client";

import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export const Filters: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-2">
        <Label htmlFor="regional-filter">Regional:</Label>
        <Select>
          <SelectTrigger id="regional-filter" className="w-[180px] rounded-none border-gray-300">
            <SelectValue placeholder="Selecione Regional" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="north">Norte</SelectItem>
            <SelectItem value="south">Sul</SelectItem>
            <SelectItem value="east">Leste</SelectItem>
            <SelectItem value="west">Oeste</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Label htmlFor="client-filter">Cliente:</Label>
        <Select>
          <SelectTrigger id="client-filter" className="w-[180px] rounded-none border-gray-300">
            <SelectValue placeholder="Selecione Cliente" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="client-a">Cliente A</SelectItem>
            <SelectItem value="client-b">Cliente B</SelectItem>
            <SelectItem value="client-c">Cliente C</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Label htmlFor="category-filter">Categoria:</Label>
        <Select>
          <SelectTrigger id="category-filter" className="w-[180px] rounded-none border-gray-300">
            <SelectValue placeholder="Selecione Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="category-x">Categoria X</SelectItem>
            <SelectItem value="category-y">Categoria Y</SelectItem>
            <SelectItem value="category-z">Categoria Z</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};