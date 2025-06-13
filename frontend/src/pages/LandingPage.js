import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElements from '../components/common/AnimatedElements';
import logo from '../assets/images/logo.png';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 flex flex-col items-center justify-center text-center overflow-hidden p-4">
      {/* Preserve animated floating visuals */}
      <AnimatedElements />

      {/* Main card */}
      <div className="relative z-20 flex flex-col items-center p-8 bg-white/90 rounded-3xl shadow-2xl max-w-6xl w-full mx-auto border border-white backdrop-blur-md">
        <img
          src={logo}
          alt="AquaTrade Logo"
          className="h-24 w-auto mb-6 animate-[float_3s_ease-in-out_infinite]"
        />
        <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-900 mb-4 leading-tight">
          AquaTrade
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-10 font-medium max-w-2xl">
          Your Direct Link to the Freshest Catch.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-8">Join Us As</h2>

        {/* Role cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
          <RoleCard
            title="Buyer"
            description="Discover and purchase the freshest seafood directly from fishermen."
            loginLink="/login?role=buyer"
            registerLink="/register/buyer"
          />
          <RoleCard
            title="Fisherman"
            description="List your catch, negotiate prices, and reach a wider market."
            loginLink="/login?role=fisherman"
            registerLink="/register/fisherman"
          />
          <RoleCard
            title="Admin"
            description="Manage the platform, verify users, and ensure smooth operations."
            loginLink="/login?role=admin"
            registerLink="/register/admin"
          />
        </div>
      </div>
    </div>
  );
};

const RoleCard = ({ title, description, loginLink, registerLink }) => (
  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 text-sm mb-6">{description}</p>
    </div>
    <div className="space-y-3">
      <Link
        to={loginLink}
        className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-md transition duration-300"
      >
        Login as {title}
      </Link>
      <Link
        to={registerLink}
        className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg text-md transition duration-300"
      >
        Register as {title}
      </Link>
    </div>
  </div>
);

export default LandingPage;
