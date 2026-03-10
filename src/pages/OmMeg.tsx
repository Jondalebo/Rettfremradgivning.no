import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface Kompetanseomrade {
  tittel: string;
  beskrivelse: string;
}

const kompetanseomrader: Kompetanseomrade[] = [
  {
    tittel: 'Organisasjonspsykologi',
    beskrivelse: 'Fordypning i hvordan mennesker fungerer i systemer – og hvorfor gode intensjoner ikke alltid gir gode resultater.',
  },
  {
    tittel: 'Relasjonsarbeid under press',
    beskrivelse: 'Bred erfaring fra arbeid tett på mennesker i krevende situasjoner der tillit og tydelighet må gå hånd i hånd.',
  },
  {
    tittel: 'Strategisk rådgivning',
    beskrivelse: 'Kombinasjonen av psykologisk forståelse og praktisk organisasjonserfaring gir et uvanlig utgangspunkt for strategisk sparring.',
  },
];

const OmMeg: React.FC = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Om meg – Jon Martin Hovd Dalebø | Rett Frem Rådgivning</title>
        <meta name="description" content="Jon Martin Hovd Dalebø – psykologiutdanning med fordypning i organisasjonspsykologi og bred erfaring fra arbeid med ledere i krevende situasjoner." />
        <link rel="canonical" href="https://www.rettfremradgivning.no/om-meg" />
      </Helmet>
      <section className="pt-10 pb-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[900px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-14 flex flex-col md:flex-row gap-10 items-center md:items-start"
          >
            <div className="w-48 h-48 rounded-2xl overflow-hidden shrink-0 shadow-lg">
              <img 
                src="/Om-Meg-Seksjon-Stol.png" 
                alt="Samtalerom" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.15em] uppercase text-rf-blue/70 font-semibold mb-4">
                OM MEG
              </p>
              <h1 className="text-[2.5rem] font-extrabold text-apple-dark leading-tight mb-4">
                Jon Martin Hovd Dalebø
              </h1>
              <div className="w-12 h-[2px] bg-rf-blue mb-6" />
              <p className="text-[1.05rem] text-apple-body max-w-[600px] leading-[1.65]">
                Psykologiutdanning med fordypning i organisasjonspsykologi, kombinert
                med bred erfaring fra arbeid tett på mennesker i krevende situasjoner.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white rounded-[14px] p-7
              shadow-[0_2px_12px_rgba(0,0,0,0.06)]
              border border-black/[0.04]"
            >
              <h2 className="text-[1.05rem] font-bold text-apple-dark mb-4">
                Bakgrunn og erfaring
              </h2>
              <p className="text-[0.9rem] text-apple-body leading-[1.7] mb-4">
                Jeg har en psykologiutdanning med særlig interesse for hvordan
                organisasjoner fungerer – eller svikter – under press. Det som
                fascinerer meg er ikke teorien alene, men gapet mellom hva som
                er planlagt og hva som faktisk skjer.
              </p>
              <p className="text-[0.9rem] text-apple-body leading-[1.7]">
                Gjennom ulike roller har jeg jobbet tett på ledere, team og
                situasjoner der beslutningene koster noe – og der feil ikke
                kan gjøres om igjen. Det har gitt meg en forståelse av hva
                som faktisk hjelper, og hva som bare er godt ment.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {kompetanseomrader.map((k, index) => (
                <motion.div
                  key={k.tittel}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
                  className="bg-white rounded-[14px] p-5
                  shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                  border border-black/[0.04]"
                >
                  <h3 className="text-[0.95rem] font-bold text-apple-dark mb-2">
                    {k.tittel}
                  </h3>
                  <p className="text-[0.83rem] text-apple-body leading-[1.6]">
                    {k.beskrivelse}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-black/5 pt-12 mb-12"
          >
            <h2 className="text-[1.4rem] font-bold text-apple-dark mb-4">
              Hvem jeg er utenom jobben
            </h2>
            <p className="text-[0.95rem] text-apple-body leading-[1.7] max-w-[580px]">
              Jeg er genuint nysgjerrig på folk. Det er ikke en egenskap jeg
              har dyrket for profesjonens skyld – det er der det hele startet.
              Å forstå hva som driver mennesker, hva som hemmer dem og hva
              de egentlig trenger, er noe jeg har funnet interessant lenge
              før jeg begynte å jobbe med det.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-5">
            <Link
              to="/tjenester"
              className="group flex-1 flex items-center justify-between gap-4
              border border-rf-blue/20 text-apple-dark px-6 py-4 rounded-[12px]
              font-semibold text-[0.95rem] hover:border-rf-blue/40
              hover:bg-rf-blue/5 transition-all"
            >
              Se hva jeg tilbyr
              <ArrowRight size={16} className="text-rf-blue" />
            </Link>
            <Link
              to="/kontakt"
              className="group flex-1 flex items-center justify-between gap-4
              bg-rf-blue text-white px-6 py-4 rounded-[12px]
              font-semibold text-[0.95rem] hover:opacity-90 transition-opacity"
            >
              Ta kontakt
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default OmMeg;
