// app/dashboard/layout.tsx
"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import store from "@/store";
import { Provider } from "react-redux";
import { IChildrenProps } from "@/interfaces";
import { AiOutlineMenu } from "react-icons/ai";

const DashboardLayout = ({ children }: IChildrenProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Toggle Button for Small Screens */}
      <button
        className="md:hidden p-4 text-[#4e4e4e] fixed top-4 left-4 z-50 bg-[#f5f0eb] rounded"
        onClick={toggleSidebar}
      >
        <AiOutlineMenu size={30} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 bg-[#f5f0eb] text-[#4e4e4e] border-r-2 border-[#4e4e4e] transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:relative md:translate-x-0 md:w-72`}
      >
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto transition-all duration-300">
        <Navbar />
        <Provider store={store}>
          <main className="p-4 bg-[#fcfbf9] text-[#4e4e4e]">
            {children}
          </main>
        </Provider>
      </div>
    </div>
  );
};

export default DashboardLayout;
