export interface ProductItem {
  id: string;
  name: string;
  price: number;
  bonus?: number;
}

export interface Game {
  id: string;
  title: string;
  publisher: string;
  imageUrl: string;
  category: 'game' | 'voucher';
  genre?: 'MOBA' | 'FPS' | 'RPG' | 'Sports' | 'Other';
  bannerUrl?: string;
  items: ProductItem[];
  currencyName: string;
  currencyIconUrl?: string;
  formFields: { name: string; label: string; placeholder: string; type: string }[];
}

export const games: Game[] = [
  {
    id: 'mobile-legends',
    title: 'Mobile Legends: Bang Bang',
    publisher: 'Moonton',
    imageUrl: 'https://play-lh.googleusercontent.com/0gB6KEvQzyQXS6Uscx7HNjjlRMRUzEvYFqWr0TlmwHw6cw3nNRNSR9xChp-EUrk3Cq1lqTlsE1DbPgc97YClXVU=s256-rw',
    bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200&h=400',
    category: 'game',
    genre: 'MOBA',
    currencyName: 'Diamonds',
    currencyIconUrl: "data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L2 8L12 22L22 8L12 2Z' fill='%2300ffff'/%3E%3Cpath d='M12 2L2 8L12 11V2Z' fill='%2300cccc'/%3E%3Cpath d='M12 22L2 8L12 11V22Z' fill='%23008888'/%3E%3Cpath d='M12 22L22 8L12 11V22Z' fill='%2300aaaa'/%3E%3C/svg%3E",
    formFields: [
      { name: 'userId', label: 'User ID', placeholder: 'Masukkan User ID', type: 'text' },
      { name: 'zoneId', label: 'Zone ID', placeholder: 'Masukkan Zone ID', type: 'text' },
    ],
    items: [
      { id: 'ml-1', name: '5 Diamonds', price: 1500 },
      { id: 'ml-2', name: '10 Diamonds', price: 2800 },
      { id: 'ml-3', name: '14 Diamonds', price: 4000 },
      { id: 'ml-4', name: '18 Diamonds', price: 5000 },
      { id: 'ml-5', name: '36 Diamonds', price: 10000 },
      { id: 'ml-6', name: '74 Diamonds', price: 20000 },
      { id: 'ml-7', name: '220 Diamonds', price: 60000 },
      { id: 'ml-8', name: '366 Diamonds', price: 100000 },
      { id: 'ml-9', name: '1050 Diamonds', price: 280000 },
      { id: 'ml-10', name: '2010 Diamonds', price: 470000 },
      { id: 'ml-11', name: '3620 Diamonds', price: 502000 },
      { id: 'ml-12', name: '4000 Diamonds', price: 551000 },
      { id: 'ml-13', name: 'Weekly Diamond Pass', price: 27000 },
    ]
  },
  {
    id: 'pubg-mobile',
    title: 'PUBG Mobile',
    publisher: 'Tencent Games',
    imageUrl: 'https://play-lh.googleusercontent.com/zCSGnBtZk0Lmp1BAbyaZfLktDzHmC6oke67qzz3G1lBegAF2asyt5KzXOJ2PVdHDYkU=s256-rw',
    category: 'game',
    genre: 'FPS',
    currencyName: 'UC',
    currencyIconUrl: "data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23FFD700' stroke='%23B8860B' stroke-width='2'/%3E%3Ctext x='12' y='16' font-family='Arial, sans-serif' font-weight='bold' font-size='10' text-anchor='middle' fill='%23000'%3EUC%3C/text%3E%3C/svg%3E",
    formFields: [
      { name: 'playerId', label: 'Player ID', placeholder: 'Masukkan Player ID', type: 'text' },
    ],
    items: [
      { id: 'pubg-1', name: '60 UC', price: 14000 },
      { id: 'pubg-2', name: '325 UC', price: 70000 },
      { id: 'pubg-3', name: '660 UC', price: 140000 },
      { id: 'pubg-4', name: '1800 UC', price: 350000 },
      { id: 'pubg-5', name: '3850 UC', price: 700000 },
      { id: 'pubg-6', name: '8100 UC', price: 1400000 },
    ]
  },
  {
    id: 'free-fire',
    title: 'Free Fire',
    publisher: 'Garena',
    imageUrl: 'https://play-lh.googleusercontent.com/Tzh1vMigK1Cn7_KIaMvKBVQRQapIMWMMqqyA6UqJTAYRpino4vvX6ZvYcVjZ_D8g19-DfHKCVeO2QPWl8vHGzw=s256-rw',
    category: 'game',
    genre: 'FPS',
    currencyName: 'Diamonds',
    currencyIconUrl: "data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L2 8L12 22L22 8L12 2Z' fill='%2388ffff'/%3E%3Cpath d='M12 2L2 8L12 11V2Z' fill='%23aaffff'/%3E%3Cpath d='M12 22L2 8L12 11V22Z' fill='%2300dddd'/%3E%3Cpath d='M12 22L22 8L12 11V22Z' fill='%2300eeee'/%3E%3C/svg%3E",
    formFields: [
      { name: 'playerId', label: 'Player ID', placeholder: 'Masukkan Player ID', type: 'text' },
    ],
    items: [
      { id: 'ff-1', name: '5 Diamonds', price: 1000 },
      { id: 'ff-2', name: '70 Diamonds', price: 10000 },
      { id: 'ff-3', name: '140 Diamonds', price: 20000 },
      { id: 'ff-4', name: '355 Diamonds', price: 48000 },
      { id: 'ff-5', name: '720 Diamonds', price: 95000 },
      { id: 'ff-6', name: '1450 Diamonds', price: 190000 },
      { id: 'ff-7', name: 'Weekly Member', price: 28000 },
      { id: 'ff-8', name: 'Monthly Member', price: 85000 },
    ]
  },
  {
    id: 'valorant',
    title: 'Valorant',
    publisher: 'Riot Games',
    imageUrl: 'https://play-lh.googleusercontent.com/I8VgQ3QkRc4R0HnIHkaXlPvli-lehkF_OiCDuEiHafnwB8tvg6GT-h9jUaSKJIbHen8=s256-rw',
    category: 'game',
    genre: 'FPS',
    currencyName: 'Valorant Points',
    currencyIconUrl: "data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23FF4655'/%3E%3Cpath d='M8 8L12 16L16 8' stroke='%23fff' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
    formFields: [
      { name: 'riotId', label: 'Riot ID', placeholder: 'RiotID#Tagline', type: 'text' },
    ],
    items: [
      { id: 'val-1', name: '125 VP', price: 14000 },
      { id: 'val-2', name: '420 VP', price: 48000 },
      { id: 'val-3', name: '700 VP', price: 78000 },
      { id: 'val-4', name: '1375 VP', price: 145000 },
      { id: 'val-5', name: '2400 VP', price: 240000 },
      { id: 'val-6', name: '4000 VP', price: 380000 },
      { id: 'val-7', name: '8150 VP', price: 750000 },
    ]
  },
  {
    id: 'genshin-impact',
    title: 'Genshin Impact',
    publisher: 'HoYoverse',
    imageUrl: 'https://play-lh.googleusercontent.com/YQqyKaXX-63krqsfIzUEJWUWLINxcb5tbS6QVySdxbS7eZV7YB2dUjUvX27xA0TIGtfxQ5v-tQjwlT5tTB-O=s256-rw',
    category: 'game',
    genre: 'RPG',
    currencyName: 'Genesis Crystals',
    currencyIconUrl: "data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L15 10L23 12L15 14L12 22L9 14L1 12L9 10L12 2Z' fill='%23a1e3ff' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E",
    formFields: [
      { name: 'uid', label: 'UID', placeholder: 'Masukkan Server UID', type: 'text' },
      { name: 'server', label: 'Server', placeholder: 'Pilih Server (Asia, America, dll)', type: 'select' },
    ],
    items: [
      { id: 'gi-1', name: '60 Genesis Crystals', price: 16000 },
      { id: 'gi-2', name: '300+30 Genesis Crystals', price: 79000 },
      { id: 'gi-3', name: '980+110 Genesis Crystals', price: 249000 },
      { id: 'gi-4', name: '1980+260 Genesis Crystals', price: 479000 },
      { id: 'gi-5', name: '3280+600 Genesis Crystals', price: 799000 },
      { id: 'gi-6', name: '6480+1600 Genesis Crystals', price: 1599000 },
      { id: 'gi-7', name: 'Blessing of the Welkin Moon', price: 79000 },
    ]
  },
  {
    id: 'honkai-star-rail',
    title: 'Honkai: Star Rail',
    publisher: 'HoYoverse',
    imageUrl: 'https://play-lh.googleusercontent.com/_dFcpIqTMtD0b87HDt_GgCWrHzRWEkPRfGNrVP6fymrkV8tHtb8ub5ZPigilApFCTAgeGQK3W9T5Jp4QgK6ilUA=s256-rw',
    category: 'game',
    genre: 'RPG',
    currencyName: 'Oneiric Shards',
    currencyIconUrl: "data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L16 12L12 22L8 12L12 2Z' fill='%23e6a8d7' stroke='%23fff' stroke-width='1'/%3E%3Cpath d='M2 12L12 8L22 12L12 16L2 12Z' fill='%23ffbaff'/%3E%3C/svg%3E",
    formFields: [
      { name: 'uid', label: 'UID', placeholder: 'Masukkan Server UID', type: 'text' },
      { name: 'server', label: 'Server', placeholder: 'Pilih Server', type: 'select' },
    ],
    items: [
      { id: 'hsr-1', name: '60 Oneiric Shards', price: 16000 },
      { id: 'hsr-2', name: '300+30 Oneiric Shards', price: 79000 },
      { id: 'hsr-3', name: '980+110 Oneiric Shards', price: 249000 },
      { id: 'hsr-4', name: '1980+260 Oneiric Shards', price: 479000 },
      { id: 'hsr-5', name: 'Express Supply Pass', price: 79000 },
    ]
  },
  {
    id: 'ea-fc-mobile',
    title: 'EA FC Mobile',
    publisher: 'Electronic Arts',
    imageUrl: 'https://play-lh.googleusercontent.com/yQHb1bk88ENXLZ2_ZO-st7cuG78pva5yRAge2CjhBPoBoEng1ouxyx30vK4s4Z7553Kohd9pPVm1GC2Phs8slA=s256-rw',
    category: 'game',
    genre: 'Sports',
    currencyName: 'FC Points',
    currencyIconUrl: "data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='10' fill='%2300FF87'/%3E%3Ctext x='12' y='16' font-family='Arial, sans-serif' font-weight='bold' font-size='10' text-anchor='middle' fill='%23000'%3EFC%3C/text%3E%3C/svg%3E",
    formFields: [
      { name: 'userId', label: 'User ID', placeholder: 'Masukkan User ID', type: 'text' },
    ],
    items: [
      { id: 'fc-1', name: '100 FC Points', price: 15000 },
      { id: 'fc-2', name: '500 FC Points', price: 75000 },
      { id: 'fc-3', name: '1050 FC Points', price: 150000 },
      { id: 'fc-4', name: '5750 FC Points', price: 750000 },
      { id: 'fc-5', name: '12000 FC Points', price: 1500000 },
    ]
  },
  {
    id: 'steam-idr',
    title: 'Steam Wallet IDR',
    publisher: 'Valve',
    imageUrl: 'https://play-lh.googleusercontent.com/52_DMY5417awaEgJf3_9mWgEuO2t1JfkGab8kM-LD6l5u6cGm_1-GsoQ_IyWFHdbkA=s256-rw',
    category: 'voucher',
    currencyName: 'IDR',
    currencyIconUrl: "data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23171a21'/%3E%3Cpath d='M14.5 11c1.38 0 2.5-1.12 2.5-2.5S15.88 6 14.5 6 12 7.12 12 8.5s1.12 2.5 2.5 2.5zM8 12.5C5.51 12.5 3.5 14.51 3.5 17S5.51 21.5 8 21.5s4.5-2.01 4.5-4.5v-1l4.5-5.5v-3l-4.5 5.5v-1.5z' fill='%23fff'/%3E%3C/svg%3E",
    formFields: [
      { name: 'email', label: 'Alamat Email', placeholder: 'Voucher akan dikirim ke email', type: 'email' },
    ],
    items: [
      { id: 'st-1', name: 'IDR 12.000', price: 15000 },
      { id: 'st-2', name: 'IDR 45.000', price: 55000 },
      { id: 'st-3', name: 'IDR 90.000', price: 110000 },
      { id: 'st-4', name: 'IDR 250.000', price: 290000 },
      { id: 'st-5', name: 'IDR 400.000', price: 460000 },
      { id: 'st-6', name: 'IDR 600.000', price: 690000 },
    ]
  }
];

