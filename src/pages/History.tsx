import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { format } from 'date-fns';
import { Gamepad2, Ticket, Search, Clock, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function History() {
  const { user, loginWithGoogle, loading } = useAuth();
  const [transactions, setTransactions] = useState<any[]>([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    async function fetchHistory() {
      if (!user) return;
      setFetching(true);
      try {
        const q = query(
          collection(db, "transactions"),
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc")
        );
        const snapshot = await getDocs(q);
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTransactions(docs);
      } catch (error) {
        console.error("Error fetching history:", error);
      } finally {
        setFetching(false);
      }
    }
    
    if (!loading) {
      fetchHistory();
    }
  }, [user, loading]);

  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-400">Memuat...</div>;
  }

  if (!user) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-800">
          <Clock className="w-10 h-10 text-slate-500" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Riwayat Transaksi</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Silakan login untuk melihat riwayat pembelian akun Anda di FOX STORE.
        </p>
        <Link 
          to="/login"
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 rounded-full font-semibold transition-all inline-flex items-center gap-2"
        >
          <LogIn className="w-5 h-5" /> Login Sekarang
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Riwayat Pesanan</h1>
          <p className="text-slate-400">Pantau semua transaksi Anda di sini</p>
        </div>
        
        {/* Simple search input */}
        <div className="relative w-full md:w-64">
           <input 
             type="text" 
             placeholder="Cari ID Pesanan..." 
             className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-full px-5 py-2 pl-10 text-white outline-none placeholder:text-slate-500 text-sm select-text"
           />
           <Search className="absolute left-4 top-2.5 w-4 h-4 text-slate-500" />
        </div>
      </div>

      {fetching ? (
        <div className="text-center py-20 text-slate-500">Mengambil data transaksi...</div>
      ) : transactions.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">
          <Gamepad2 className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Belum ada transaksi</h3>
          <p className="text-slate-400 mb-6">Waktunya topup game favorit Anda sekarang.</p>
          <Link to="/" className="inline-flex bg-cyan-500 text-slate-950 px-6 py-2.5 rounded-full font-medium hover:bg-cyan-400 transition-colors">
            Mulai Topup
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {transactions.map(tx => (
            <div key={tx.id} className="bg-slate-900 border border-slate-800 p-5 md:p-6 rounded-2xl flex flex-col md:flex-row gap-6 md:items-center hover:border-slate-700 transition-colors">
              <div className="hidden md:flex w-14 h-14 bg-slate-950 rounded-xl items-center justify-center shrink-0 border border-slate-800">
                <Ticket className="w-7 h-7 text-cyan-400" />
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-white text-lg">{tx.gameTitle}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                    Berhasil
                  </span>
                </div>
                <p className="text-cyan-400 font-medium mb-3">{tx.itemDetail?.name || 'Item'}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-4 pt-4 border-t border-slate-800/50">
                  <div>
                    <div className="text-slate-500 mb-0.5">Order ID</div>
                    <div className="font-mono text-slate-300 truncate pr-4 text-xs">{tx.id}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 mb-0.5">Tanggal</div>
                    <div className="text-slate-300 text-xs">
                      {tx.createdAt ? format(tx.createdAt.toDate(), 'dd MMM yyyy, HH:mm') : '-'}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-500 mb-0.5">Metode Bayar</div>
                    <div className="text-slate-300 text-xs">{tx.paymentMethod || '-'}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 mb-0.5">Total Modal</div>
                    <div className="font-medium text-white">Rp {tx.amount?.toLocaleString('id-ID')}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
