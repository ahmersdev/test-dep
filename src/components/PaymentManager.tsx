"use client";

import React, { useState } from 'react';

interface Payment {
  id: number;
  name: string;
  amount: number;
  date: string;
}

const PaymentManager: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleAddPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (name && amount > 0) {
        const newPayment: Payment = {
          id: payments.length + 1,
          name,
          amount,
          date: new Date().toLocaleDateString(),
        };
        setPayments([...payments, newPayment]);
        setSuccess(true);
        setName('');
        setAmount(0);
      } else {
        setError('Failed to add payment. Please fill all fields correctly.');
      }
      setLoading(false);
    }, 1000);
  };

  const handleDeletePayment = (id: number) => {
    setPayments(payments.filter(payment => payment.id !== id));
  };

  return (
    <div className="p-6 bg-[#fcfbf9]">
      {/* Payment Form */}
      <form onSubmit={handleAddPayment} className="space-y-6">
        <div>
          <label htmlFor="payment-name" className="block text-sm font-medium text-[#4e4e4e]">
            Payment Name
          </label>
          <input
            type="text"
            id="payment-name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-[#4e4e4e] rounded-md shadow-sm placeholder-[#4e4e4e] focus:outline-none focus:ring-[#4e4e4e] focus:border-[#4e4e4e] sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-[#4e4e4e]">
            Amount ($)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            required
            className="mt-1 block w-full px-3 py-2 border border-[#4e4e4e] rounded-md shadow-sm placeholder-[#4e4e4e] focus:outline-none focus:ring-[#4e4e4e] focus:border-[#4e4e4e] sm:text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            loading ? 'bg-[#b80000]' : 'bg-[#4e4e4e] hover:bg-[#3c3c3c]'
          }`}
        >
          {loading ? 'Adding Payment...' : 'Add Payment'}
        </button>

        {success && (
          <div className="text-[#4e4e4e] text-sm mt-2">
            Payment added successfully!
          </div>
        )}

        {error && (
          <div className="text-[#b80000] text-sm mt-2">
            {error}
          </div>
        )}
      </form>

      {/* Payment List */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-[#4e4e4e] mb-4">Current Payments</h2>
        {payments.length === 0 ? (
          <p className="text-[#4e4e4e]">No payments yet.</p>
        ) : (
          <table className="min-w-full divide-y divide-[#4e4e4e]">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-[#4e4e4e]">Name</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-[#4e4e4e]">Amount ($)</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-[#4e4e4e]">Date</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="bg-[#f5f0eb] divide-y divide-[#4e4e4e]">
              {payments.map(payment => (
                <tr key={payment.id}>
                  <td className="px-4 py-2 text-sm text-[#4e4e4e]">{payment.name}</td>
                  <td className="px-4 py-2 text-sm text-[#4e4e4e]">{payment.amount}</td>
                  <td className="px-4 py-2 text-sm text-[#4e4e4e]">{payment.date}</td>
                  <td className="px-4 py-2 text-right">
                    <button
                      onClick={() => handleDeletePayment(payment.id)}
                      className="text-[#b80000] hover:text-[#a70000] text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PaymentManager;
