// client/src/components/common/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-sky-blue bg-opacity-75 z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-white"></div>
      <p className="text-white text-xl ml-4">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;