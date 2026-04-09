import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function Heritage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} id="heritage" className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
      {/* Full-width parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="images/artisan_hands.png"
          alt="Master artisan hand-carving Makrana marble with fine tools"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Heavy overlay for canvas continuity */}
      <div className="absolute inset-0 bg-[#0B0B0C]/60" />

      {/* Content — LEFT aligned (not center) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="max-w-lg">
          <motion.h2
            className="font-serif text-[clamp(34px,4vw,56px)] text-marble leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Generations of<br />
            <em className="text-gradient-gold italic">Sacred Craft</em>
          </motion.h2>

          <motion.div
            className="space-y-5 font-sans font-light text-secondary text-base leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <p>
              For decades, our artisans have dedicated their lives to transforming raw stone into divine presence.
            </p>
            <p>
              What begins as a solid block of <strong className="text-accent font-normal">Makrana marble</strong> is slowly revealed through careful carving, guided by both tradition and spiritual understanding. Every curve, every expression, every detail is intentional.
            </p>
            <p>
              This is not just sculpture — it is devotion brought to life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
