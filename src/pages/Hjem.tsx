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
        <meta name="description" content="Ekstern sparringspartner med psykologisk bakgrunn. Jeg hjelper ledere med å ta bedre beslutninger – gjennom strukturert metodikk basert på forskning. rettfremradgivning.no" />
        <link rel="canonical" href="https://www.rettfremradgivning.no/" />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-[58%_42%] h-[calc(100vh-64px)] max-h-screen bg-[#eef2f7]">
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            backgroundImage: 'url(/Vekt-Hero-seksjon.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0"
            style={{ backgroundColor: 'rgba(28,43,58,0.82)' }}
          />
        </div>
        {/* Venstre kolonne */}
        <div className="relative z-10 flex flex-col justify-center pl-8 lg:pl-24 pr-6 lg:pr-12 py-6 lg:py-0 h-full gap-0 lg:gap-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {/* Label */}
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-300 md:text-[#4a6fa5] mb-3 md:mb-6">
              Ekstern sparringspartner
            </p>

            <h1 className="text-3xl lg:text-5xl xl:text-7xl font-extrabold text-white lg:text-[#1c2b3a] leading-[1.1] tracking-tight mb-2 max-w-sm lg:max-w-none">
              Hvor mye koster en{' '}
              <span className="text-[#f0c060] lg:text-rf-blue italic">dårlig</span>{' '}
              beslutning?
            </h1>
            <div className="w-12 h-[2px] bg-white md:bg-[#1c2b3a] mb-2" />

            {/* Undertekst */}
            <p className="text-white/85 lg:text-[#2c3e50] lg:opacity-70 text-base leading-relaxed mt-4 mb-6 lg:mt-6 lg:mb-7 max-w-md">
              Jeg hjelper ledere med å ta bedre beslutninger – gjennom strukturert metodikk og psykologisk innsikt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex flex-col gap-2 max-w-[400px]"
          >
            <Link
              to="/tjenester"
              className="w-full flex items-center justify-between gap-4
              bg-rf-blue text-white px-6 py-3 rounded-[12px]
              font-semibold text-[0.95rem] hover:opacity-90 transition-opacity"
            >
              Se hva jeg tilbyr
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/kontakt"
              className="w-full flex items-center justify-between gap-4
              border border-white/50 text-white md:border-[#1c2b3a] md:text-[#1c2b3a] px-6 py-3 rounded-[12px]
              font-semibold text-[0.95rem] hover:border-rf-blue/40
              hover:bg-rf-blue/5 transition-all"
            >
              Ta kontakt
              <ArrowRight size={18} className="text-rf-blue" />
            </Link>

            <Link
              to="/losninger"
              className="inline-flex items-center gap-2 
                text-sm text-[#4a6fa5] lg:text-[#1c2b3a]/60
                hover:text-[#1c2b3a] lg:hover:text-[#1c2b3a]
                transition-colors duration-200 mt-2"
            >
              Kjenner du igjen noen av disse situasjonene?
              <span>→</span>
            </Link>
          </motion.div>
        </div>

        {/* Høyre kolonne */}
        <div className="relative h-full overflow-hidden hidden lg:block">
          <img
            src="/Vekt-Hero-seksjon.png"
            alt="Vekten av en beslutning"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(28, 43, 58, 0.45)' }}
          />
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

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

      <div className="section-divider" aria-hidden="true" />

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
            href="tel:95332846"
            className="inline-flex items-center gap-3 bg-rf-blue text-white
            px-8 py-4 rounded-full font-semibold text-[0.95rem]
            hover:opacity-90 transition-opacity"
          >
            Ring 95 33 28 46
          </a>
        </div>
      </section>

    </div>
  );
};

export default Hjem;
