import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    category: "LEDELSE",
    title: "Når beslutninger tar lengre tid enn de burde",
    ingress: "En gjennomgang av hva som skjer når beslutningsprosesser stopper opp – og hva som faktisk hjelper.",
    date: "Mars 2026"
  },
  {
    id: 2,
    category: "ORGANISASJON",
    title: "Hvorfor gode rutiner ikke alltid følges",
    ingress: "Problemet er sjelden viljen. Det handler om hvordan systemene rundt mennesker er utformet.",
    date: "Mars 2026"
  },
  {
    id: 3,
    category: "INNSIKT",
    title: "Hva kjennetegner ledere som håndterer press godt?",
    ingress: "Noen ledere holder hodet kaldt når det butter imot. Her er mønstrene jeg ser går igjen.",
    date: "Mars 2026"
  }
];

const Innsikt = () => {
  return (
    <div className="pt-20"> {/* Clear fixed navbar */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[900px] mx-auto">
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-[0.7rem] tracking-[0.15em] uppercase text-rf-blue/70 font-semibold mb-4">
              INNSIKT
            </p>
            <h1 className="text-[2.5rem] font-extrabold text-apple-dark leading-tight mb-3">
              Perspektiver på ledelse og organisasjon
            </h1>
            <div className="w-12 h-[2px] bg-rf-blue mt-3 mb-12 mx-auto" />
          </motion.div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link 
                  to={`/innsikt/${post.id}`} 
                  className="group block bg-white rounded-lg overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/insight-${post.id}/800/450`} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <p className="text-[0.7rem] tracking-[0.1em] uppercase text-rf-blue/70 font-semibold mb-2">
                      {post.category}
                    </p>
                    <h2 className="text-[1.15rem] font-bold text-apple-dark mb-2 group-hover:text-rf-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[0.9rem] text-apple-body leading-[1.6] mb-4">
                      {post.ingress}
                    </p>
                    <p className="text-[0.8rem] text-apple-body/50">
                      {post.date}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innsikt;
