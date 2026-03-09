import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, BadgeCheck, Brain, Zap } from 'lucide-react';

export default function Tjenester() {
  return (
    <div>
      <Helmet>
        <title>Tjenester – Langsiktig beslutningsstøtte | Rett Frem Rådgivning</title>
        <meta name="description" content="Langsiktig beslutningsstøtte og akutt beslutningsbistand for ledere. Strukturert prosess over 6 uker med ukentlige møter og fast pris." />
        <link rel="canonical" href="https://www.rettfremradgivning.no/tjenester" />
      </Helmet>

      {/* ── HERO: Oversikt over begge tjenester ── */}
      <section className="px-6 md:px-12 lg:px-24 pt-24 pb-10 bg-white">
        <div className="max-w-[900px] mx-auto">
          
          <p className="text-xs font-semibold tracking-[0.12em] uppercase 
            text-rf-blue mb-3">
            TJENESTER
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-apple-dark 
            leading-tight mb-4">
            To måter jeg kan hjelpe deg
          </h1>
          <div className="w-12 h-[2px] bg-rf-blue mb-6" />
          <p className="text-lg text-apple-body max-w-[600px] mb-10">
            Uansett om du trenger langsiktig utvikling eller hjelp til en 
            beslutning som ikke kan vente – jeg tilpasser meg der du er.
          </p>

          {/* Oversiktskort – begge tjenester */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Kort 1 */}
            <a href="#langsiktig" 
              className="group p-6 rounded-2xl border border-gray-200 
                hover:border-rf-blue hover:shadow-[0_4px_20px_rgba(0,51,102,0.08)] 
                transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-rf-blue/8 
                  flex items-center justify-center">
                  <Brain size={20} className="text-rf-blue" />
                </div>
                <span className="text-xs font-semibold tracking-widest 
                  uppercase text-rf-blue">
                  6 uker
                </span>
              </div>
              <h2 className="text-xl font-bold text-apple-dark mb-2">
                Langsiktig beslutningsstøtte
              </h2>
              <p className="text-apple-body text-sm leading-relaxed mb-4">
                Forskningsbasert metodikk som gir deg varig kompetanse – 
                ikke bare hjelp i øyeblikket.
              </p>
              <div className="flex items-center gap-1 text-rf-blue 
                text-sm font-semibold group-hover:gap-2 transition-all">
                Les mer <ArrowRight size={14} />
              </div>
            </a>

            {/* Kort 2 */}
            <a href="#akutt"
              className="group p-6 rounded-2xl border border-gray-200 
                hover:border-rf-blue hover:shadow-[0_4px_20px_rgba(0,51,102,0.08)] 
                transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-rf-blue/8 
                  flex items-center justify-center">
                  <Zap size={20} className="text-rf-blue" />
                </div>
                <span className="text-xs font-semibold tracking-widest 
                  uppercase text-rf-blue">
                  Enkeltmøter
                </span>
              </div>
              <h2 className="text-xl font-bold text-apple-dark mb-2">
                Akutt beslutningsbistand
              </h2>
              <p className="text-apple-body text-sm leading-relaxed mb-4">
                Når beslutningen ikke kan vente. Jeg bruker metodikken 
                direkte inn i situasjonen du står i – nå.
              </p>
              <div className="flex items-center gap-1 text-rf-blue 
                text-sm font-semibold group-hover:gap-2 transition-all">
                Les mer <ArrowRight size={14} />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ── SEKSJON 1: Langsiktig beslutningsstøtte ── */}
      <section id="langsiktig" 
        className="px-6 md:px-12 lg:px-24 py-10 bg-[#f8f9fb] scroll-mt-20">
        <div className="max-w-[900px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
            
            {/* VENSTRE KOLONNE */}
            <div className="flex flex-col gap-6">
              {/* Header-blokk */}
              <div>
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-rf-blue">
                  LANGSIKTIG BESLUTNINGSSTØTTE
                </p>
                <h2 className="text-3xl font-bold text-apple-dark leading-tight mt-1">
                  Bygg beslutningskompetanse som holder
                </h2>
                <div className="w-12 h-[2px] bg-rf-blue mt-3" />
              </div>

              {/* Ingress */}
              <div className="flex flex-col gap-4 max-w-[520px] 
                border-l-2 border-rf-blue/20 pl-5">
                <p className="text-apple-body leading-relaxed">
                  Et strukturert 6-ukers forløp hvor vi først danner en 
                  fullstendig oversikt over din lederrolle – bakgrunn, 
                  arbeidshverdag og beslutningshistorikk.
                </p>
                <p className="text-apple-body leading-relaxed">
                  Deretter gjennomfører vi ukentlige 90-minutters møter 
                  hvor du lærer en forskningsbasert metodikk for å ta bedre 
                  beslutninger – kontinuerlig tilpasset din situasjon.
                </p>
                <p className="text-apple-body leading-relaxed">
                  Målet er ikke bare å hjelpe deg her og nå. Det er å gi 
                  deg selvtilliten til å stå i egne beslutninger over tid – 
                  også når de er upopulære.
                </p>
              </div>
            </div>

            {/* HØYRE KOLONNE */}
            <div className="flex flex-col gap-4 sticky top-24 pt-[42px]">
              {/* Praktisk */}
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <p className="font-semibold text-apple-dark text-sm mb-3">Praktisk</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-xs text-apple-body">
                    <Calendar size={16} className="text-rf-blue shrink-0" />
                    Varighet: 6 uker
                  </div>
                  <div className="flex items-center gap-3 text-xs text-apple-body">
                    <Clock size={16} className="text-rf-blue shrink-0" />
                    90-minutters møter, én gang i uken
                  </div>
                  <div className="flex items-center gap-3 text-xs text-apple-body">
                    <BadgeCheck size={16} className="text-rf-blue shrink-0" />
                    Tilpasset din situasjon og hverdag
                  </div>
                </div>
              </div>

              {/* Pris */}
              <div className="p-5 rounded-2xl bg-rf-blue text-white">
                <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">
                  PRIS
                </p>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-2xl font-bold">30 000 kr</span>
                  <span className="text-base line-through text-white/40">
                    50 000 kr
                  </span>
                </div>
                <p className="text-white/70 text-xs mb-5">
                  Introduksjonspris for nye kunder
                </p>
                <Link to="/kontakt"
                  className="inline-flex items-center gap-2 bg-white text-rf-blue font-semibold text-xs px-4 py-2.5 rounded-lg hover:bg-white/90 transition-all">
                  Ta kontakt <ArrowRight size={12} />
                </Link>
              </div>
            </div>

          </div>

          <div className="mt-8 rounded-2xl bg-gradient-to-br from-rf-blue/10 
            to-rf-blue/20 w-full h-52 flex items-center justify-center">
            <span className="text-rf-blue/30 text-xs font-medium">
              [ Bilde kommer ]
            </span>
          </div>

          <div className="pt-6 flex flex-col md:flex-row items-center 
            justify-between gap-4 border-t border-gray-200 mt-2">
            <div>
              <p className="font-bold text-apple-dark mb-1">
                Metodikken er forskningsbasert
              </p>
              <p className="text-sm text-apple-body">
                Les om forskningen og teoriene som ligger til grunn – 
                Kahneman, systemtenkning og mer.
              </p>
            </div>
            <Link to="/innsikt"
              className="shrink-0 inline-flex items-center gap-2 
                border border-rf-blue text-rf-blue font-semibold text-sm 
                px-5 py-3 rounded-xl hover:bg-rf-blue hover:text-white 
                transition-all">
              Se forskningen <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SEKSJON 2: Akutt beslutningsbistand ── */}
      <section id="akutt" 
        className="px-6 md:px-12 lg:px-24 py-16 bg-[#f8f9fb]">
        <div className="max-w-[900px] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 
            items-center">

            {/* Fargeflate – placeholder for bilde */}
            <div className="rounded-2xl bg-gradient-to-br from-rf-blue/15 
              to-rf-blue/25 min-h-[280px] flex items-center justify-center
              order-2 md:order-1">
              <p className="text-rf-blue/40 text-sm font-medium">
                [ Bilde kommer ]
              </p>
            </div>

            {/* Tekst */}
            <div className="order-1 md:order-2">
              <p className="text-xs font-semibold tracking-[0.12em] 
                uppercase text-rf-blue mb-3">
                NÅR BESLUTNINGEN IKKE KAN VENTE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold 
                text-apple-dark leading-tight mb-3">
                Akutt beslutningsbistand
              </h2>
              <div className="w-12 h-[2px] bg-rf-blue mb-5" />
              <p className="text-apple-body leading-relaxed mb-4">
                Noen ganger har du ikke tid til et 6-ukers forløp. 
                Avgjørelsen skulle vært tatt i går.
              </p>
              <p className="text-apple-body leading-relaxed mb-4">
                I stedet for å lære deg metodikken bruker jeg den 
                direkte – inn i situasjonen du er i nå. Du får et 
                solid, forskningsbasert grunnlag å handle ut fra.
              </p>
              <p className="text-apple-body leading-relaxed mb-6">
                Du får samme innsikt og analytiske tyngde som i det 
                langsiktige forløpet – anvendt direkte på din 
                beslutning, der og da.
              </p>
              <Link to="/kontakt"
                className="inline-flex items-center gap-2 bg-rf-blue 
                  text-white font-semibold text-sm px-5 py-3 rounded-xl 
                  hover:bg-rf-blue/90 transition-all">
                Ta kontakt for bistand <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
