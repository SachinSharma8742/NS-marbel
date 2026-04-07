import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Diamond, Hammer, User, Sparkles } from 'lucide-react';

const steps = [
  { title: 'Stone Selection', desc: 'Carefully sourced Makrana marble blocks chosen for purity and strength', icon: Diamond },
  { title: 'Rough Carving', desc: 'Initial shaping using hammer and chisel', icon: Hammer },
  { title: 'Fine Detailing', desc: 'Intricate handwork for expressions and ornaments', icon: User },
  { title: 'Polishing', desc: 'Smooth radiant finish suitable for worship', icon: Sparkles },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section ref={ref} id="process" className="relative w-full py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <motion.h2
          className="font-serif text-[clamp(34px,4vw,56px)] text-marble text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          From Stone to <em className="text-gradient-gold italic">Sacred Form</em>
        </motion.h2>

        {/* HORIZONTAL FLEX TIMELINE — NOT GRID */}
        <div className="relative pt-20">
          {/* Thin gold line across center */}
          <div className="hidden md:block absolute top-[calc(50%-20px)] left-0 right-0 h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-[#C6A15B]/40 to-transparent"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  className="relative flex flex-col items-center text-center md:w-1/4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                >
                  {/* Icon above line */}
                  <div className="relative z-10 mb-6">
                    <Icon className="w-5 h-5 text-[#C6A15B]" strokeWidth={1.5} />
                  </div>

                  {/* Dot on the line */}
                  <div className="hidden md:block w-2 h-2 rounded-full bg-[#C6A15B]/60 mb-6" />

                  {/* Title below */}
                  <h3 className="font-serif text-xl text-marble mb-3">{step.title}</h3>
                  <p className="font-sans font-light text-secondary text-sm leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
