import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="contact" className="relative w-full py-32 flex flex-col items-center justify-center px-6 bg-[#0D0D0E]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-accent/[0.05] blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10 text-center max-w-3xl"
        initial={{ opacity: 0, y: 25 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-[clamp(34px,4vw,56px)] text-marble mb-14">
          Bring Divine Art into Your Space
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 text-left">
          <div className="rounded border border-white/10 bg-white/[0.02] px-4 py-3">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent/80 mb-1">Legacy</p>
            <p className="font-serif text-marble text-lg">45+ Years</p>
          </div>
          <div className="rounded border border-white/10 bg-white/[0.02] px-4 py-3">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent/80 mb-1">Material</p>
            <p className="font-serif text-marble text-lg">Makrana Marble</p>
          </div>
          <div className="rounded border border-white/10 bg-white/[0.02] px-4 py-3">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent/80 mb-1">Delivery</p>
            <p className="font-serif text-marble text-lg">Across India</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="https://wa.me/919664174934"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-accent text-[#0B0B0C] font-sans font-semibold text-sm tracking-[0.2em] uppercase hover:bg-marble transition-colors duration-400"
          >
            WhatsApp Now
          </a>
          <a
            href="tel:+919664174934"
            className="w-full sm:w-auto px-10 py-4 border border-accent/50 text-accent font-sans font-medium text-sm tracking-[0.2em] uppercase hover:bg-accent/10 transition-colors duration-400"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/919664174934?text=I%20am%20interested%20in%20a%20custom%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 text-marble/80 font-sans text-sm tracking-[0.2em] uppercase hover:text-marble transition-colors duration-400"
          >
            Custom Order
          </a>
        </div>
      </motion.div>
    </section>
  );
}
