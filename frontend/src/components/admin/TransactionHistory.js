// src/components/admin/TransactionHistory.js
import React, { useState } from 'react';

const TransactionHistory = ({ transactions }) => {
  const [filterFisherman, setFilterFisherman] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filteredTransactions = transactions.filter(transaction => {
    const matchesFisherman = filterFisherman ? transaction.fishermanName.toLowerCase().includes(filterFisherman.toLowerCase()) : true;
    const matchesStatus = filterStatus ? transaction.status === filterStatus : true;
    return matchesFisherman && matchesStatus;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transaction History</h2>

      <div className="mb-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Filter by Fisherman Name..."
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={filterFisherman}
          onChange={(e) => setFilterFisherman(e.target.value)}
        />
        <select
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {filteredTransactions.length === 0 ? (
        <p className="text-gray-600">No transactions found matching your criteria.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Transaction ID</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Fisherman</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Buyer</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Amount</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">{transaction.id}</td>
                  <td className="py-3 px-4 text-gray-800">{transaction.fishermanName}</td>
                  <td className="py-3 px-4 text-gray-800">{transaction.buyerName}</td>
                  <td className="py-3 px-4 text-gray-800">₹{transaction.amount.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-800">{new Date(transaction.date).toLocaleDateString()}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
