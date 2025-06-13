// src/components/admin/AdminNotifications.js
import React from 'react';

const AdminNotifications = ({ pendingFishermen }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h2>
      {pendingFishermen.length === 0 ? (
        <p className="text-gray-600">No new registration notifications.</p>
      ) : (
        <div className="space-y-3">
          {pendingFishermen.map((fisherman) => (
            <div key={fisherman.id} className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md shadow-sm">
              <p className="font-medium">New Fisherman Registration!</p>
              <p className="text-sm">
                <span className="font-semibold">{fisherman.name}</span> (ID: {fisherman.id}) has registered and is awaiting approval.
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminNotifications;
