// client/src/routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterBuyerPage from '../pages/RegisterBuyerPage';       // NEW
import RegisterFishermanPage from '../pages/RegisterFishermanPage'; // NEW
import RegisterAdminPage from '../pages/RegisterAdminPage';       // NEW
import BuyerDashboard from '../pages/BuyerDashboard';
import FishermanDashboard from '../pages/FishermanDashboard';
import AdminDashboard from '../pages/AdminDashboard';
import NotFoundPage from '../pages/NotFoundPage';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ProtectedRoute from './ProtectedRoute';
import MessagesContent from '../components/buyer/MessagesContent';




const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              {/* New specific registration routes */}
              <Route path="/register/buyer" element={<RegisterBuyerPage />} />
              <Route path="/register/fisherman" element={<RegisterFishermanPage />} />
              <Route path="/register/admin" element={<RegisterAdminPage />} />
              <Route path="/messages/:fishermanId" element={<MessagesContent /*userId={currentUserId}*/ />} />
    
              {/* Protected Routes for Dashboards */}
              <Route
                path="/dashboard/buyer"
                element={
                  <ProtectedRoute allowedRoles={['buyer']}>
                    <BuyerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/fisherman"
                element={
                  <ProtectedRoute allowedRoles={['fisherman']}>
                    <FishermanDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/admin"
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Catch-all for 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;