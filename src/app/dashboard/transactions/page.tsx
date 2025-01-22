import React from "react";
import TransactionTable from "@/components/TransactionTable";

const TransactionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#4e4e4e] p-6">
       <header className="flex justify-between items-center mb-8">
        <div className="text-3xl font-bold">Transaction History</div>
      </header>
      
      <TransactionTable />
    </div>
  );
};

export default TransactionsPage;
