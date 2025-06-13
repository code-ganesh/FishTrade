// client/src/pages/RegisterFishermanPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FishermanRegisterForm from '../components/forms/FishermanRegisterForm';
import AnimatedElements from '../components/common/AnimatedElements';
import { useAuth } from '../hooks/useAuth';

const RegisterFishermanPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (userData) => {
    setIsLoading(true);
    setError(null);
    try {
      const user = await register(userData);
      navigate('/dashboard/fisherman'); // Redirect fisherman to their dashboard
    } catch (err) {
      setError(err.message || 'Registration failed. Please check details and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-blue to-sea-blue flex flex-col items-center justify-center overflow-hidden py-12">
      <AnimatedElements />
      <div className="relative z-20">
        <FishermanRegisterForm onSubmit={handleSubmit} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
};

export default RegisterFishermanPage;