// src/components/buyer/MarketAnalysisContent.js
import React from 'react';

const MarketAnalysisContent = () => {
  const priceData = [
    { name: 'Jan', Mackerel: 300, Prawns: 600 },
    { name: 'Feb', Mackerel: 310, Prawns: 620 },
    { name: 'Mar', Mackerel: 305, Prawns: 615 },
    { name: 'Apr', Mackerel: 320, Prawns: 630 },
    { name: 'May', Mackerel: 315, Prawns: 640 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Market Analysis</h2>

      <div className="mb-6">
        <h3 className="text-xl font-medium text-gray-800 mb-3">Historical Price Trends (Avg. per kg)</h3>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 min-h-64 flex items-center justify-center text-gray-600">
          <p>Chart for price trends will be displayed here (e.g., Mackerel, Prawns prices over time).</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-xl font-medium text-gray-800 mb-3">Top Selling Fish</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Mackerel</li>
            <li>Tiger Prawns</li>
            <li>Rohu</li>
            <li>King Fish</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-xl font-medium text-gray-800 mb-3">Top Rated Fishermen</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Coastal Catch (4.9 ⭐)</li>
            <li>Ocean Harvest (4.8 ⭐)</li>
            <li>River Bounty (4.7 ⭐)</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8">More detailed market insights coming soon!</p>
    </div>
  );
};

export default MarketAnalysisContent;