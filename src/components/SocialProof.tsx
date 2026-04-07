import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const posts = [
  { src: '/images/gallery_1.png', caption: 'Makrana marble Radha Krishna murti in progress' },
  { src: '/images/gallery_2.png', caption: 'Hand-finishing details by master artisan' },
  { src: '/images/gallery_3.png', caption: 'Temple installation completed in Jaipur' },
  { src: '/images/gallery_4.png', caption: 'Intricate floral carving close-up' },
  { src: '/images/gallery_5.png', caption: 'Custom Ganesh murti for home mandir' },
  { src: '/images/gallery_6.png', caption: 'Final polishing before delivery' },
];

export default function Trust() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="trust" className="relative w-full py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-[clamp(34px,4vw,56px)] text-marble mb-4">
            Trusted by Devotees<br />
            <em className="text-gradient-gold italic">Across India</em>
          </h2>
          <p className="font-sans font-light text-secondary text-base max-w-xl mx-auto">
            From home temples to large-scale installations, our work is part of sacred spaces across the country.
          </p>
        </motion.div>

        {/* MASONRY: Row 1 = 2fr 1fr, Row 2 = 1fr 2fr */}
        <div className="space-y-2">
          {/* Row 1: 2fr 1fr */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2">
            <motion.div
              className="group relative aspect-[16/10] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <img src={posts[0].src} alt={posts[0].caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#0B0B0C]/0 group-hover:bg-[#0B0B0C]/50 transition-all duration-400 flex items-end p-4">
                <span className="font-sans text-xs text-marble/0 group-hover:text-marble/90 transition-all duration-400">{posts[0].caption}</span>
              </div>
            </motion.div>
            <motion.div
              className="group relative aspect-[10/16] md:aspect-auto overflow-hidden"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <img src={posts[1].src} alt={posts[1].caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#0B0B0C]/0 group-hover:bg-[#0B0B0C]/50 transition-all duration-400 flex items-end p-4">
                <span className="font-sans text-xs text-marble/0 group-hover:text-marble/90 transition-all duration-400">{posts[1].caption}</span>
              </div>
            </motion.div>
          </div>

          {/* Row 2: 1fr 2fr */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2">
            <motion.div
              className="group relative aspect-[10/16] md:aspect-auto overflow-hidden"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              <img src={posts[2].src} alt={posts[2].caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#0B0B0C]/0 group-hover:bg-[#0B0B0C]/50 transition-all duration-400 flex items-end p-4">
                <span className="font-sans text-xs text-marble/0 group-hover:text-marble/90 transition-all duration-400">{posts[2].caption}</span>
              </div>
            </motion.div>
            <motion.div
              className="group relative aspect-[16/10] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <img src={posts[3].src} alt={posts[3].caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#0B0B0C]/0 group-hover:bg-[#0B0B0C]/50 transition-all duration-400 flex items-end p-4">
                <span className="font-sans text-xs text-marble/0 group-hover:text-marble/90 transition-all duration-400">{posts[3].caption}</span>
              </div>
            </motion.div>
          </div>

          {/* Row 3: remaining 2 images equal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {posts.slice(4).map((post, i) => (
              <motion.div
                key={i}
                className="group relative aspect-[16/10] overflow-hidden"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.32 + 0.08 * i }}
              >
                <img src={post.src} alt={post.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#0B0B0C]/0 group-hover:bg-[#0B0B0C]/50 transition-all duration-400 flex items-end p-4">
                  <span className="font-sans text-xs text-marble/0 group-hover:text-marble/90 transition-all duration-400">{post.caption}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
