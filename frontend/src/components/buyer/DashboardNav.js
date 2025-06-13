// src/components/buyer/DashboardNav.js
import React from 'react';

const DashboardNav = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { name: 'Marketplace', icon: '🛒' },
    { name: 'My Orders', icon: '📦' },
    { name: 'Messages', icon: '✉️' },
    { name: 'Market Analysis', icon: '📊' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-4">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`
              flex items-center space-x-2 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300
              ${activeTab === item.name
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
              }
            `}
            onClick={() => setActiveTab(item.name)}
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardNav;