import React from 'react';
import { Navigate } from 'react-router-dom';

export default function KeuanganPosbindu() {
  const isPosbindu2LoggedIn = localStorage.getItem('isPosbindu2LoggedIn') === 'true';

  if (!isPosbindu2LoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="w-full h-[calc(100vh-5rem)]">
      <iframe 
        src="https://keuangan-posbindu.vercel.app/" 
        title="Keuangan Posbindu"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
}
