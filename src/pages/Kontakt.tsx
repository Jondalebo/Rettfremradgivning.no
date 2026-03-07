import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const Kontakt: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="min-h-[calc(100vh-5rem)] flex items-center 
        py-10 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[900px] mx-auto w-full">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-[0.7rem] tracking-[0.15em] uppercase text-rf-blue/70 font-semibold mb-4">
              KONTAKT
            </p>
            <h1 className="text-[2.5rem] font-extrabold text-apple-dark leading-tight mb-4">
              La oss finne ut om jeg kan hjelpe
            </h1>
            <div className="w-12 h-[2px] bg-rf-blue mx-auto mb-6" />
            <p className="text-[1rem] text-apple-body leading-[1.65] max-w-[500px] mx-auto">
              En innledende samtale er alltid uforpliktende. Fortell meg kort
              hva du står i – så finner vi raskt ut om dette er noe jeg kan bidra med.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[620px] mx-auto mb-14">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <a
                href="tel:955332846"
                className="flex flex-col items-center gap-4 bg-rf-blue text-white
                p-8 rounded-[16px] hover:opacity-90 transition-opacity text-center w-full block"
              >
                <div className="w-12 h-12 rounded-full bg-white/20
                   flex items-center justify-center">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-[0.1em] uppercase text-white/70 mb-1">
                    Ring meg
                  </p>
                  <p className="text-[1.3rem] font-bold">955 33 28 46</p>
                  <p className="text-[0.78rem] text-white/60 mt-1">
                    Raskeste vei til en samtale
                  </p>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              <a
                href="mailto:post@rettfremradgivning.no"
                className="flex flex-col items-center gap-4 bg-white
                border border-rf-blue/15 hover:border-rf-blue/30
                p-8 rounded-[16px] transition-all text-center
                shadow-[0_2px_12px_rgba(0,0,0,0.05)] w-full block"
              >
                <div className="w-12 h-12 rounded-full bg-rf-blue/5
                   flex items-center justify-center">
                  <Mail size={22} className="text-rf-blue" />
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-[0.1em] uppercase text-apple-body/50 mb-1">
                    Send e-post
                  </p>
                  <p className="text-[0.95rem] font-bold text-apple-dark break-all">
                    post@rettfremradgivning.no
                  </p>
                  <p className="text-[0.78rem] text-apple-body/50 mt-1">
                    Svar innen 24 timer
                  </p>
                </div>
              </a>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center border-t border-black/5 pt-10"
          >
            <p className="text-[0.85rem] text-apple-body/50 mb-6 max-w-[440px] mx-auto">
              Usikker på hva du skal si? Bare ring og fortell hva du tenker på.
              Ingen forberedelser nødvendig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/losninger"
                className="inline-flex items-center gap-1.5 text-[0.85rem]
                font-semibold text-rf-blue hover:gap-2.5 transition-all duration-200"
              >
                Se vanlige lederutfordringer <ArrowRight size={14} />
              </Link>
              <span className="hidden sm:inline text-apple-body/30 self-center">·</span>
              <Link
                to="/tjenester"
                className="inline-flex items-center gap-1.5 text-[0.85rem]
                font-semibold text-rf-blue hover:gap-2.5 transition-all duration-200"
              >
                Les om tjenesten <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Kontakt;
