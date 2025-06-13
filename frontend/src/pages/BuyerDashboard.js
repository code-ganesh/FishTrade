// src/pages/BuyerDashboardPage.js
import React, { useState } from 'react';
import DashboardOverview from '../components/buyer/DashboardOverview';
import DashboardNav from '../components/buyer/DashboardNav';
import MarketplaceContent from '../components/buyer/MarketplaceContent'; // Renamed import
import MyOrdersContent from '../components/buyer/MyOrdersContent';     // Renamed import
import MessagesContent from '../components/buyer/MessagesContent';     // Renamed import
import MarketAnalysisContent from '../components/buyer/MarketAnalysisContent'; // Renamed import

const BuyerDashboardPage = () => { // Renamed component
  const [activeTab, setActiveTab] = useState('Marketplace');

  const renderContent = () => {
    switch (activeTab) {
      case 'Marketplace':
        return <MarketplaceContent />;
      case 'My Orders':
        return <MyOrdersContent />;
      case 'Messages':
        return <MessagesContent />;
      case 'Market Analysis':
        return <MarketAnalysisContent />;
      default:
        return <MarketplaceContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Buyer Dashboard
        </h1>

        <DashboardOverview />
        <DashboardNav activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboardPage;