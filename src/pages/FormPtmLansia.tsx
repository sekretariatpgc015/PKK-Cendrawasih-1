import { motion } from 'motion/react';
import { Navigate } from 'react-router-dom';

export default function FormPtmLansia() {
  const isPosbinduLoggedIn = localStorage.getItem('isPosbinduLoggedIn') === 'true';

  if (!isPosbinduLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-160px)] flex flex-col"
    >
      <div className="flex-grow w-full h-full">
        <iframe 
          src="https://ptm-lansia-015.vercel.app/"
          title="Form PTM Lansia"
          className="w-full h-[calc(100vh-80px)] border-0"
          allow="microphone; camera; geolocation"
        />
      </div>
    </motion.div>
  );
}
