import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import GameDetail from './pages/GameDetail';
import History from './pages/History';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Login from './pages/Login';
import { NetworkBackground } from './components/ui/NetworkBackground';

function AppLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c10] text-[#c5c6c7] font-sans select-none relative">
      {isLoginPage && <NetworkBackground />}
      {!isLoginPage && <Navbar />}
      <main className="flex-grow z-10 relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<GameDetail />} />
          <Route path="/history" element={<History />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      {!isLoginPage && (
        <div className="z-10 relative w-full">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
