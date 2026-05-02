import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Flame, Tag, Filter } from 'lucide-react';
import { games } from '../data/mockData';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  
  const allGenres = Array.from(new Set(games.filter(g => g.category === 'game' && g.genre).map(g => g.genre as string)));
  
  const filteredGames = games.filter(g => {
    const matchesSearch = g.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? g.genre === selectedGenre : true;
    return matchesSearch && matchesGenre;
  });
  
  const popularGames = filteredGames.filter(g => g.category === 'game');
  const vouchers = games.filter(g => g.category === 'voucher' && g.title.toLowerCase().includes(searchTerm.toLowerCase()));
  
  return (
    <div className="pb-16 pt-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 aspect-[16/9] md:aspect-[3/1] shadow-lg shadow-cyan-500/10 w-full">
          <video 
            src="/vinz.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Popular Games */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
              <Flame className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Popular Games</h2>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <Filter className="w-4 h-4 text-slate-500 shrink-0 mr-1" />
            <button
              onClick={() => setSelectedGenre(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedGenre === null ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              Semua
            </button>
            {allGenres.map(genre => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedGenre === genre ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        
        {popularGames.length === 0 ? (
          <div className="text-slate-500 text-center py-10">Game tidak ditemukan.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {popularGames.map(game => (
              <Link 
                key={game.id} 
                to={`/games/${game.id}`}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-3 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all block overflow-hidden shadow-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:-translate-y-1"
              >
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-800 relative">
                  <img 
                    src={game.imageUrl} 
                    alt={game.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {game.genre && (
                    <div className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-md text-cyan-400 border border-slate-700/50">
                      {game.genre}
                    </div>
                  )}
                </div>
                <div className="mt-4 mb-1 px-1">
                  <h3 className="font-semibold text-white leading-tight">{game.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{game.publisher}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Vouchers */}
      {selectedGenre === null && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Tag className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Voucher & Lainnya</h2>
          </div>
          
          {vouchers.length === 0 ? (
            <div className="text-slate-500 text-center py-10">Voucher tidak ditemukan.</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {vouchers.map(game => (
                <Link 
                  key={game.id} 
                  to={`/games/${game.id}`}
                  className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-3 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all block overflow-hidden shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:-translate-y-1"
                >
                  <div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-800 relative">
                    <img 
                      src={game.imageUrl} 
                      alt={game.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="mt-4 mb-1 px-1">
                    <h3 className="font-semibold text-white leading-tight truncate">{game.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{game.publisher}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
