"use client";

import PaymentManager from '@/components/PaymentManager';
import React from 'react';

const ManagePaymentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#4e4e4e] p-6">
    
      <header className="flex justify-between items-center mb-8">
        <div className="text-3xl font-bold">Manage Payments</div>
      </header>
        <PaymentManager />
    </div>
  );
};

export default ManagePaymentsPage;
