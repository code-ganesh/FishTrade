import React from 'react';

const ApprovedFishermenList = ({ approvedFishermen = [] }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Approved Fishermen</h2>
      {approvedFishermen.length === 0 ? (
        <p className="text-gray-600">No approved fishermen found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Location</th>
              </tr>
            </thead>
            <tbody>
              {approvedFishermen.map((fisherman) => (
                <tr key={fisherman.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">{fisherman.name}</td>
                  <td className="py-3 px-4 text-gray-800">{fisherman.email}</td>
                  <td className="py-3 px-4 text-gray-800">{fisherman.location || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApprovedFishermenList;
