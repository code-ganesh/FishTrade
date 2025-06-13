// client/src/pages/LoginPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
import AnimatedElements from '../components/common/AnimatedElements';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const preselectedRole = searchParams.get('role'); // Get role from URL query param

  // Effect to clear error when user navigates away or component unmounts
  useEffect(() => {
    return () => setError(null);
  }, []);


  const handleSubmit = async (credentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const user = await login(credentials);
      // Redirect based on role
      if (user.role === 'buyer') {
        navigate('/dashboard/buyer');
      } else if (user.role === 'fisherman') {
        navigate('/dashboard/fisherman');
      } else if (user.role === 'admin') {
        navigate('/dashboard/admin');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-blue to-sea-blue flex flex-col items-center justify-center overflow-hidden py-12">
      <AnimatedElements />
      <div className="relative z-20"> {/* Wrapper for better positioning */}
        <LoginForm onSubmit={handleSubmit} isLoading={isLoading} error={error} preselectedRole={preselectedRole} />
      </div>
    </div>
  );
};

export default LoginPage;