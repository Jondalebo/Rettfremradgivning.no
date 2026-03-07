import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Innsikt from './pages/Innsikt';
import InnsiktPost from './pages/InnsiktPost';
import Losninger from './pages/Losninger';
import Hjem from './pages/Hjem';
import Tjenester from './pages/Tjenester';
import OmMeg from './pages/OmMeg';
import Kontakt from './pages/Kontakt';
import { Navigate } from 'react-router-dom';

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hjem', href: '/' },
    { name: 'Tjenester', href: '/tjenester' },
    { name: 'Om meg', href: '/om-meg' },
    { name: 'Løsninger', href: '/losninger' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleBookClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="/" 
          onClick={handleLinkClick}
          className="flex items-center gap-2"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="w-full h-full text-rf-blue"
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          </div>
          <span className="font-semibold text-lg tracking-tight hidden sm:block text-apple-dark">Rett Frem Rådgivning</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={handleLinkClick}
                  className={`text-sm transition-all duration-200 pb-1 border-b-2 ${
                    isActive 
                      ? 'text-rf-blue font-semibold border-rf-blue' 
                      : 'text-apple-body font-normal border-transparent hover:text-rf-blue'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          <Link 
            to="/kontakt" 
            onClick={handleBookClick}
            className="btn-primary !px-5 !py-2 text-sm"
          >
            Book en samtale
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={handleLinkClick}
                  className={`text-lg transition-all duration-200 py-2 border-b-2 w-fit ${
                    isActive 
                      ? 'text-rf-blue font-semibold border-rf-blue' 
                      : 'text-apple-dark font-normal border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              to="/kontakt" 
              onClick={handleBookClick}
              className="btn-primary !rounded-xl text-center"
            >
              Book en samtale
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="w-full h-full text-rf-blue"
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          </div>
          <span className="font-semibold tracking-tight text-apple-dark">Rett Frem Rådgivning</span>
        </div>
        <div className="text-sm text-apple-body/60">
          © {new Date().getFullYear()} Rett Frem Rådgivning. Alle rettigheter reservert.
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/tjenester" className="text-apple-body hover:text-rf-blue transition-colors">Tjenester</Link>
          <Link to="/om-meg" className="text-apple-body hover:text-rf-blue transition-colors">Om meg</Link>
          <Link to="/kontakt" className="text-apple-body hover:text-rf-blue transition-colors">Kontakt</Link>
          <Link to="/losninger" className="text-apple-body hover:text-rf-blue transition-colors">
            Løsninger
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="selection:bg-rf-blue/10 selection:text-rf-blue">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hjem />} />
            <Route path="/tjenester" element={<Tjenester />} />
            <Route path="/om-meg" element={<OmMeg />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/losninger" element={<Losninger />} />
            <Route path="/losninger/:id" element={<Navigate to="/losninger" replace />} />
            <Route path="/innsikt" element={<Innsikt />} />
            <Route path="/innsikt/:id" element={<InnsiktPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
