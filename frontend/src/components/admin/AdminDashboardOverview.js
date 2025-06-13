// src/components/admin/AdminDashboardOverview.js
import React from 'react';

const AdminDashboardOverview = ({ totalFishermen, pendingApprovals, totalTransactions, totalRevenue }) => {
  const stats = [
    { label: 'Total Fishermen', value: totalFishermen, unit: '' },
    { label: 'Pending Approvals', value: pendingApprovals, unit: '' },
    { label: 'Total Transactions', value: totalTransactions, unit: '' },
    { label: 'Total Revenue', value: totalRevenue, unit: '₹' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-102 flex flex-col items-center justify-center text-center"
        >
          <div className="text-4xl font-bold text-indigo-600 mb-2">
            {stat.unit}{stat.value}
          </div>
          <div className="text-lg text-gray-700">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboardOverview;
