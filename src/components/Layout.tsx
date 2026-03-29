import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Heart, Users, Activity, Menu, X, ClipboardList, LogOut, Wallet } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isPosbinduLoggedIn = localStorage.getItem('isPosbinduLoggedIn') === 'true';
  const isPosbindu2LoggedIn = localStorage.getItem('isPosbindu2LoggedIn') === 'true';
  const isPkkLoggedIn = localStorage.getItem('isPkkLoggedIn') === 'true';
  const isPosyanduLoggedIn = localStorage.getItem('isPosyanduLoggedIn') === 'true';
  const isLoggedIn = isPosbinduLoggedIn || isPosbindu2LoggedIn || isPkkLoggedIn || isPosyanduLoggedIn;

  const navItems = [
    { path: '/', label: 'Beranda', icon: <Heart className="w-4 h-4 mr-2" /> },
    { path: '/posyandu', label: 'Posyandu', icon: <Users className="w-4 h-4 mr-2" /> },
    { path: '/posbindu', label: 'Posbindu', icon: <Activity className="w-4 h-4 mr-2" /> },
  ];

  if (isPosbinduLoggedIn) {
    navItems.push({ path: '/form-ptm-lansia', label: 'Form PTM', icon: <ClipboardList className="w-4 h-4 mr-2" /> });
  }
  
  if (isPosbindu2LoggedIn) {
    navItems.push({ path: '/keuangan-posbindu', label: 'Keuangan', icon: <Wallet className="w-4 h-4 mr-2" /> });
  }

  if (isPkkLoggedIn) {
    navItems.push({ path: '/keuangan-pkk', label: 'Keuangan PKK', icon: <Wallet className="w-4 h-4 mr-2" /> });
  }

  const handleLogout = () => {
    localStorage.removeItem('isPosbinduLoggedIn');
    localStorage.removeItem('isPosbindu2LoggedIn');
    localStorage.removeItem('isPkkLoggedIn');
    localStorage.removeItem('isPosyanduLoggedIn');
    navigate('/login');
  };

  const isPosbinduRoute = location.pathname === '/posbindu' || location.pathname === '/form-ptm-lansia' || location.pathname === '/keuangan-posbindu';
  const isPosyanduRoute = location.pathname === '/posyandu' || location.pathname === '/keuangan-posyandu';

  let logoSrc = "https://cdn.phototourl.com/member/2026-03-29-6aafd335-cfb2-47ca-940d-0108ac027797.png";
  let titleText = "PKK Cendrawasih 1";

  if (isPosbinduRoute) {
    logoSrc = "https://cdn.phototourl.com/member/2026-03-29-9809b89e-4e22-4209-9feb-be86deb8e748.png";
    titleText = "Posbindu Cendrawasih 1";
  } else if (isPosyanduRoute) {
    logoSrc = "https://cdn.phototourl.com/member/2026-03-29-132b62d8-d37a-4201-bfcd-120501987ee5.png";
    titleText = "Posyandu Cendrawasih 1";
  }

  return (
    <div className="min-h-screen bg-rose-50 font-sans text-slate-800 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-rose-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Title */}
            <div className="flex flex-col justify-center">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 flex items-center justify-center shadow-sm rounded-lg overflow-hidden bg-white border border-rose-100 group-hover:border-rose-300 transition-colors">
                  <img 
                    src={logoSrc} 
                    alt="Logo" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-rose-900 leading-tight">{titleText}</h1>
                  <p className="text-xs font-medium text-rose-600/80 uppercase tracking-wider">RW. 015 Pesona Gading Cibitung</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive 
                        ? 'bg-rose-100 text-rose-700 shadow-sm' 
                        : 'text-slate-600 hover:bg-rose-50 hover:text-rose-600'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                );
              })}
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="ml-4 flex items-center px-5 py-2 rounded-full text-sm font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 shadow-sm transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="ml-4 flex items-center px-5 py-2 rounded-full text-sm font-medium text-white bg-rose-500 hover:bg-rose-600 shadow-sm transition-colors"
                >
                  Login
                </Link>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-rose-600 hover:bg-rose-50 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-rose-100 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-rose-50 text-rose-700' 
                        : 'text-slate-600 hover:bg-rose-50/50 hover:text-rose-600'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2 mt-2 border-t border-rose-100">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleLogout();
                    }}
                    className="flex items-center justify-center w-full px-4 py-3 rounded-xl text-base font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors shadow-sm"
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center w-full px-4 py-3 rounded-xl text-base font-medium text-white bg-rose-500 hover:bg-rose-600 transition-colors shadow-sm"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-rose-100 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-rose-900 font-semibold">
              <img 
                src={logoSrc} 
                alt="Logo" 
                className="w-6 h-6 object-cover rounded-md border border-rose-100" 
                referrerPolicy="no-referrer" 
              />
              {titleText}
            </div>
            <p className="text-sm text-slate-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} Sekretariat RW. 015. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
