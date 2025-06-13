// src/components/buyer/MyOrdersContent.js
import React from 'react';

const MyOrdersContent = () => {
  const orders = [
    { id: 'ORD001', date: '2025-05-28', items: [{ name: 'Fresh Mackerel', quantity: '2 kg', price: '₹700' }], total: '₹700', status: 'Delivered', fisherman: 'Coastal Catch' },
    { id: 'ORD002', date: '2025-05-20', items: [{ name: 'Tiger Prawns', quantity: '1 kg', price: '₹680' }], total: '₹680', status: 'Delivered', fisherman: 'Ocean Harvest' },
    { id: 'ORD003', date: '2025-06-01', items: [{ name: 'Rohu Fish', quantity: '3 kg', price: '₹840' }, { name: 'Indian Salmon', quantity: '1.5 kg', price: '₹780' }], total: '₹1620', status: 'Pending', fisherman: 'River Bounty' },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p className="text-gray-600">You haven't placed any orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Order ID: {order.id}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">Date: {order.date}</p>
              <p className="text-gray-600 text-sm mb-2">Fisherman: <span className="font-medium text-blue-700">{order.fisherman}</span></p>
              <div className="mb-3">
                <p className="font-medium text-gray-800">Items:</p>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  {order.items.map((item, idx) => (
                    <li key={idx}>{item.name} - {item.quantity} ({item.price})</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <span className="text-xl font-bold text-blue-700">Total: {order.total}</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrdersContent;