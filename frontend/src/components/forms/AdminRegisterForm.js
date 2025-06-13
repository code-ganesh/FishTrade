// client/src/components/forms/AdminRegisterForm.js
import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const AdminRegisterForm = ({ onSubmit, isLoading, error }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secretKey, setSecretKey] = useState(''); // Added for admin specific input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // In a real app, you'd send `secretKey` to backend for validation.
    // Backend's authController.js has a comment about this.
    onSubmit({
      username,
      email,
      password,
      role: 'admin',
      adminDetails: {
        secretKey // This will be sent to the backend
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-2xl bg-white bg-opacity-95 max-w-lg w-full mx-auto z-20 relative border-4 border-dark-ocean transform transition-all duration-300 hover:shadow-xl">
      <h2 className="text-4xl font-heading text-dark-ocean mb-8 text-center">Register as Admin</h2>
      {error && <p className="text-red-500 text-center mb-4 text-sm font-semibold">{error}</p>}
      <Input
        label="Username"
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your admin username"
        required
        className="focus:ring-2 focus:ring-dark-ocean"
      />
      <Input
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="admin.email@example.com"
        required
        className="focus:ring-2 focus:ring-dark-ocean"
      />
      <Input
        label="Password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
        required
        className="focus:ring-2 focus:ring-dark-ocean"
      />
      <Input
        label="Confirm Password"
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="••••••••"
        required
        className="focus:ring-2 focus:ring-dark-ocean"
      />
      <Input
        label="Admin Secret Key"
        id="secretKey"
        type="password"
        value={secretKey}
        onChange={(e) => setSecretKey(e.target.value)}
        placeholder="Enter secret key (e.g., from ENV)"
        required // Make required on frontend
        className="focus:ring-2 focus:ring-dark-ocean"
      />
      <Button type="submit" className="w-full mt-6 bg-dark-ocean hover:bg-sea-blue py-3 text-lg font-bold" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </Button>
      <p className="text-center text-md text-gray-700 mt-6">
        Already have an account? {' '}
        <Link to="/login" className="text-sea-blue hover:underline font-semibold">Login here</Link>
      </p>
    </form>
  );
};

export default AdminRegisterForm;