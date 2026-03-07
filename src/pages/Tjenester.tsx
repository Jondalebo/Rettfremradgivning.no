import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Calendar, DollarSign } from 'lucide-react';

interface Fase {
  nummer: string;
  tittel: string;
  beskrivelse: string;
}

const faser: Fase[] = [
  {
    nummer: '01',
    tittel: 'Forstå situasjonen din',
    beskrivelse: 'Vi starter med å kartlegge hva som faktisk skjer – ikke hva som skulle skjedd. Mønstre, friksjonspunkter og beslutningshistorikk legges på bordet.',
  },
  {
    nummer: '02',
    tittel: 'Bygge en løsning som passer',
    beskrivelse: 'Basert på forståelsen designer vi en tilnærming som tar hensyn til din faktiske hverdag – ikke en idealsituasjon som aldri finnes i praksis.',
  },
  {
    nummer: '03',
    tittel: 'Kontinuerlig justering',
    beskrivelse: 'Underveis tester vi forutsetningene mot virkeligheten. Hvis noe ikke stemmer, justerer vi kursen – ikke bare rapporten.',
  },
  {
    nummer: '04',
    tittel: 'Forankre læringen',
    beskrivelse: 'Avslutningsvis sikrer vi at innsikten lever videre i organisasjonen og ikke forsvinner når samarbeidet avsluttes.',
  },
];

const Tjenester: React.FC = () => {
  return (
    <div className="pt-20">

      <section className="pt-10 pb-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[900px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-14"
          >
            <p className="text-[0.7rem] tracking-[0.15em] uppercase text-rf-blue/70 font-semibold mb-4">
              TJENESTER
            </p>
            <h1 className="text-[2.5rem] font-extrabold text-apple-dark leading-tight mb-4">
              Langsiktig beslutningsstøtte
            </h1>
            <div className="w-12 h-[2px] bg-rf-blue mb-6" />
            <p className="text-[1.05rem] text-apple-body max-w-[600px] leading-[1.65]">
              For ledere som trenger mer hen et godt råd – de trenger en systematisk
              prosess som gir grunnlag for bedre beslutninger over tid.
            </p>
          </motion.div>

          {/* FASER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {faser.map((fase, index) => (
              <motion.div
                key={fase.nummer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="bg-white rounded-[14px] p-7
                shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                border border-black/[0.04]"
              >
                <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-rf-blue/50 mb-3">
                  {fase.nummer}
                </p>
                <h3 className="text-[1.1rem] font-bold text-apple-dark mb-3">
                  {fase.tittel}
                </h3>
                <p className="text-[0.88rem] text-apple-body leading-[1.65]">
                  {fase.beskrivelse}
                </p>
              </motion.div>
            ))}
          </div>

          {/* PRAKTISK INFO */}
          <div className="flex flex-wrap gap-6 justify-center py-6 px-8
            bg-rf-blue/5 rounded-[14px] border border-rf-blue/10 mb-20">
            {[
              { ikon: <Calendar size={16} />, tekst: 'Typisk varighet: 4–6 uker' },
              { ikon: <Clock size={16} />, tekst: 'Ukentlige møter' },
              { ikon: <DollarSign size={16} />, tekst: 'Fast pris' },
            ].map((item) => (
              <div key={item.tekst} className="flex items-center gap-2
                 text-[0.85rem] font-semibold text-rf-blue">
                {item.ikon}
                {item.tekst}
              </div>
            ))}
          </div>

          {/* AKUTT BISTAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="border-t border-black/5 pt-16 mb-8"
          >
            <p className="text-[0.7rem] tracking-[0.15em] uppercase text-apple-body/40 font-semibold mb-4">
              NÅR BESLUTNINGEN IKKE KAN VENTE
            </p>
            <h2 className="text-[2rem] font-extrabold text-apple-dark leading-tight mb-4 max-w-[600px]">
              Akutt beslutningsbistand
            </h2>
            <div className="w-12 h-[2px] bg-rf-blue mb-6" />
            <p className="text-[1rem] text-apple-body leading-[1.65] max-w-[580px] mb-4">
              Noen ganger har du ikke tid til langsiktig kompetanseheving.
              Avgjørelsen skulle vært tatt i går, og du trenger å stå trygt
              i valget du gjør – nå.
            </p>
            <p className="text-[1rem] text-apple-body leading-[1.65] max-w-[580px] mb-8">
              I stedet for å lære deg beslutningsmetodikk, bruker jeg selv
              teknikkene jeg har lært andre – direkte inn i situasjonen du
              er i, for å gi deg et solid grunnlag å handle ut fra.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 text-[0.95rem] font-semibold
              text-rf-blue hover:gap-3 transition-all duration-200"
            >
              Ta kontakt for akutt bistand <ArrowRight size={16} />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* BUNNSTRIP */}
      <section
        className="py-12 px-6 md:px-12 lg:px-24 border-t border-black/5"
        style={{ backgroundColor: '#F5F5F7' }}
      >
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row
           items-center justify-between gap-6">
          <div>
            <p className="text-[0.85rem] text-apple-body/60 mb-1">
              Vil du vite mer om meg?
            </p>
            <Link
              to="/om-meg"
              className="flex items-center gap-1.5 text-[0.95rem] font-semibold
              text-rf-blue hover:gap-2.5 transition-all duration-200"
            >
              Les om bakgrunnen min <ArrowRight size={15} />
            </Link>
          </div>
          <a
            href="tel:955332846"
            className="inline-flex items-center gap-3 bg-rf-blue text-white
            px-7 py-3.5 rounded-full font-semibold text-[0.9rem]
            hover:opacity-90 transition-opacity"
          >
            Ring 955 33 28 46
          </a>
        </div>
      </section>

    </div>
  );
};

export default Tjenester;
