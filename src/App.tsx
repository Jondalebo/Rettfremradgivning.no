import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, ArrowRight, Shield, Users, BarChart3, ChevronRight } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tjenester', href: '#tjenester' },
    { name: 'Om meg', href: '#om-meg' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-rf-blue rounded-sm flex items-center justify-center">
            {/* Plain blue square as requested */}
          </div>
          <span className="font-semibold text-lg tracking-tight hidden sm:block">Rett Frem Rådgivning</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-rf-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#kontakt" 
            className="bg-rf-blue text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book en samtale
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#kontakt" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-rf-blue text-white px-6 py-3 rounded-xl text-center font-medium"
            >
              Book en samtale
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-rf-blue-light rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-rf-blue-light rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-center flex flex-col items-center"
        >
          <h1 className="heading-xl mb-8">
            Rådgivning som er <br /> <span className="text-rf-blue lowercase">rett frem.</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed max-w-3xl">
            Vi gjør komplekse utfordringer håndterbare – gjennom klare analyser, ærlige vurderinger og tiltak som faktisk fungerer i praksis.
          </p>
          <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
            Rett Frem Rådgivning hjelper virksomheter og ledere med å navigere krevende situasjoner – enten det handler om sikkerhet i praksis, lederansvar under press eller strukturelle utfordringer i organisasjonen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <a href="#kontakt" className="bg-rf-blue text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Book en samtale <ArrowRight size={18} />
            </a>
            <a href="#tjenester" className="bg-apple-gray text-apple-dark px-8 py-4 rounded-full font-semibold flex items-center justify-center hover:bg-gray-200 transition-colors">
              Les mer om tjenestene
            </a>
          </div>

          <div className="flex flex-wrap gap-8 pt-8 border-t border-black/5 justify-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rf-blue-light flex items-center justify-center text-rf-blue">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted font-bold">Telefon</p>
                <p className="font-semibold">955 33 28 46</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rf-blue-light flex items-center justify-center text-rf-blue">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted font-bold">E-post</p>
                <p className="font-semibold">post@rettfremradgivning.no</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, subtitle, description, points, index }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-apple-gray rounded-3xl p-8 md:p-12 flex flex-col h-full"
    >
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-rf-blue mb-8 shadow-sm">
        <Icon size={28} />
      </div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-rf-blue mb-2">{title}</h3>
      <h4 className="text-2xl md:text-3xl font-semibold mb-6">{subtitle}</h4>
      <p className="text-lg text-muted mb-8 leading-relaxed">
        {description}
      </p>
      
      <div className="mt-auto">
        <p className="font-bold mb-4">Jeg bistår med:</p>
        <ul className="space-y-3">
          {points.map((point: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-muted">
              <ChevronRight size={18} className="text-rf-blue mt-1 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Praktisk HMS og sikkerhet i drift",
      subtitle: "Når sikkerhet må fungere i praksis",
      description: "Mange virksomheter har gode HMS-rutiner på papiret. Likevel oppstår de samme feilene igjen og igjen. Ofte handler det ikke om manglende vilje – men om hvordan systemer, rutiner og insentiver faktisk er utformet.",
      points: [
        "Analyse av hvorfor rutiner ikke følges",
        "Kartlegging av friksjon i daglig drift",
        "Identifisering av risikomomenter som ikke fanges opp i systemet",
        "Tiltak som gir varig effekt – ikke bare mer opplæring"
      ]
    },
    {
      icon: Users,
      title: "Lederstøtte i krevende situasjoner",
      subtitle: "Støtte når lederrollen blir krevende",
      description: "Som leder forventes det at du holder oversikten, er tydelig, rettferdig og strategisk – samtidig som du håndterer mennesker, konflikter og krav fra flere retninger.",
      points: [
        "Kartlegging av situasjonen grundig",
        "Klargjør utfordringsbildet",
        "Utvikler en konkret og anvendbar tilnærming",
        "Gjennomfører ukentlige samtaler tilpasset din virkelighet"
      ]
    },
    {
      icon: BarChart3,
      title: "Organisasjonskartlegging og systemanalyse",
      subtitle: "Når utfordringene sitter i strukturen",
      description: "Utfordringer i en virksomhet oppstår sjelden isolert. Ofte påvirker avdelinger, beslutningsstrukturer og insentiver hverandre på måter som ikke er synlige.",
      points: [
        "Avdekke hvordan deler av virksomheten påvirker hverandre",
        "Identifisere strukturelle flaskehalser",
        "Forstå hvordan interne mekanismer skaper eksterne resultater",
        "Foreslå strukturelle justeringer som gir varig effekt"
      ]
    }
  ];

  return (
    <section id="tjenester" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-lg mb-6">Tjenester</h2>
          <p className="text-xl text-muted">
            Vi tilbyr spesialisert rådgivning for å løse komplekse organisatoriske utfordringer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="om-meg" className="section-padding bg-apple-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-8">Om Rett Frem Rådgivning</h2>
          <div className="space-y-8 text-lg text-muted leading-relaxed">
            <p>
              Rett Frem Rådgivning er etablert med et mål om å gjøre krevende problemstillinger enklere å forstå og mulig å håndtere.
            </p>
            <p>
              Tilnærmingen er analytisk, systemorientert og praktisk. Jeg arbeider i skjæringspunktet mellom menneskelig adferd, organisasjonsforståelse og operativ drift.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="py-12 px-8 bg-white rounded-3xl shadow-sm mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-apple-dark italic leading-relaxed">
              "Fokuset er alltid det samme: Å finne tiltak som fungerer i virkeligheten – ikke bare på papiret."
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Ingen standardpakker. Ingen unødvendig kompleksitet. Bare tydelige vurderinger og konkrete grep.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-64 mt-24 rounded-3xl overflow-hidden bg-rf-blue/5 flex items-center justify-center p-12"
        >
          {/* Abstract geometric representation of "Straight Forward" */}
          <div className="relative w-full max-w-2xl flex items-center justify-center">
            <div className="absolute w-full h-1 bg-rf-blue/20" />
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute h-1 bg-rf-blue z-10" 
            />
            <div className="w-20 h-20 border-4 border-rf-blue rounded-full bg-white z-20 flex items-center justify-center shadow-lg">
              <ArrowRight size={32} className="text-rf-blue" />
            </div>
          </div>
        </motion.div>
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
    <section id="kontakt" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-8">Ta kontakt</h2>
          <p className="text-xl text-muted leading-relaxed">
            Ønsker du en uforpliktende samtale om en konkret situasjon? Ta kontakt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-apple-gray p-8 md:p-12 rounded-3xl flex flex-col justify-center"
          >
            <div className="space-y-12">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-rf-blue shadow-sm shrink-0">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted font-bold mb-1">Telefon</p>
                  <p className="text-2xl md:text-3xl font-semibold">955 33 28 46</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-rf-blue shadow-sm shrink-0">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted font-bold mb-1">E-post</p>
                  <p className="text-2xl md:text-3xl font-semibold break-all">post@rettfremradgivning.no</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-apple-gray p-8 md:p-12 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest mb-2">Navn</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rf-blue/20 transition-all"
                  placeholder="Ditt navn"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest mb-2">E-post</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rf-blue/20 transition-all"
                  placeholder="din@epost.no"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest mb-2">Melding</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rf-blue/20 transition-all resize-none"
                  placeholder="Hvordan kan jeg hjelpe?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`w-full py-4 rounded-xl font-bold transition-all ${isSubmitted ? 'bg-emerald-500 text-white' : 'bg-rf-blue text-white hover:opacity-90'}`}
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
  return (
    <footer className="py-12 px-6 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-rf-blue rounded-sm" />
          <span className="font-semibold tracking-tight">Rett Frem Rådgivning</span>
        </div>
        <div className="text-sm text-muted">
          © {new Date().getFullYear()} Rett Frem Rådgivning. Alle rettigheter reservert.
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#tjenester" className="hover:text-rf-blue transition-colors">Tjenester</a>
          <a href="#om-meg" className="hover:text-rf-blue transition-colors">Om meg</a>
          <a href="#kontakt" className="hover:text-rf-blue transition-colors">Kontakt</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-rf-blue/10 selection:text-rf-blue">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
