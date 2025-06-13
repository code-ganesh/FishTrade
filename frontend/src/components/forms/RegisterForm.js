// client/src/components/forms/RegisterForm.js
import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const RegisterForm = ({ onSubmit, isLoading, error }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('buyer'); // Default role
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onSubmit({ username, email, password, role, location });
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-xl bg-white bg-opacity-90 max-w-md mx-auto z-20 relative">
      <h2 className="text-3xl font-display text-sea-blue mb-6 text-center">Register</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <Input
        label="Username"
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your desired username"
        required
      />
      <Input
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your.email@example.com"
        required
      />
      <Input
        label="Password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
        required
      />
      <Input
        label="Confirm Password"
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="••••••••"
        required
      />
      <Input
        label="Location"
        id="location"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="e.g., Coastal City, India"
        required
      />
      <div className="mb-4">
        <label htmlFor="role" className="block text-sky-blue text-sm font-bold mb-2">
          Register As:
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sea-blue"
        >
          <option value="buyer">Buyer</option>
          <option value="fisherman">Fisherman</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <Button type="submit" className="w-full mt-4" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </Button>
      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account? <a href="/login" className="text-sea-blue hover:underline">Login here</a>
      </p>
    </form>
  );
};

export default RegisterForm;