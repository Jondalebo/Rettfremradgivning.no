import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Users, Lightbulb, Phone, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface Seksjonskort {
  ikon: React.ReactNode;
  tittel: string;
  beskrivelse: string;
  href: string;
}

const seksjonskort: Seksjonskort[] = [
  {
    ikon: <Lightbulb size={22} className="text-rf-blue" />,
    tittel: 'Tjenester',
    beskrivelse: 'Langsiktig beslutningsstøtte og akutt rådgivning når situasjonen krever det.',
    href: '/tjenester',
  },
  {
    ikon: <Users size={22} className="text-rf-blue" />,
    tittel: 'Om meg',
    beskrivelse: 'Hvem er Jon Martin, og hvorfor er bakgrunnen min relevant for deg?',
    href: '/om-meg',
  },
  {
    ikon: <Phone size={22} className="text-rf-blue" />,
    tittel: 'Ta kontakt',
    beskrivelse: 'En uforpliktende samtale koster ingenting.',
    href: '/kontakt',
  },
];

const Hjem: React.FC = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Rett Frem Rådgivning – Ekstern beslutningsstøtte for ledere</title>
        <meta name="description" content="Ekstern sparringspartner for ledere i komplekse beslutninger. Langsiktig beslutningsstøtte som gir oversikt over helheten – ikke bare symptomet." />
        <link rel="canonical" href="https://www.rettfremradgivning.no/" />
      </Helmet>

      {/* HERO */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[900px] mx-auto w-full relative">
          {/* Subtil bakgrunnsglow */}
          <div 
            className="absolute -top-32 -right-32 w-[500px] h-[500px] 
            rounded-full -z-10 pointer-events-none"
            style={{ 
              background: 'radial-gradient(circle, rgba(0,51,102,0.04) 0%, transparent 70%)' 
            }} 
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <p className="text-[0.7rem] tracking-[0.15em] uppercase text-rf-blue/70 font-semibold mb-4">
                Rett Frem Rådgivning
              </p>
              <h1 className="text-[2.8rem] md:text-[3.5rem] font-extrabold text-apple-dark leading-[1.1] tracking-tight mb-6">
                De beste beslutningene tas{' '}
                <span className="text-rf-blue italic">ikke</span>{' '}
                alene
              </h1>
              <div className="w-12 h-[2px] bg-rf-blue mb-6" />
              <p className="text-[1.05rem] text-apple-body max-w-[480px] leading-[1.65]">
                Komplekse organisasjoner skaper komplekse utfordringer.
                Løsningen krever oversikt over helheten – ikke bare symptomet.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="flex flex-col gap-4"
            >
              <Link
                to="/tjenester"
                className="w-full flex items-center justify-between gap-4
                bg-rf-blue text-white px-6 py-4 rounded-[12px]
                font-semibold text-[1rem] hover:opacity-90 transition-opacity"
              >
                Se hva jeg tilbyr
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/kontakt"
                className="w-full flex items-center justify-between gap-4
                border border-rf-blue/20 text-apple-dark px-6 py-4 rounded-[12px]
                font-semibold text-[1rem] hover:border-rf-blue/40
                hover:bg-rf-blue/5 transition-all"
              >
                Ta kontakt
                <ArrowRight size={18} className="text-rf-blue" />
              </Link>

              <div className="pt-4 border-t border-black/5 flex flex-col gap-3">
                <a
                  href="tel:955332846"
                  className="flex items-center gap-2.5 text-[0.88rem] font-medium 
                  text-apple-body hover:text-rf-blue transition-colors group"
                >
                  <Phone size={15} className="text-rf-blue/60 group-hover:text-rf-blue 
                    transition-colors shrink-0" />
                  955 33 28 46
                </a>
                <a
                  href="mailto:post@rettfremradgivning.no"
                  className="flex items-center gap-2.5 text-[0.88rem] font-medium 
                  text-apple-body hover:text-rf-blue transition-colors group"
                >
                  <Mail size={15} className="text-rf-blue/60 group-hover:text-rf-blue 
                    transition-colors shrink-0" />
                  post@rettfremradgivning.no
                </a>
              </div>

              <Link
                to="/losninger"
                className="group flex items-start gap-4 p-5 rounded-[14px]
                bg-rf-blue/5 border border-rf-blue/10
                hover:border-rf-blue/25 hover:bg-rf-blue/[0.07]
                transition-all duration-300"
              >
                <div className="mt-0.5 w-8 h-8 rounded-full bg-rf-blue/10
                   flex items-center justify-center shrink-0
                   group-hover:bg-rf-blue/20 transition-colors">
                  <ArrowRight size={15} className="text-rf-blue" />
                </div>
                <div>
                  <p className="text-[0.78rem] font-bold tracking-[0.08em] uppercase text-rf-blue mb-1">
                    Har du oversikt?
                  </p>
                  <p className="text-[0.95rem] font-semibold text-apple-dark
                     group-hover:text-rf-blue transition-colors leading-snug">
                    Se løsninger på vanlige lederutfordringer
                  </p>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SEKSJONSKORT */}
      <section className="py-20 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#F5F5F7' }}>
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[1.8rem] font-extrabold text-apple-dark mb-3">
              Finn det du leter etter
            </h2>
            <div className="w-12 h-[2px] bg-rf-blue mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {seksjonskort.map((kort) => (
              <Link
                key={kort.tittel}
                to={kort.href}
                className="group flex flex-col gap-4 bg-white p-6 rounded-[14px]
                shadow-[0_2px_12px_rgba(0,0,0,0.05)]
                border border-black/[0.04] hover:border-rf-blue/20
                hover:shadow-[0_4px_20px_rgba(0,51,102,0.08)]
                transition-all duration-300 h-full"
              >
                <div className="w-10 h-10 rounded-full bg-rf-blue/5
                   flex items-center justify-center
                   group-hover:bg-rf-blue/10 transition-colors">
                  {kort.ikon}
                </div>
                <div className="flex-1">
                  <h3 className="text-[1.05rem] font-bold text-apple-dark mb-2
                     group-hover:text-rf-blue transition-colors">
                    {kort.tittel}
                  </h3>
                  <p className="text-[0.85rem] text-apple-body leading-[1.6]">
                    {kort.beskrivelse}
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-[0.8rem] font-semibold
                   text-rf-blue/60 group-hover:text-rf-blue transition-colors duration-200">
                  Les mer <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BUNN-CTA */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white border-t border-black/5">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[0.9rem] text-apple-body/60 mb-3">
            Usikker på om dette er relevant for deg?
          </p>
          <p className="text-[1.05rem] text-apple-body mb-6">
            Ring meg – det koster ingenting å snakke.
          </p>
          <a
            href="tel:955332846"
            className="inline-flex items-center gap-3 bg-rf-blue text-white
            px-8 py-4 rounded-full font-semibold text-[0.95rem]
            hover:opacity-90 transition-opacity"
          >
            Ring 955 33 28 46
          </a>
        </div>
      </section>

    </div>
  );
};

export default Hjem;
