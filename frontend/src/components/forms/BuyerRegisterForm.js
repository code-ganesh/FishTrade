// client/src/components/forms/BuyerRegisterForm.js
import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const BuyerRegisterForm = ({ onSubmit, isLoading, error }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!"); // Simple client-side validation
      return;
    }
    onSubmit({ username, email, password, role: 'buyer', location });
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-2xl bg-white bg-opacity-95 max-w-lg w-full mx-auto z-20 relative border-4 border-fish-orange transform transition-all duration-300 hover:shadow-xl">
      <h2 className="text-4xl font-heading text-fish-orange mb-8 text-center">Register as Buyer</h2>
      {error && <p className="text-red-500 text-center mb-4 text-sm font-semibold">{error}</p>}
      <Input
        label="Username"
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your desired username"
        required
        className="focus:ring-2 focus:ring-fish-orange"
      />
      <Input
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your.email@example.com"
        required
        className="focus:ring-2 focus:ring-fish-orange"
      />
      <Input
        label="Password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
        required
        className="focus:ring-2 focus:ring-fish-orange"
      />
      <Input
        label="Confirm Password"
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="••••••••"
        required
        className="focus:ring-2 focus:ring-fish-orange"
      />
      <Input
        label="Location (e.g., City, State)"
        id="location"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="e.g., Chennai, Tamil Nadu"
        required
        className="focus:ring-2 focus:ring-fish-orange"
      />
      <Button type="submit" className="w-full mt-6 bg-fish-orange hover:bg-orange-600 py-3 text-lg font-bold" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </Button>
      <p className="text-center text-md text-gray-700 mt-6">
        Already have an account? {' '}
        <Link to="/login" className="text-sea-blue hover:underline font-semibold">Login here</Link>
      </p>
    </form>
  );
};

export default BuyerRegisterForm;