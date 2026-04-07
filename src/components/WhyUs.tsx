import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Diamond, Hammer, Ruler, User } from 'lucide-react';

const promises = [
  { num: '01', title: 'Pure Makrana Marble', desc: 'Sourced from Rajasthan', icon: Diamond },
  { num: '02', title: 'Traditional Hand Carving', desc: 'No machines used', icon: Hammer },
  { num: '03', title: 'Custom Dimensions', desc: 'Tailored for mandirs', icon: Ruler },
  { num: '04', title: 'Direct from Artisans', desc: 'No middlemen involved', icon: User },
];

export default function Promise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative w-full py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section label */}
        <motion.p
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#C6A15B] mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Promise
        </motion.p>

        {/* 4-column editorial layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0">
          {promises.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="group relative py-10 xl:px-8 first:pl-0 last:pr-0 border-l border-white/[0.06] first:border-l-0 hover:border-[#C6A15B]/20 transition-colors duration-500"
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 * i }}
              >
                {/* Large faded number */}
                <span className="font-serif text-[72px] leading-none text-white/[0.03] group-hover:text-[#C6A15B]/[0.08] transition-colors duration-700 absolute top-2 right-4 select-none pointer-events-none">
                  {item.num}
                </span>

                {/* Icon */}
                <div className="mb-6 relative z-10">
                  <Icon className="w-5 h-5 text-[#C6A15B]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-[22px] text-marble leading-tight mb-3 relative z-10 group-hover:text-[#C6A15B] transition-colors duration-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans font-light text-secondary text-sm relative z-10">
                  {item.desc}
                </p>

                {/* Bottom accent line — reveals on hover */}
                <div className="absolute bottom-0 left-8 right-8 xl:left-8 xl:right-8 h-px bg-[#C6A15B]/0 group-hover:bg-[#C6A15B]/25 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