export interface PaymentMethod {
  id: string;
  name: string;
  provider: string;
  fee: number;
  imageUrl: string;
  category: 'e-wallet' | 'virtual-account' | 'credit-card' | 'convenience-store';
}

export const paymentMethods: PaymentMethod[] = [
  // E-Wallet
  { id: 'gopay', name: 'GoPay', provider: 'Gojek', fee: 1000, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg', category: 'e-wallet' },
  { id: 'ovo', name: 'OVO', provider: 'OVO', fee: 1000, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg', category: 'e-wallet' },
  { id: 'dana', name: 'DANA', provider: 'DANA', fee: 1000, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg', category: 'e-wallet' },
  // Virtual Account
  { id: 'bca', name: 'BCA Virtual Account', provider: 'BCA', fee: 4000, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg', category: 'virtual-account' },
  { id: 'mandiri', name: 'Mandiri Virtual Account', provider: 'Bank Mandiri', fee: 4000, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Bank_Mandiri_Vector.svg', category: 'virtual-account' },
  { id: 'bni', name: 'BNI Virtual Account', provider: 'BNI', fee: 4000, imageUrl: 'https://upload.wikimedia.org/wikipedia/id/5/55/BNI_logo.svg', category: 'virtual-account' },
  // Credit Card
  { id: 'credit-card', name: 'Kartu Kredit', provider: 'Visa / Mastercard / JCB', fee: 5000, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg', category: 'credit-card' },
  // Convenience Store
  { id: 'indomaret', name: 'Indomaret', provider: 'Indomaret', fee: 2500, imageUrl: 'https://upload.wikimedia.org/wikipedia/id/0/04/Logo_Indomaret.svg', category: 'convenience-store' },
  { id: 'alfamart', name: 'Alfamart', provider: 'Alfamart', fee: 2500, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/ALFAMART_LOGO_BARU.png', category: 'convenience-store' },
];


