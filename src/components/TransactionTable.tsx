"use client";
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface Transaction {
  id: string;
  userId: string;
  userName: string;
  amount: number;
  status: "succeeded" | "failed";
  type: string;
  propertyId: string;
  propertyName: string;
  createdAt: string;
}

const TransactionTable: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Only access localStorage on the client side
    if (typeof window !== "undefined") {
      const savedToken = localStorage.getItem("authToken");
      setToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (!token) {
      console.error("Authorization token not found");
      setLoading(false); // Stop loading if no token
      return;
    }

    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/user/transaction/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }
        
        const data = await response.json();
        setTransactions(data.transactions || []);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="text-lg text-[#4e4e4e]">Loading transactions...</span>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-[#f5f0eb] p-4 rounded-lg">
      {transactions.length > 0 ? (
        <table className="min-w-full bg-[#f5f0eb] text-[#4e4e4e]">
          <thead>
            <tr className="text-left">
              <th className="p-4 font-semibold text-[#4e4e4e]">User</th>
              <th className="p-4 font-semibold text-[#4e4e4e]">Type</th>
              <th className="p-4 font-semibold text-[#4e4e4e]">Amount</th>
              <th className="p-4 font-semibold text-[#4e4e4e]">Property</th>
              <th className="p-4 font-semibold text-[#4e4e4e]">Status</th>
              <th className="p-4 font-semibold text-[#4e4e4e]">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-[#eae6df] transition duration-200"
              >
                <td className="p-4">{transaction.userName}</td>
                <td className="p-4">{transaction.type}</td>
                <td className="p-4">{transaction.amount}</td>
                <td className="p-4">{transaction.propertyName}</td>
                <td className="p-4">
                  {transaction.status === "succeeded" ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500" />
                  )}
                </td>
                <td className="p-4">{new Date(transaction.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-[#4e4e4e]">No transactions found</p>
      )}
    </div>
  );
};

export default TransactionTable;
