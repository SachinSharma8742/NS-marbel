import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'How long does a commissioned sculpture take?',
    a: 'Most commissions are completed in 3 to 8 weeks depending on size, detail level, and finishing requirements.'
  },
  {
    q: 'Do you create fully custom deity sculptures?',
    a: 'Yes. We create custom murtis based on your preferred form, dimensions, posture, and ornamental detailing.'
  },
  {
    q: 'Why is Makrana marble preferred for sacred work?',
    a: 'Makrana marble is known for its purity, durability, and luminous surface quality, making it ideal for long-lasting sacred sculptures.'
  },
  {
    q: 'Do you deliver and install across India?',
    a: 'Yes. We coordinate secure delivery nationwide, and installation guidance can be arranged for larger temple pieces.'
  },
  {
    q: 'Can we review progress before completion?',
    a: 'Yes. We share curated progress photos and videos during carving so you can review important milestones.'
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="faq" className="relative w-full py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.25fr] gap-14 lg:gap-20 items-start">
          <motion.div
            className="lg:sticky lg:top-24"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-sans text-[10px] tracking-[0.36em] uppercase text-accent mb-5">
              FAQ
            </p>
            <h3 className="font-serif text-[clamp(32px,4vw,52px)] text-marble leading-[1.1] mb-5">
              Questions Before
              <br />
              <em className="text-gradient-gold italic">Commissioning</em>
            </h3>
            <p className="font-sans font-light text-secondary text-sm leading-relaxed max-w-md">
              Transparent answers on timeline, customization, material quality, and delivery so your commission feels confident from day one.
            </p>
          </motion.div>

          <div className="rounded-[2px] border border-white/10 bg-[#111112] px-6 py-4 md:px-8 md:py-5">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                className="border-b border-white/10 last:border-b-0"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 * i, duration: 0.45 }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="font-serif text-[22px] leading-tight text-marble group-hover:text-accent transition-colors duration-300">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center text-accent text-sm transition-all duration-300 ${open === i ? 'rotate-45 bg-accent/10 border-accent/70' : ''}`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-2 font-sans font-light text-secondary text-[15px] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
