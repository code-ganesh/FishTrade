// client/src/components/forms/LoginForm.js
import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const LoginForm = ({ onSubmit, isLoading, error, preselectedRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-2xl bg-white bg-opacity-95 max-w-lg w-full mx-auto z-20 relative border-4 border-sea-blue transform transition-all duration-300 hover:shadow-xl">
      <h2 className="text-4xl font-heading text-dark-ocean mb-8 text-center">
        Login {preselectedRole && `as ${preselectedRole.charAt(0).toUpperCase() + preselectedRole.slice(1)}`}
      </h2>
      {error && <p className="text-red-500 text-center mb-4 text-sm font-semibold">{error}</p>}
      <Input
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your.email@example.com"
        required
        className="focus:ring-2 focus:ring-sky-blue"
      />
      <Input
        label="Password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
        required
        className="focus:ring-2 focus:ring-sky-blue"
      />
      <Button type="submit" className="w-full mt-6 py-3 text-lg font-bold" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </Button>
      <p className="text-center text-md text-gray-700 mt-6">
        Don't have an account? {' '}
        <Link to="/register/buyer" className="text-sea-blue hover:underline font-semibold">Register as Buyer</Link> | {' '}
        <Link to="/register/fisherman" className="text-sea-blue hover:underline font-semibold">Register as Fisherman</Link> | {' '}
        <Link to="/register/admin" className="text-sea-blue hover:underline font-semibold">Register as Admin</Link>
      </p>
    </form>
  );
};

export default LoginForm;