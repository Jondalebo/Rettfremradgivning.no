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

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const ratios = useRef<Record<string, number>>({});

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = ['hero'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    };

    const updateActiveSection = () => {
      if (window.scrollY < 10) {
        setActiveSection('hero');
        return;
      }

      let maxRatio = 0;
      let winner = 'hero';

      for (const id in ratios.current) {
        const ratio = ratios.current[id];
        if (ratio > maxRatio) {
          maxRatio = ratio;
          winner = id;
        }
      }

      if (maxRatio > 0) {
        setActiveSection(winner);
      }
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        ratios.current[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
      });
      updateActiveSection();
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        ratios.current[id] = 0;
      }
    });

    const handleScroll = () => {
      if (window.scrollY < 10) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return activeSection;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const activeSection = useActiveSection();

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

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href === '/#hero' && location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('hero');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleBookClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="/#hero" 
          onClick={(e) => handleLinkClick(e, '/#hero')}
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
            const linkId = link.href.replace('/#', '');
            const isActive = activeSection === linkId || (location.pathname === link.href && !activeSection);
            return (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
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
              const linkId = link.href.replace('/#', '');
              const isActive = activeSection === linkId || (location.pathname === link.href && !activeSection);
              return (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={(e) => handleLinkClick(e, link.href)}
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

const Hero = () => {
  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector('#kontakt') as HTMLElement;
    if (contactSection) {
      const sectionTop = contactSection.offsetTop;
      const sectionHeight = contactSection.offsetHeight;
      const viewportHeight = window.innerHeight;
      const offset = sectionTop - (viewportHeight / 2 - sectionHeight / 2) - 40;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#003366 1px, transparent 1px), 
                            linear-gradient(90deg, #003366 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      {/* Subtle blue glow – top right only */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] 
           bg-rf-blue-light rounded-full blur-3xl opacity-40 -z-10 
           translate-x-1/3 -translate-y-1/4" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[3.75rem] font-bold text-apple-dark leading-[1.15] tracking-tight text-left">
              De beste beslutningene <br />
              tas <span className="text-rf-blue text-[1.12em] italic">Ikke</span> alene
            </h1>
            <div className="w-12 h-[2px] bg-rf-blue my-5" />
            <p className="text-[1.05rem] text-apple-body max-w-[480px] leading-[1.65] mt-5">
              Komplekse organisasjoner skaper komplekse utfordringer. 
              Løsningen krever oversikt over helheten – ikke bare symptomet.
            </p>
            <Link
              to="/losninger"
              className="group mt-8 flex items-start gap-4 p-5 rounded-[14px]
              bg-rf-blue-light border border-rf-blue/10
              hover:border-rf-blue/25 hover:bg-rf-blue/[0.07]
              transition-all duration-300"
            >
              <div className="mt-0.5 w-8 h-8 rounded-full bg-rf-blue/10 
                 flex items-center justify-center shrink-0
                 group-hover:bg-rf-blue/20 transition-colors">
                <ArrowRight size={15} className="text-rf-blue" />
              </div>
              <div>
                <p className="text-[0.78rem] font-bold tracking-[0.08em] uppercase 
                   text-rf-blue mb-1">
                  Har du oversikt?
                </p>
                <p className="text-[0.95rem] font-semibold text-apple-dark 
                   group-hover:text-rf-blue transition-colors leading-snug">
                  Se løsninger på vanlige lederutfordringer
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase 
               text-rf-blue/60 mb-5">
              Klar for en samtale?
            </p>
            <div className="flex flex-col gap-5">
              <a 
                href="#kontakt" 
                onClick={handleBookClick}
                className="btn-primary !py-3 hover-lift gap-2"
                aria-label="Book en samtale med Jon Martin Hovd Dalebø"
              >
                Book en samtale <ArrowRight size={18} />
              </a>
              <a href="#tjeneste" className="btn-outline !py-2.5 !px-6 text-sm hover-lift">
                Se hva jeg gjør
              </a>
            </div>

            <div className="mt-10 flex flex-col items-center">
              <p className="label-sm mb-4 opacity-70">Ta kontakt direkte</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="tel:955332846" 
                  className="flex items-center gap-2 px-4 py-2 border border-apple-dark/10 rounded-[6px] text-[0.85rem] font-medium hover:bg-apple-gray transition-colors text-apple-dark/60"
                >
                  <Phone size={13} className="text-rf-blue/60" /> 955 33 28 46
                </a>
                <a 
                  href="mailto:post@rettfremradgivning.no" 
                  className="flex items-center gap-2 px-4 py-2 border border-apple-dark/10 rounded-[6px] text-[0.85rem] font-medium hover:bg-apple-gray transition-colors text-apple-dark/60"
                >
                  <Mail size={13} className="text-rf-blue/60" /> post@rettfremradgivning.no
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="tjeneste" className="py-[2rem] px-6 md:px-12 lg:px-24 bg-white scroll-mt-[35px]">
      <div className="max-w-[900px] mx-auto">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[0.7rem] tracking-[0.15em] uppercase text-rf-blue/70 font-semibold mb-4 text-center">
            TJENESTE
          </p>
          <h2 className="text-[2.5rem] font-extrabold text-apple-dark leading-tight text-center mb-[0.5rem]">
            Langsiktig beslutningsstøtte
          </h2>
          <div className="w-12 h-[2px] bg-rf-blue mt-3 mb-[0.75rem] mx-auto" />
          <p className="text-[1rem] text-apple-body leading-[1.5] max-w-[650px] mt-4 mb-[1rem] mx-auto text-center">
            Jeg hjelper ledere å få full oversikt over utfordringene de står i – 
            og bygge løsninger som varer over tid, ikke bare fungerer til neste krise.
          </p>
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-[85%] mx-auto"
        >
          <p className="text-[0.7rem] tracking-[0.15em] uppercase text-rf-blue/70 font-semibold mb-[0.75rem] text-left">
            SLIK JOBBER VI
          </p>
        </motion.div>

        {/* Phase Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[0.85rem] mb-5 max-w-[85%] mx-auto"
        >
          <div className="bg-white rounded-[10px] p-[0.9rem_1.1rem] shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-[0.95rem] leading-[1.5]">
            <p className="text-[0.95rem] font-bold mb-1 text-apple-dark">1. Forstå situasjonen din</p>
            <p className="text-[0.875rem] leading-[1.5] text-apple-body">Vi kartlegger hva utfordringen faktisk består av – hvilke variabler som spiller inn og hvem som må involveres.</p>
          </div>

          <div className="bg-white rounded-[10px] p-[0.9rem_1.1rem] shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-[0.95rem] leading-[1.5]">
            <p className="text-[0.95rem] font-bold mb-1 text-apple-dark">2. Bygge en løsning som passer</p>
            <p className="text-[0.875rem] leading-[1.5] text-apple-body">Vi bygger en praktisk tilnærming tilpasset din situasjon – noe som holder når situasjonen skifter.</p>
          </div>

          <div className="bg-white rounded-[10px] p-[0.9rem_1.1rem] shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-[0.95rem] leading-[1.5]">
            <p className="text-[0.95rem] font-bold mb-1 text-apple-dark">3. Kontinuerlig justering</p>
            <p className="text-[0.875rem] leading-[1.5] text-apple-body">Hvert møte er forberedt og målrettet. Vi justerer kursen i takt med det som skjer.</p>
          </div>

          <div className="bg-white rounded-[10px] p-[0.9rem_1.1rem] shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-[0.95rem] leading-[1.5]">
            <p className="text-[0.95rem] font-bold mb-1 text-apple-dark">4. Forankre læringen</p>
            <p className="text-[0.875rem] leading-[1.5] text-apple-body">Vi ser tilbake på hele prosessen – hva som fungerte, og hva du tar med deg videre.</p>
          </div>
        </motion.div>

        {/* Practical Info - Moved to Bottom and Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-[0.95rem] font-semibold text-apple-dark tracking-[0.03em]">
            Typisk varighet: 4–6 uker · Ukentlige møter · Fast pris
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="om-meg" className="py-10 px-6 md:px-12 lg:px-24 bg-apple-gray scroll-mt-[35px]">
      <div className="max-w-[900px] mx-auto">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="text-[0.7rem] tracking-[0.15em] uppercase text-rf-blue/70 font-semibold mb-4">
            OM MEG
          </p>
          <h2 className="text-[2rem] font-extrabold text-apple-dark leading-tight mb-2">
            Jon Martin Hovd Dalebø
          </h2>
          <div className="w-12 h-[2px] bg-rf-blue mt-3 mb-3 mx-auto" />
          <p className="text-[0.95rem] text-apple-body leading-[1.5] max-w-[600px] mx-auto">
            Psykologiutdanning med fordypning i organisasjonspsykologi, 
            kombinert med bred erfaring fra arbeid tett på mennesker 
            i krevende situasjoner.
          </p>
        </motion.div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-[10px] p-[1.25rem] shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-full">
              <p className="text-[0.9rem] text-apple-dark leading-[1.55] mb-3">
                Jeg har jobbet i roller der forståelse av mennesker og systemer 
                har vært avgjørende. Det har gitt meg et praktisk blikk på hvordan 
                organisasjoner faktisk fungerer – ikke bare hvordan de er ment 
                å fungere.
              </p>
              <p className="text-[0.9rem] text-apple-dark leading-[1.55]">
                Den innsikten bruker jeg til å hjelpe ledere navigere situasjoner 
                der mennesker, systemer og beslutninger møtes.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-[0.5rem]"
          >
            <div className="bg-white rounded-[10px] px-[1.25rem] py-[1rem] shadow-[0_2px_12px_rgba(0,0_0,0.06)]">
              <p className="text-[0.95rem] font-bold text-apple-dark mb-1.5">Organisasjonspsykologi</p>
              <p className="text-[0.85rem] text-apple-body leading-[1.5]">
                Beslutningsprosesser, menneskelig adferd og organisasjonsforståelse
              </p>
            </div>
            <div className="bg-white rounded-[10px] px-[1.25rem] py-[1rem] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <p className="text-[0.95rem] font-bold text-apple-dark mb-1.5">Relasjonsarbeid under press</p>
              <p className="text-[0.85rem] text-apple-body leading-[1.5]">
                Erfaring med tett oppfølging av mennesker i svært krevende situasjoner over tid
              </p>
            </div>
            <div className="bg-white rounded-[10px] px-[1.25rem] py-[1rem] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <p className="text-[0.95rem] font-bold text-apple-dark mb-1.5">Strategisk rådgivning og markedsføring</p>
              <p className="text-[0.85rem] text-apple-body leading-[1.5]">
                Relasjonsbasert salg, kundedialog og forretningsutvikling
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="kontakt" className="min-h-screen flex items-center py-12 lg:py-0 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[50px] items-center">
          {/* Left Column: Info Card with Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card flex flex-col justify-center !p-8 lg:!p-12"
          >
            <div className="mb-10">
              <h2 className="heading-lg mb-4 text-apple-dark">Ta kontakt</h2>
              <p className="text-lg text-apple-body leading-relaxed max-w-md">
                Ønsker du en uforpliktende samtale om en konkret situasjon? Ta kontakt.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-rf-blue shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="label-sm mb-1">Telefon</p>
                  <p className="text-xl md:text-2xl font-semibold text-apple-dark">955 33 28 46</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-rf-blue shadow-sm shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="label-sm mb-1">E-post</p>
                  <p className="text-xl md:text-2xl font-semibold whitespace-nowrap text-apple-dark">post@rettfremradgivning.no</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card !p-8 lg:!p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block label-sm mb-1.5">Navn</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white border border-black/5 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rf-blue/20 transition-all"
                  placeholder="Ditt navn"
                />
              </div>
              <div>
                <label htmlFor="email" className="block label-sm mb-1.5">E-post</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white border border-black/5 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rf-blue/20 transition-all"
                  placeholder="din@epost.no"
                />
              </div>
              <div>
                <label htmlFor="message" className="block label-sm mb-1.5">Melding</label>
                <textarea 
                  id="message" 
                  rows={3} 
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white border border-black/5 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rf-blue/20 transition-all resize-none"
                  placeholder="Hvordan kan jeg hjelpe?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`w-full py-3.5 rounded-xl font-bold transition-all ${isSubmitted ? 'bg-emerald-500 text-white' : 'bg-rf-blue text-white hover:opacity-90'}`}
              >
                {isSubmitted ? 'Melding sendt!' : 'Send melding'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

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

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
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
