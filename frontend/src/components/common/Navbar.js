// client/src/components/common/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import logo from '../../assets/images/logo.png'; // Your logo image

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-sea-blue p-4 shadow-md z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <img src={logo} alt="AquaTrade Logo" className="h-8 w-auto mr-2" />
          AquaTrade
        </Link>
        <div className="flex items-center space-x-4">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="text-white hover:text-sky-blue transition duration-300">Login</Link>
              <Link to="/register" className="text-white hover:text-sky-blue transition duration-300">Register</Link>
            </>
          ) : (
            <>
              <span className="text-white">Welcome, {user?.username} ({user?.role})</span>
              {user?.role === 'fisherman' && (
                <Link to="/dashboard/fisherman" className="text-white hover:text-sky-blue transition duration-300">My Dashboard</Link>
              )}
              {user?.role === 'buyer' && (
                <Link to="/dashboard/buyer" className="text-white hover:text-sky-blue transition duration-300">My Dashboard</Link>
              )}
              {user?.role === 'admin' && (
                <Link to="/dashboard/admin" className="text-white hover:text-sky-blue transition duration-300">Admin Panel</Link>
              )}
              <button
                onClick={logout}
                className="bg-sky-blue hover:bg-boat-wood text-white font-bold py-1 px-3 rounded transition duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;