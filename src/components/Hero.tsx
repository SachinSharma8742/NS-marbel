import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const shimmerStyle = `
@keyframes goldShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes gentlePulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}
`;

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={ref} id="hero" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      <style>{shimmerStyle}</style>

      {/* Background image — cinematic slow zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Continuous breathing zoom after initial reveal */}
        <motion.img
          src="/images/radha_krishna.png"
          alt="Divine Makrana Marble Murti"
          className="w-full h-full object-cover"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
        />
      </motion.div>

      {/* Animated vignette — fades in after image */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/60 via-transparent to-[#0B0B0C]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/30 via-transparent to-[#0B0B0C]/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      {/* Decorative corner accents — fade in late */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#C6A15B]/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />
      <motion.div
        className="absolute bottom-24 right-8 w-16 h-16 border-b border-r border-[#C6A15B]/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      />

      {/* Content — parallaxes up on scroll */}
      <motion.div className="relative z-10 text-center px-6 max-w-5xl" style={{ opacity, y: contentY }}>

        {/* Small label before heading */}
        <motion.p
          className="font-sans tracking-[0.5em] uppercase text-[10px] text-[#C6A15B]/70 mb-8"
          initial={{ opacity: 0, y: 15, letterSpacing: '0.8em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.5em' }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          Est. Jaipur
        </motion.p>

        {/* Heading — "Where Marble" slides up first */}
        <div className="overflow-hidden mb-2">
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-serif text-[clamp(42px,7vw,100px)] leading-[1.05] text-marble block">
              Where Marble
            </span>
          </motion.div>
        </div>

        {/* "Becomes Divine" slides up second with shimmer */}
        <div className="overflow-hidden mb-8">
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="font-serif text-[clamp(42px,7vw,100px)] leading-[1.05] italic inline-block"
              style={{
                background: 'linear-gradient(90deg, #C6A15B 0%, #E8D5A3 25%, #C6A15B 50%, #E8D5A3 75%, #C6A15B 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'goldShimmer 4s linear infinite',
              }}
            >
              Becomes Divine
            </span>
          </motion.div>
        </div>

        {/* Subtext — fades in */}
        <motion.p
          className="font-sans font-light text-marble/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Handcrafted Makrana Marble Murtis from Jaipur — where devotion meets generational craftsmanship.
        </motion.p>

        {/* Button — slides up with glow */}
        <motion.a
          href="#products"
          className="relative inline-block px-12 py-4 border border-[#C6A15B]/50 font-sans uppercase tracking-[0.25em] text-xs text-[#C6A15B] overflow-hidden group"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="absolute inset-0 bg-[#C6A15B]/0 group-hover:bg-[#C6A15B]/10 transition-all duration-500" />
          <span className="absolute -inset-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl bg-[#C6A15B]/15" />
          <span className="relative">Explore Collection</span>
        </motion.a>
      </motion.div>

      {/* Scroll indicator — breathing line */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-marble/30">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[#C6A15B]/50 to-transparent origin-top"
          animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
