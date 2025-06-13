// client/src/pages/RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/forms/RegisterForm';
import AnimatedElements from '../components/common/AnimatedElements'; // For theme elements
import { useAuth } from '../hooks/useAuth';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (userData) => {
    setIsLoading(true);
    setError(null); // Clear previous errors
    try {
      const user = await register(userData);
      // Redirect based on role
      if (user.role === 'buyer') {
        navigate('/dashboard/buyer');
      } else if (user.role === 'fisherman') {
        navigate('/dashboard/fisherman');
      } else if (user.role === 'admin') {
        navigate('/dashboard/admin');
      } else {
        navigate('/'); // Fallback
      }
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-blue to-sea-blue flex flex-col items-center justify-center overflow-hidden py-12">
      <AnimatedElements />
      <RegisterForm onSubmit={handleSubmit} isLoading={isLoading} error={error} />
    </div>
  );
};

export default RegisterPage;