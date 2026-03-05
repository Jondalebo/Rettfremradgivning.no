import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const losninger = [
  {
    id: 'beslutninger-som-droyer',
    kategori: 'BESLUTNING',
    tittel: 'Beslutninger som drøyer – eller aldri landes',
    ingress: 'Møter holdes, alternativer vurderes, men ingen beslutning tas. Resultatet er handlingslammelse som koster tid, energi og troverdighet.',
    tegn: ['Samme sak diskuteres i møte etter møte', 'Alle er enige om problemet, men ikke løsningen', 'Beslutningen utsettes i påvente av mer informasjon'],
  },
  {
    id: 'rutiner-som-ikke-folges',
    kategori: 'ORGANISASJON',
    tittel: 'Rutiner som innføres – men ikke følges',
    ingress: 'Nye rutiner presenteres, alle nikker, men i praksis skjer lite. Ikke fordi folk er motvillige, men fordi rutinen ikke passer den faktiske hverdagen.',
    tegn: ['Rutinen krever mer tid enn folk har', 'Systemet er designet for idealsituasjoner', 'Ingen eier ansvaret for at det faktisk skjer'],
  },
  {
    id: 'endringer-som-ikke-fester-seg',
    kategori: 'ENDRING',
    tittel: 'Endringer som ikke fester seg i organisasjonen',
    ingress: 'Tiltaket innføres med entusiasme. Seks måneder senere er man tilbake til gammel praksis. Problemet er sjelden viljen – det er forankringen.',
    tegn: ['Endringen skjer ovenfra uten involvering', 'Gevinsten er uklar for dem som skal endre seg', 'Ny praksis konkurrerer med etablerte vaner'],
  },
  {
    id: 'gjentakende-utfordringer',
    kategori: 'ANALYSE',
    tittel: 'Utfordringer som gjentar seg – uten at årsaken løses',
    ingress: 'Samme problem dukker opp igjen og igjen. Man slukker brannen, men kilden til røyken forblir uberørt. Root cause-analyse handler om å se forbi symptomet.',
    tegn: ['Samme type feil eller konflikt gjentar seg', 'Løsningene som prøves gir kortvarig effekt', 'Problemet beskrives ulikt av ulike personer'],
  },
  {
    id: 'det-naturlige-valget',
    kategori: 'DESIGN',
    tittel: 'Hvordan gjøre riktig adferd til det naturlige valget',
    ingress: 'Mange endringer feiler fordi de krever bevisst innsats hver gang. Når strukturen er riktig utformet, skjer riktig adferd av seg selv – uten press.',
    tegn: ['Folk gjør det enkle, ikke det riktige', 'Prosessen er designet for unntaket, ikke normalen', 'Systemet antar rasjonalitet i irrasjonelle situasjoner'],
  },
];

const Losninger = () => {
  return (
    <div className="pt-20">
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[900px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-[0.7rem] tracking-[0.15em] uppercase text-rf-blue/70 font-semibold mb-4">
              LØSNINGER
            </p>
            <h1 className="text-[2.5rem] font-extrabold text-apple-dark leading-tight mb-4">
              Kjenner du igjen en av disse situasjonene?
            </h1>
            <div className="w-12 h-[2px] bg-rf-blue mt-3 mb-6 mx-auto" />
            <p className="text-[1rem] text-apple-body leading-[1.6] max-w-[600px] mx-auto">
              Her finner du konkrete perspektiver på utfordringer mange ledere 
              står i – og hva som faktisk hjelper.
            </p>
          </motion.div>

          <div className="flex flex-col gap-5">
            {losninger.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Link
                  to={`/losninger/${item.id}`}
                  className="group block bg-white rounded-[12px] p-7 
                  shadow-[0_2px_12px_rgba(0,0,0,0.06)] 
                  hover:shadow-[0_4px_24px_rgba(0,51,102,0.1)] 
                  border border-black/[0.04] hover:border-rf-blue/20
                  transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <p className="text-[0.68rem] tracking-[0.12em] uppercase 
                         text-rf-blue/60 font-semibold mb-2">
                        {item.kategori}
                      </p>
                      <h2 className="text-[1.2rem] font-bold text-apple-dark mb-3 
                         group-hover:text-rf-blue transition-colors duration-200">
                        {item.tittel}
                      </h2>
                      <p className="text-[0.9rem] text-apple-body leading-[1.65] mb-4">
                        {item.ingress}
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {item.tegn.map((tegn, i) => (
                          <li key={i} className="flex items-start gap-2 
                             text-[0.82rem] text-apple-body/70">
                            <span className="mt-[5px] w-1 h-1 rounded-full 
                               bg-rf-blue/40 shrink-0" />
                            {tegn}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center md:items-end md:pb-0.5 shrink-0">
                      <span className="flex items-center gap-1.5 text-[0.85rem] 
                         font-semibold text-rf-blue/70 
                         group-hover:text-rf-blue group-hover:gap-2.5 
                         transition-all duration-200">
                        Les mer <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-black/5 text-center"
          >
            <p className="text-[1rem] text-apple-body mb-2">
              Ingen av disse treffer helt? Eller kjenner du deg igjen i flere?
            </p>
            <p className="text-[0.9rem] text-apple-body/60 mb-6">
              Ta en uforpliktende samtale – det koster ingenting å snakke.
            </p>
            
            <a
              href="tel:955332846"
              className="inline-flex items-center gap-3 bg-rf-blue text-white 
              px-8 py-4 rounded-full font-semibold text-[0.95rem]
              hover:opacity-90 transition-opacity"
            >
              Ring meg på 955 33 28 46
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Losninger;
