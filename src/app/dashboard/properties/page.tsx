"use client";
import React from "react";
import PropertyTable from "@/components/PropertyTable";

const PropertiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#4e4e4e] p-6">
      
      <header className="flex justify-between items-center mb-8">
        <div className="text-3xl font-bold">All Properties</div>
      </header>

      <PropertyTable />
    </div>
  );
};

export default PropertiesPage;