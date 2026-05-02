import React from 'react';

export const FoxLogo = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <img src="https://i.imgur.com/xhK3EDa.jpg" alt="FOX STORE" className={`object-contain rounded-full ${className}`} />
);
