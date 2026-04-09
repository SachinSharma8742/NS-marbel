import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Diamond, Hammer, Ruler } from 'lucide-react';

export default function Legacy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section ref={ref} id="legacy" className="relative w-full py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Large image */}
          <motion.div
            className="relative aspect-[4/5] w-full overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <img
              src="images/gallery_1.png"
              alt="Makrana marble deity sculpture under workshop lighting"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* RIGHT: Text block */}
          <div className="space-y-10">
            <motion.h2
              className="font-serif text-[clamp(34px,4vw,56px)] text-marble leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Legacy of<br /><em className="text-gradient-gold italic">Makrana</em>
            </motion.h2>

            <motion.div
              className="space-y-5 font-sans font-light text-secondary text-base leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                From the same sacred <strong className="text-accent font-normal">Makrana marble</strong> that shaped the Taj Mahal, our sculptures carry forward a lineage of devotion and craftsmanship rooted in Rajasthan.
              </p>
              <p>
                Each piece is carved by hand using traditional chiseling techniques passed down through generations of master artisans. No machines — only patience, precision, and reverence.
              </p>
              <p>
                We do not mass-produce. Every murti is a one-of-a-kind expression of sacred art.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: Diamond, text: 'Authentic Makrana Marble (Temple-grade)' },
                { icon: Hammer, text: '100% Hand-Carved by Skilled Artisans' },
                { icon: Ruler, text: 'Custom Temple & Home Installations' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <item.icon className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={1.5} />
                  <span className="font-sans text-sm text-marble/90 tracking-wide">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
