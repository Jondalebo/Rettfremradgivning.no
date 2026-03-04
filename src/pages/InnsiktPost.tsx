import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';

const posts = [
  {
    id: 1,
    category: "LEDELSE",
    title: "Når beslutninger tar lengre tid enn de burde",
    date: "Mars 2026"
  },
  {
    id: 2,
    category: "ORGANISASJON",
    title: "Hvorfor gode rutiner ikke alltid følges",
    date: "Mars 2026"
  },
  {
    id: 3,
    category: "INNSIKT",
    title: "Hva kjennetegner ledere som håndterer press godt?",
    date: "Mars 2026"
  }
];

const InnsiktPost = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Innlegget ble ikke funnet.</h1>
        <Link to="/innsikt" className="text-rf-blue hover:underline">← Tilbake til Innsikt</Link>
      </div>
    );
  }

  return (
    <div className="pt-20"> {/* Clear fixed navbar */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[700px] mx-auto">
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-[0.7rem] tracking-[0.1em] uppercase text-rf-blue font-semibold mb-2">
              {post.category}
            </p>
            <h1 className="text-[2.5rem] font-extrabold text-apple-dark leading-tight mb-3">
              {post.title}
            </h1>
            <div className="w-12 h-[2px] bg-rf-blue mt-3 mb-4" />
            <p className="text-[0.8rem] text-muted">
              {post.date}
            </p>
          </motion.div>

          {/* Placeholder Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#f5f5f5] rounded-lg p-12 text-center mb-12"
          >
            <p className="text-[1rem] text-muted">
              Innhold publiseres snart.
            </p>
          </motion.div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/innsikt" 
              className="text-[0.95rem] text-rf-blue font-medium hover:underline inline-flex items-center gap-2"
            >
              ← Tilbake til Innsikt
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnsiktPost;
