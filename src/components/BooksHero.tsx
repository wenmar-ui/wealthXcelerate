import React from 'react';
import { motion } from 'framer-motion';

const BooksHero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-radial-gradient from-[#64af03]/5 to-transparent opacity-30"
        />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#64af03]/20 bg-[#64af03]/5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#64af03] mb-8">
            The Signature Collection
          </span>
          
          <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.85] font-black uppercase tracking-tighter mb-10 text-zinc-900">
            Educational<br />
            <span className="font-brand italic capitalize font-light text-[#64af03] low-opacity-glow">Blueprints.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-500 font-light leading-relaxed mb-12">
            A masterclass in financial architecture. These aren't just books — they are the definitive frameworks used by the world's most successful wealth builders.
          </p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-px h-24 bg-gradient-to-b from-[#64af03] to-transparent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Scroll to Explore</span>
          </motion.div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .low-opacity-glow {
          text-shadow: 0 0 30px rgba(100, 175, 3, 0.2);
        }
      `}} />
    </section>
  );
};

export default BooksHero;
