// client/src/components/forms/FishermanRegisterForm.js
import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const FishermanRegisterForm = ({ onSubmit, isLoading, error }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');
  // Fisherman specific fields
  const [licenseNumber, setLicenseNumber] = useState('');
  const [fishingMethod, setFishingMethod] = useState('');
  const [fleetSize, setFleetSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    onSubmit({
      username,
      email,
      password,
      role: 'fisherman',
      location,
      fishermenDetails: {
        licenseNumber,
        fishingMethod,
        fleetSize: parseInt(fleetSize) || 0, // Ensure integer
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-2xl bg-white bg-opacity-95 max-w-lg w-full mx-auto z-20 relative border-4 border-boat-wood transform transition-all duration-300 hover:shadow-xl">
      <h2 className="text-4xl font-heading text-boat-wood mb-8 text-center">Register as Fisherman</h2>
      {error && <p className="text-red-500 text-center mb-4 text-sm font-semibold">{error}</p>}
      <Input
        label="Username"
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your desired username"
        required
        className="focus:ring-2 focus:ring-boat-wood"
      />
      <Input
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your.email@example.com"
        required
        className="focus:ring-2 focus:ring-boat-wood"
      />
      <Input
        label="Password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
        required
        className="focus:ring-2 focus:ring-boat-wood"
      />
      <Input
        label="Confirm Password"
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="••••••••"
        required
        className="focus:ring-2 focus:ring-boat-wood"
      />
      <Input
        label="Location (e.g., City, State)"
        id="location"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="e.g., Mumbai, Maharashtra"
        required
        className="focus:ring-2 focus:ring-boat-wood"
      />

      <h3 className="text-xl font-heading text-boat-wood mt-6 mb-4">Fisherman Details</h3>
      <Input
        label="License Number"
        id="licenseNumber"
        type="text"
        value={licenseNumber}
        onChange={(e) => setLicenseNumber(e.target.value)}
        placeholder="Your fishing license number"
        required // Making license number required at registration
        className="focus:ring-2 focus:ring-boat-wood"
      />
      <Input
        label="Primary Fishing Method"
        id="fishingMethod"
        type="text"
        value={fishingMethod}
        onChange={(e) => setFishingMethod(e.target.value)}
        placeholder="e.g., Trawler, Line Fishing, Aquaculture"
        className="focus:ring-2 focus:ring-boat-wood"
      />
      <Input
        label="Fleet Size (Number of Boats)"
        id="fleetSize"
        type="number"
        value={fleetSize}
        onChange={(e) => setFleetSize(e.target.value)}
        placeholder="e.g., 1, 2, 5"
        min="0"
        className="focus:ring-2 focus:ring-boat-wood"
      />

      <Button type="submit" className="w-full mt-6 bg-boat-wood hover:bg-gray-800 py-3 text-lg font-bold" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </Button>
      <p className="text-center text-md text-gray-700 mt-6">
        Already have an account? {' '}
        <Link to="/login" className="text-sea-blue hover:underline font-semibold">Login here</Link>
      </p>
    </form>
  );
};

export default FishermanRegisterForm;