import React, { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
        Kebijakan Privasi
      </h1>
      
      <div className="prose prose-invert max-w-none text-slate-300">
        <p className="mb-6">Terakhir Diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
        
        <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Informasi yang Kami Kumpulkan</h2>
        <p className="mb-4">
          Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti saat Anda membuat akun, 
          melakukan pembelian, atau menghubungi dukungan pelanggan kami. Informasi ini mungkin termasuk nama, profil dasar Google, 
          dan riwayat transaksi Anda yang tercatat di sistem kami.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Penggunaan Informasi</h2>
        <p className="mb-4">
          Kami menggunakan informasi yang kami kumpulkan untuk:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Memproses transaksi Anda dan memastikan pesanan diterima dengan baik.</li>
          <li>Mengelola dan mengamankan akun Anda.</li>
          <li>Merespons pertanyaan atau permintaan dukungan Anda dengan cepat.</li>
          <li>Mematuhi kewajiban hukum atau regulasi yang berlaku.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Keamanan Data</h2>
        <p className="mb-6">
          Keamanan data Anda sangat penting bagi kami. Kami menerapkan langkah-langkah keamanan teknis yang wajar untuk melindungi 
          informasi Anda dari akses, perubahan, atau pengungkapan yang tidak sah. Data riwayat transaksi hanya dapat diakses oleh Anda 
          saat melakukan otentikasi akun.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Perubahan Kebijakan Privasi</h2>
        <p className="mb-6">
          Kami mungkin memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan diumumkan di halaman ini. 
          Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala untuk setiap perubahan.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Hubungi Kami</h2>
        <p className="mb-4">
          Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, jangan ragu untuk menghubungi layanan pelanggan kami.
        </p>
      </div>
    </div>
  );
}
