import React from 'react';
import { Link } from 'react-router-dom';
import { History, LogIn, LogOut, Menu, UserCircle, X, ShieldCheck, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { FoxLogo } from '../ui/FoxLogo';

export default function Navbar() {
  const { user, loginWithGoogle, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="text-slate-300 hover:text-white p-1 -ml-1 md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors hidden sm:flex">
                <FoxLogo className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">FOX <span className="text-cyan-400">STORE</span></span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link to="/" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/history" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                <History className="w-4 h-4" /> Riwayat
              </Link>
              {user ? (
                <div className="flex items-center gap-4 pl-4 border-l border-slate-800">
                  <div className="flex items-center gap-3">
                    <img src={user.photoURL || ''} alt="avatar" className="w-8 h-8 rounded-full border border-slate-700" />
                    <span className="text-sm font-medium text-slate-200">{user.displayName}</span>
                  </div>
                  <button 
                    onClick={logout}
                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800/50 rounded-full transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login"
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 outline-none rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" /> Login
                </Link>
              )}
            </div>
          </div>
          
          {/* End right side spacing if needed */}
          <div className="md:hidden w-8"></div>
        </div>
      </div>
    </nav>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Drawer Sidebar */}
          <div className="relative w-[75%] max-w-[300px] bg-black h-full flex flex-col shadow-2xl border-r border-[#111] transform transition-transform duration-300 ease-in-out">
            
            {/* Visual Header / Video Area */}
            <div className="pt-6 pb-4 px-5 flex flex-col items-center">
               <div className="w-full aspect-video rounded-[20px] overflow-hidden bg-black border border-[#222] mb-5 relative drop-shadow-2xl flex items-center justify-center">
                 <video 
                   src="/amoled (1).mp4"
                   autoPlay
                   loop
                   muted
                   playsInline
                   className="w-full h-full object-cover opacity-90"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               </div>
               
               <div className="flex items-center justify-center gap-x-2 text-cyan-400 font-pirata text-2xl tracking-widest drop-shadow-md w-full">
                 <span>FOX</span>
                 <span>STORE.ID</span>
               </div>
               <div className="text-cyan-500 font-mono font-bold text-xs tracking-widest mt-1">
                 Welcome
               </div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 py-4 px-8 space-y-6 mt-4">
               <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors font-pirata tracking-wider text-sm drop-shadow-sm uppercase">
                  <LayoutDashboard className="w-4 h-4" /> DASHBOARD
               </Link>
               <Link to="/history" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors font-pirata tracking-wider text-sm drop-shadow-sm uppercase">
                  <History className="w-4 h-4" /> CEK PESANAN
               </Link>
               <Link to="/privacy-policy" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors font-pirata tracking-wider text-sm drop-shadow-sm uppercase">
                  <ShieldCheck className="w-4 h-4" /> KEBIJAKAN PRIVASI
               </Link>
            </div>

            {/* Bottom Auth Action */}
            <div className="p-8 mt-auto pb-10">
              {user ? (
                <button 
                  onClick={() => { logout(); setIsMenuOpen(false); }}
                  className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 font-pirata tracking-wider text-sm transition-colors drop-shadow-md uppercase"
                >
                  <LogOut className="w-4 h-4" /> LOGOUT
                </button>
              ) : (
                <Link 
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 font-pirata tracking-wider text-sm transition-colors drop-shadow-md uppercase"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                    <path d="M12.65 10A5.99 5.99 0 007 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 005.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                  </svg>
                  LOGIN
                </Link>
              )}
            </div>

            {/* Close button positioned outside drawer */}
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="absolute top-4 -right-12 p-2 bg-black/80 backdrop-blur rounded-full text-slate-300 hover:text-white border border-slate-800 shadow-xl"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
