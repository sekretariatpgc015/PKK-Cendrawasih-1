import React from 'react';
import { Navigate } from 'react-router-dom';

export default function KeuanganPosyandu() {
  const isPosyanduLoggedIn = localStorage.getItem('isPosyanduLoggedIn') === 'true';

  if (!isPosyanduLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="w-full h-[calc(100vh-5rem)]">
      <iframe 
        src="https://keuangan-posyandu.vercel.app/" 
        title="Keuangan Posyandu"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
}
