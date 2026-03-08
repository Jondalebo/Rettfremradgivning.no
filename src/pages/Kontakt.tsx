import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Kontakt: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Noe gikk galt');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Kunne ikke sende meldingen. Prøv igjen eller ring meg direkte.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>Ta kontakt – Ring 95 33 28 46 | Rett Frem Rådgivning</title>
        <meta name="description" content="Ta kontakt med Jon Martin Hovd Dalebø for en uforpliktende samtale. Ring 95 33 28 46 eller send e-post til post@rettfremradgivning.no." />
        <link rel="canonical" href="https://www.rettfremradgivning.no/kontakt" />
      </Helmet>
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
                href="tel:95332846"
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
                  <p className="text-[1.3rem] font-bold">95 33 28 46</p>
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

          <div className="max-w-[620px] mx-auto mb-20">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-[20px] p-8 md:p-10
                  shadow-[0_4px_24px_rgba(0,0,0,0.06)]
                  border border-black/[0.04]"
                >
                  <h2 className="text-[1.4rem] font-bold text-apple-dark mb-6 text-center">
                    Send en melding
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-[0.85rem] font-semibold text-apple-dark/60 mb-2 ml-1">
                        Navn *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ditt navn"
                        className="w-full px-5 py-4 bg-black/[0.02] border border-black/[0.06] rounded-xl
                        focus:outline-none focus:border-rf-blue/30 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[0.85rem] font-semibold text-apple-dark/60 mb-2 ml-1">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ditt telefonnummer"
                        className="w-full px-5 py-4 bg-black/[0.02] border border-black/[0.06] rounded-xl
                        focus:outline-none focus:border-rf-blue/30 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-[0.85rem] font-semibold text-apple-dark/60 mb-2 ml-1">
                        Melding *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Hva kan jeg hjelpe deg med?"
                        className="w-full px-5 py-4 bg-black/[0.02] border border-black/[0.06] rounded-xl
                        focus:outline-none focus:border-rf-blue/30 focus:bg-white transition-all resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-rf-blue text-white font-semibold 
                        rounded-xl hover:bg-rf-blue/90 transition-all duration-200
                        disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sender...' : 'Send melding'}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-[20px] p-12 text-center
                  shadow-[0_4px_24px_rgba(0,0,0,0.06)]
                  border border-black/[0.04]"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-500" size={32} />
                  </div>
                  <h2 className="text-[1.6rem] font-bold text-apple-dark mb-4">
                    Meldingen er sendt!
                  </h2>
                  <p className="text-apple-body leading-relaxed mb-8">
                    Takk for din henvendelse. Jeg har mottatt meldingen din og tar kontakt med deg så snart som mulig.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-rf-blue font-semibold hover:underline"
                  >
                    Send en ny melding
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
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
