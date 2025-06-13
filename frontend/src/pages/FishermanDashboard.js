// client/src/pages/FishermanDashboard.js
import React from 'react';
import { useAuth } from '../hooks/useAuth';

const FishermanDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-sandy-beige p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-sea-blue mb-6">Welcome, Fisherman {user?.username}!</h1>
        <p className="text-lg text-gray-700 mb-4">This is your Fisherman Dashboard. Here you can:</p>
        <ul className="list-disc list-inside text-gray-600">
          <li>List your daily catch</li>
          <li>Manage incoming orders</li>
          <li>Negotiate prices</li>
          <li>View your sales history</li>
          <li>Update your fisherman details (license, methods, etc.)</li>
        </ul>
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-sky-blue mb-4">Quick Links</h2>
          <div className="flex space-x-4">
            <button className="bg-fish-orange hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Add New Catch</button>
            <button className="bg-boat-wood hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Manage Listings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishermanDashboard;