import React from 'react';
import { useNavigate } from 'react-router-dom';

const MarketplaceContent = () => {
  const navigate = useNavigate();

  const fishListings = [
    {
      id: 1,
      name: 'Fresh Mackerel',
      photo: 'https://placehold.co/150x150/FFD700/000000?text=Mackerel'
,
      grade: 'Premium',
      price: 350,
      availability: 'In Stock',
      fisherman: 'Coastal Catch',
      fishermanId: 'john123', // Add actual IDs
      location: 'Mangalore',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Tiger Prawns',
      photo: 'https://placehold.co/150x150/FFD700/000000?text=Mackerel'
,
      grade: 'Standard',
      price: 680,
      availability: 'Limited Stock',
      fisherman: 'Ocean Harvest',
      fishermanId: 'emily456',
      location: 'Kochi',
      rating: 4.5
    },
    // ...more
  ];

  const handleMessage = (fishermanId) => {
    navigate(`/messages/${fishermanId}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Marketplace</h2>

      {/* Filters here... */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {fishListings.map((fish) => (
          <div
            key={fish.id}
            className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          >
            <img src={fish.photo} alt={fish.name} className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{fish.name}</h3>
              <p className="text-sm text-gray-600">Grade: <span className="font-medium">{fish.grade}</span></p>
              <p className="text-sm text-gray-600 mb-2">Fisherman: <span className="font-medium text-blue-700">{fish.fisherman}</span></p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-green-700">₹{fish.price}<span className="text-base text-gray-500">/kg</span></span>
                <span className={`px-2 py-1 rounded-full text-sm font-semibold ${
                  fish.availability === 'In Stock' ? 'bg-green-100 text-green-800' :
                  fish.availability === 'Limited Stock' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {fish.availability}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Location: {fish.location} | Rating: {fish.rating} ⭐</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-lg font-semibold">
                  Add to Cart
                </button>
                <button
                  onClick={() => handleMessage(fish.fishermanId)}
                  className="flex-1 bg-gray-200 text-blue-700 py-2 rounded-md hover:bg-gray-300 transition text-lg font-semibold"
                >
                  Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 mt-8">More fish coming soon!</p>
    </div>
  );
};

export default MarketplaceContent;
