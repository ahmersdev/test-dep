"use client";
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#fcfbf9] p-4 flex justify-between items-center shadow-md">
      <h1 className="text-[#4e4e4e] text-2xl font-semibold">.</h1>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-[#4e4e4e] text-[#fcfbf9] rounded-lg">Connect Wallet</button>
        <button className="px-4 py-2 bg-[#4e4e4e] text-[#fcfbf9] rounded-lg">Logout</button>
        <div className="w-10 h-10 bg-[#f5f0eb] rounded-full"></div>
      </div>
    </nav>
  );
};

export default Navbar;
