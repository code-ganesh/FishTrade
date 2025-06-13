// src/components/buyer/DashboardOverview.js
import React from 'react';

const DashboardOverview = () => {
  const stats = [
    { label: 'Total Orders', value: 15, unit: '' },
    { label: 'Total Spent', value: '15,250', unit: '₹' },
    { label: 'Pending Orders', value: 3, unit: '' },
    { label: 'Favorite Fishermen', value: 5, unit: '' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-102 flex flex-col items-center justify-center text-center"
        >
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {stat.unit}{stat.value}
          </div>
          <div className="text-lg text-gray-700">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardOverview;