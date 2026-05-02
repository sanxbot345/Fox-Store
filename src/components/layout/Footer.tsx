import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FoxLogo } from '../ui/FoxLogo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <FoxLogo className="h-6 w-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">FOX <span className="text-cyan-400">STORE</span></span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Platform topup game termurah, tercepat, dan terpercaya di Indonesia. Otomatis masuk dalam hitungan detik.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span> Links
            </h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/history" className="hover:text-cyan-400 transition-colors">Cek Pesanan</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span> Hubungi Kami
            </h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-500 hover:text-cyan-400 transition-colors" />
                <a href="mailto:foxxstore.id@gmail.com" className="hover:text-cyan-400 transition-colors cursor-pointer relative z-20">foxxstore.id@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-500 hover:text-cyan-400 transition-colors" />
                <a href="https://wa.me/6282185689680" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors cursor-pointer relative z-20">+62 821-8568-9680</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} FOX STORE. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-sm">Dibuat dengan</span>
            <span className="text-red-500">â</span>
            <span className="text-slate-500 text-sm">di AI Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
