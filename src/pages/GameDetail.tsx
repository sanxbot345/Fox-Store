import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShieldCheck, Info, Check, LogIn, ChevronRight, CheckCircle2, Copy } from 'lucide-react';
import { games, paymentMethods } from '../data/mockData';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function GameDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, loginWithGoogle } = useAuth();
  
  const game = games.find(g => g.id === id);
  
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [successTx, setSuccessTx] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!game) {
    return <div className="max-w-7xl mx-auto px-4 py-20 text-center text-white">Oops, game tidak ditemukan.</div>;
  }

  const itemInfo = game.items.find(i => i.id === selectedItem);
  const paymentInfo = paymentMethods.find(p => p.id === selectedPayment);
  
  const totalHarga = (itemInfo?.price || 0) + (paymentInfo?.fee || 0);
  
  const isFormValid = () => {
    const isFieldsFilled = game.formFields.every(f => formData[f.name] && formData[f.name].trim() !== '');
    return isFieldsFilled && selectedItem && selectedPayment;
  };

  const handleCheckout = async () => {
    if (!user) {
      alert("Silakan login terlebih dahulu untuk melakukan transaksi.");
      loginWithGoogle();
      return;
    }
    
    if (!isFormValid()) return;
    
    setIsProcessing(true);
    try {
      // Simulate API call to Firebase
      const txRef = await addDoc(collection(db, "transactions"), {
        userId: user.uid,
        gameId: game.id,
        gameTitle: game.title,
        itemDetail: itemInfo,
        paymentMethod: paymentInfo?.name,
        amount: totalHarga,
        formData: formData,
        status: 'SUCCESS',
        createdAt: serverTimestamp()
      });
      
      setSuccessTx(txRef.id);
    } catch (error) {
      console.error("Error checking out:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (successTx) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Pembayaran Berhasil!</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Terima kasih telah topup {game.title}. Item Anda akan segera masuk dalam hitungan detik.
          </p>
          
          <div className="bg-slate-950 p-6 rounded-2xl mb-8 text-left border border-slate-800">
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-800/50">
              <span className="text-slate-400">Order ID</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-cyan-400 text-sm">{successTx}</span>
                <button 
                  onClick={() => navigator.clipboard.writeText(successTx)}
                  className="text-slate-500 hover:text-white"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400">Total Pembayaran</span>
              <span className="font-bold text-white text-lg">Rp {totalHarga.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Metode</span>
              <span className="text-white font-medium">{paymentInfo?.name}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/history')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-colors"
            >
              Lihat Riwayat
            </button>
            <button 
              onClick={() => setSuccessTx(null)}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-full transition-colors"
            >
              Beli Lagi
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-20">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Column: Game Info */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden sticky top-24 shadow-lg">
            <div className="aspect-square relative">
              <img src={game.imageUrl} alt={game.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
            </div>
            <div className="p-6 relative z-10 -mt-12 bg-slate-900 rounded-t-3xl border-t border-slate-800/50">
              <h1 className="text-2xl font-bold text-white break-words leading-tight mb-1">{game.title}</h1>
              <p className="text-slate-400 text-sm mb-6 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                Verified Publisher: {game.publisher}
              </p>
              
              <div className="text-sm text-slate-300 space-y-4">
                <p>Cara topup {game.title}:</p>
                <ol className="list-decimal pl-4 space-y-2 text-slate-400">
                  <li>Masukkan data ID Anda</li>
                  <li>Pilih nominal yang diinginkan</li>
                  <li>Pilih metode pembayaran</li>
                  <li>Selesaikan pembayaran</li>
                  <li>Item akan masuk otomatis ke akun Anda</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column: Form Steps */}
        <div className="w-full md:w-2/3 lg:w-3/4 space-y-6">
          
          {/* Step 1: Data User */}
          <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 relative">
            <div className="absolute -left-3 top-8 w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold outline outline-4 outline-slate-950 hidden md:flex">
              1
            </div>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex md:hidden items-center justify-center font-bold">1</div>
              <h2 className="text-xl font-bold text-white">Masukkan Data Akun</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {game.formFields.map(field => (
                <div key={field.name} className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">{field.label}</label>
                  <input 
                    type={field.type} 
                    placeholder={field.placeholder}
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600 select-text"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4 flex items-start gap-1">
              <Info className="w-4 h-4 shrink-0" />
              Untuk menemukan ID Anda, periksa di dalam pengaturan profil atau informasi akun di dalam game.
            </p>
          </section>

          {/* Step 2: Pilih Nominal */}
          <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 relative">
            <div className="absolute -left-3 top-8 w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold outline outline-4 outline-slate-950 hidden md:flex">
              2
            </div>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex md:hidden items-center justify-center font-bold">2</div>
              <h2 className="text-xl font-bold text-white">Pilih Nominal {game.currencyName}</h2>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {game.items.map(item => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item.id)}
                  className={`
                    relative p-4 lg:p-5 rounded-[20px] flex flex-col items-start justify-between min-h-[140px] transition-all duration-200 border-2 overflow-hidden
                    ${selectedItem === item.id 
                      ? 'border-cyan-500 bg-cyan-500/10' 
                      : 'border-slate-800 bg-black hover:border-slate-700 hover:bg-[#111]'}
                  `}
                >
                  {selectedItem === item.id && (
                    <div className="absolute top-3 right-3 text-cyan-400">
                      <CheckCircle2 className="w-5 h-5 fill-cyan-500/20" />
                    </div>
                  )}
                  {item.bonus && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-xl origin-top-right">
                      +{item.bonus} Bonus
                    </div>
                  )}
                  
                  <img src={game.currencyIconUrl || game.imageUrl} alt={game.currencyName} className="w-8 h-8 object-contain mb-4 drop-shadow-md" />
                  
                  <div className="flex flex-col items-start text-left w-full mt-auto">
                    <span className="font-semibold text-white/90 mb-3">{item.name}</span>
                    <span className="font-bold text-white text-lg tracking-wide">Rp{item.price.toLocaleString('id-ID')}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Step 3: Pembayaran */}
          <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 relative">
            <div className="absolute -left-3 top-8 w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold outline outline-4 outline-slate-950 hidden md:flex">
              3
            </div>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex md:hidden items-center justify-center font-bold">3</div>
              <h2 className="text-xl font-bold text-white">Pilih Pembayaran</h2>
            </div>
            
            {!selectedItem ? (
              <div className="text-center p-8 border border-dashed border-slate-700 rounded-2xl bg-slate-950/50">
                <p className="text-slate-400">Silakan pilih nominal produk di atas terlebih dahulu.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {[
                  { id: 'e-wallet', title: 'E-Wallet' },
                  { id: 'virtual-account', title: 'Virtual Account Bank' },
                  { id: 'credit-card', title: 'Kartu Kredit' },
                  { id: 'convenience-store', title: 'Minimarket' }
                ].map(category => {
                  const categoryMethods = paymentMethods.filter(p => (p as any).category === category.id);
                  if (categoryMethods.length === 0) return null;
                  
                  return (
                    <div key={category.id}>
                      <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">{category.title}</h3>
                      <div className="space-y-3">
                        {categoryMethods.map(payment => {
                          const itemPrice = itemInfo?.price || 0;
                          const calculatedTotal = itemPrice + payment.fee;
                          
                          return (
                            <button
                              key={payment.id}
                              onClick={() => setSelectedPayment(payment.id)}
                              className={`
                                w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-2xl transition-all duration-200 border-2
                                ${selectedPayment === payment.id 
                                  ? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.1)]' 
                                  : 'border-slate-800 bg-slate-950 hover:border-slate-700 hover:bg-slate-900'}
                              `}
                            >
                              <div className="flex items-center gap-4 mb-2 sm:mb-0">
                                <div className="w-16 h-10 bg-white rounded-lg flex items-center justify-center p-2 shrink-0">
                                   <img src={payment.imageUrl} alt={payment.name} className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="text-left">
                                  <div className="font-semibold text-white">{payment.name}</div>
                                  <div className="text-xs text-slate-400 mt-0.5">Otomatis Diproses</div>
                                </div>
                              </div>
                              <div className="text-left sm:text-right w-full sm:w-auto pl-20 sm:pl-0">
                                <div className="font-bold text-cyan-400 text-lg">
                                   Rp {calculatedTotal.toLocaleString('id-ID')}
                                </div>
                                {payment.fee > 0 ? (
                                  <div className="text-xs text-slate-500 mt-1">Biaya Rp {payment.fee.toLocaleString()}</div>
                                ) : (
                                  <div className="text-xs text-green-400 mt-1">Bebas Biaya</div>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* Checkout Action Panel (Sticky Bottom Box but relative on desktop) */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 lg:sticky lg:bottom-6 sticky bottom-0 z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] md:shadow-none">
             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full text-center md:text-left">
                  <div className="text-slate-400 text-sm mb-1">Total Pembayaran</div>
                  <div className="text-2xl font-bold text-white">
                    {selectedItem && selectedPayment ? (
                      `Rp ${totalHarga.toLocaleString('id-ID')}`
                    ) : (
                      <span className="text-slate-600">-</span>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  disabled={!isFormValid() || isProcessing}
                  className={`
                    w-full md:w-auto px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all
                    ${isFormValid() && !isProcessing
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.3)] cursor-pointer' 
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'}
                  `}
                >
                  {isProcessing ? 'Memproses...' : 'Beli Sekarang'} <ChevronRight className="w-5 h-5" />
                </button>
             </div>
             {!user && isFormValid() && (
                <p className="text-xs text-center text-slate-400 mt-4 md:mt-2">
                  Anda akan diminta untuk login menggunakan Google.
                </p>
             )}
          </div>

        </div>
      </div>
    </div>
  );
}
