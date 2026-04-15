import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === 'Posbindu' && password === 'PtmLansia015') {
      localStorage.setItem('isPosbinduLoggedIn', 'true');
      navigate('/form-ptm-lansia');
    } else if (username === 'Posbindu 2' && password === 'Finance') {
      localStorage.setItem('isPosbindu2LoggedIn', 'true');
      navigate('/keuangan-posbindu');
    } else if (username === 'Posbindu 3' && password === 'FinanceNS') {
      localStorage.setItem('isPosbindu3LoggedIn', 'true');
      navigate('/keuangan-posbindu-non-subsidi');
    } else if (username === 'PKK 015' && password === 'Finance') {
      localStorage.setItem('isPkkLoggedIn', 'true');
      navigate('/keuangan-pkk');
    } else if (username === 'Posyandu' && password === 'Finance') {
      localStorage.setItem('isPosyanduLoggedIn', 'true');
      navigate('/keuangan-posyandu');
    } else {
      setError('Username atau password salah.');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-160px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-rose-100">
        <div className="text-center">
          <div className="mx-auto w-24 h-24 mb-6 flex items-center justify-center rounded-2xl overflow-hidden shadow-sm border border-rose-100 bg-white">
            <img 
              src="https://cdn.phototourl.com/member/2026-03-29-6aafd335-cfb2-47ca-940d-0108ac027797.png" 
              alt="Logo PKK Cendrawasih 1" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Portal Keuangan</h2>
          <p className="mt-2 text-sm text-slate-600">
            PKK Cendrawasih 1
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm text-center border border-red-100">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none relative block w-full px-4 py-3 border border-rose-200 placeholder-slate-400 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm transition-shadow"
                placeholder="Masukkan username"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                Kata Sandi
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full px-4 py-3 pr-10 border border-rose-200 placeholder-slate-400 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm transition-shadow"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Eye className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-rose-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
                Ingat saya
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-rose-600 hover:text-rose-500">
                Lupa kata sandi?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 shadow-sm transition-colors"
            >
              Masuk
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm font-medium text-slate-500 hover:text-rose-600 transition-colors">
            &larr; Kembali ke Beranda
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
