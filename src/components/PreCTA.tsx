import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PreCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative w-full py-40 flex items-center justify-center">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
      >
        <h2 className="font-serif text-[clamp(40px,5vw,72px)] text-marble leading-[1.08] mb-6">
          From Stone to<br />
          <em className="text-gradient-gold italic">Sacred Presence</em>
        </h2>
        <p className="font-sans font-light text-secondary text-lg max-w-xl mx-auto">
          Bring home a piece of timeless craftsmanship — sculpted with devotion, built to last generations.
        </p>
      </motion.div>
    </section>
  );
}
