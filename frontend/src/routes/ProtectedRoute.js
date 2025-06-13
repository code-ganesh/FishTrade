// client/src/routes/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LoadingSpinner from '../components/common/LoadingSpinner'; // You'll create this next

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />; // Show a loading spinner while checking auth status
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Not authenticated, redirect to login
  }

  // Check if user has one of the allowed roles
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    // Optionally redirect to a forbidden page or general dashboard
    return <Navigate to="/" replace />; // Or a 403 Forbidden page
  }

  return children;
};

export default ProtectedRoute;