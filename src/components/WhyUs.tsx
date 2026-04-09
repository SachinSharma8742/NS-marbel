import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Diamond, Hammer, Ruler, User } from 'lucide-react';

const promises = [
  {
    num: '01',
    title: 'Pure Makrana Marble',
    desc: 'Every murti is carved from the same legendary Makrana marble that graces the Taj Mahal — renowned for its luminous translucence and timeless endurance.',
    icon: Diamond,
    accent: '#C6A15B',
  },
  {
    num: '02',
    title: 'Traditional Hand Carving',
    desc: 'Our master artisans use only hand chisels and traditional techniques passed down through five generations — no CNC machines, no shortcuts.',
    icon: Hammer,
    accent: '#D4B86A',
  },
  {
    num: '03',
    title: 'Custom Dimensions',
    desc: 'From intimate 6-inch home mandir murtis to towering 6-foot temple installations — every piece is sculpted to your exact specifications.',
    icon: Ruler,
    accent: '#E8D5A3',
  },
  {
    num: '04',
    title: 'Direct from Artisans',
    desc: 'No middlemen, no markups. You commission directly from the families who have shaped stone into divinity for over a century.',
    icon: User,
    accent: '#C6A15B',
  },
];

export default function Promise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative w-full py-28 px-6 md:px-12 overflow-hidden">
      {/* Subtle background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(198,161,91,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ─────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#C6A15B] mb-4">
              Our Promise
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,52px)] text-marble leading-[1.1]">
              Crafted with <em className="text-gradient-gold italic">Devotion</em>,
              <br />
              Delivered with <em className="text-gradient-gold italic">Integrity</em>
            </h2>
          </motion.div>

          <motion.p
            className="font-sans font-light text-secondary text-sm max-w-md leading-relaxed lg:text-right"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Four pillars that define every murti we create — from quarry to your sacred space.
          </motion.p>
        </div>

        {/* ── Promise Cards ──────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {promises.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="group relative rounded-2xl p-8 md:p-10 transition-all duration-700 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 * i }}
                whileHover={{
                  borderColor: 'rgba(198,161,91,0.2)',
                  background: 'rgba(198,161,91,0.03)',
                }}
              >
                {/* Large background number */}
                <span
                  className="absolute top-4 right-6 font-serif text-[120px] md:text-[140px] leading-none select-none pointer-events-none transition-all duration-700"
                  style={{ color: 'rgba(198,161,91,0.03)' }}
                >
                  {item.num}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, rgba(198,161,91,0.12), rgba(198,161,91,0.04))`,
                      border: '1px solid rgba(198,161,91,0.15)',
                    }}
                  >
                    <Icon className="w-5 h-5 text-[#C6A15B]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[24px] md:text-[28px] text-marble leading-tight mb-4 group-hover:text-[#E8D5A3] transition-colors duration-500">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans font-light text-secondary text-[14px] leading-relaxed max-w-sm">
                    {item.desc}
                  </p>

                  {/* Bottom accent bar */}
                  <div className="mt-8 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#C6A15B]/40 to-transparent transition-all duration-700 ease-out" />
                </div>

                {/* Hover glow corner effect */}
                <div
                  className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(198,161,91,0.08), transparent 70%)',
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
