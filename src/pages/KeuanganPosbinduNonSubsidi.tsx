import React from 'react';
import { Navigate } from 'react-router-dom';

export default function KeuanganPosbinduNonSubsidi() {
  const isPosbindu3LoggedIn = localStorage.getItem('isPosbindu3LoggedIn') === 'true';

  if (!isPosbindu3LoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="w-full h-[calc(100vh-5rem)]">
      <iframe 
        src="https://keuangan-posbindu-non-subsidi.vercel.app/" 
        title="Keuangan Posbindu Non Subsidi"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
}
