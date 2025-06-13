// src/components/admin/PendingFishermenList.js
import React, { useState } from 'react';

const PendingFishermenList = ({ pendingFishermen, onApprove, onReject }) => {
  const [selectedFisherman, setSelectedFisherman] = useState(null);

  const handleViewDetails = (fisherman) => {
    setSelectedFisherman(fisherman);
  };

  const closeModal = () => {
    setSelectedFisherman(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pending Fishermen Approvals</h2>
      {pendingFishermen.length === 0 ? (
        <p className="text-gray-600">No fishermen awaiting approval.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Registered On</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingFishermen.map((fisherman) => (
                <tr key={fisherman.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">{fisherman.name}</td>
                  <td className="py-3 px-4 text-gray-800">{fisherman.email}</td>
                  <td className="py-3 px-4 text-gray-800">{new Date(fisherman.registeredAt).toLocaleDateString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewDetails(fisherman)}
                        className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onApprove(fisherman.id)}
                        className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => onReject(fisherman.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition"
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Fisherman Details Modal */}
      {selectedFisherman && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fisherman Details</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Name:</strong> {selectedFisherman.name}</p>
              <p><strong>Email:</strong> {selectedFisherman.email}</p>
              <p><strong>Phone:</strong> {selectedFisherman.phone}</p>
              <p><strong>Location:</strong> {selectedFisherman.location}</p>
              <p><strong>Registered:</strong> {new Date(selectedFisherman.registeredAt).toLocaleString()}</p>
              <p><strong>Bio:</strong> {selectedFisherman.bio || 'N/A'}</p>
              {/* Add more details as needed, e.g., photo URL, documents */}
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
              >
                Close
              </button>
              <button
                onClick={() => { onApprove(selectedFisherman.id); closeModal(); }}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                Approve
              </button>
              <button
                onClick={() => { onReject(selectedFisherman.id); closeModal(); }}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingFishermenList;
