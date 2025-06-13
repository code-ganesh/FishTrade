// client/src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue to-sea-blue text-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <p className="text-3xl mb-8">Page Not Found</p>
      <p className="text-xl mb-12">Looks like you're lost at sea!</p>
      <Link
        to="/"
        className="bg-fish-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out"
      >
        Return to Shore
      </Link>
    </div>
  );
};

export default NotFoundPage;