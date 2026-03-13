import React from 'react';
import { Navigate } from 'react-router-dom';

export default function KeuanganPkk() {
  const isPkkLoggedIn = localStorage.getItem('isPkkLoggedIn') === 'true';

  if (!isPkkLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="w-full h-[calc(100vh-5rem)]">
      <iframe 
        src="https://keuangan-pkk.vercel.app/" 
        title="Keuangan PKK"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
}
