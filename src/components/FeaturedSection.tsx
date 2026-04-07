import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const products = [
  {
    title: 'Radha Krishna Murti',
    image: '/images/gallery_1.png',
    alt: 'White marble Radha Krishna sculpture with detailed drapery and ornament work'
  },
  {
    title: 'Lord Ganesha Murti',
    image: '/images/gallery_2.png',
    alt: 'Makrana marble Ganesha murti with hand-finished sacred details'
  },
  {
    title: 'Vishnu Lakshmi Murti',
    image: '/images/gallery_3.png',
    alt: 'Vishnu Lakshmi marble sculpture crafted for temple and home sanctum spaces'
  },
  {
    title: 'Shiv Parivar Murti',
    image: '/images/gallery_4.png',
    alt: 'Shiv Parivar composition in premium white marble with fine carving depth'
  },
  {
    title: 'Hanuman Ji Murti',
    image: '/images/gallery_5.png',
    alt: 'Hanuman ji marble murti showing expressive facial carving and smooth polish'
  },
  {
    title: 'Durga Mata Murti',
    image: '/images/gallery_6.png',
    alt: 'Durga Mata sculpture in Makrana marble with intricate handcrafted features'
  },
];

export default function FeaturedSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="collection" className="relative w-full py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-[clamp(34px,4vw,56px)] text-marble mb-3">
            Divine <em className="text-gradient-gold italic">Forms</em>
          </h2>
          <p className="font-sans font-light text-secondary text-sm tracking-widest uppercase">
            Hand-carved Makrana marble · Custom sizes available
          </p>
        </motion.div>

        {/* ROW 1: grid-cols-2 gap-10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.slice(0, 2).map((item, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i }}
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-5">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl text-marble group-hover:text-accent transition-colors duration-300">{item.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* ROW 2: grid-cols-3 gap-10 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.slice(2).map((item, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + 0.1 * i }}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-lg text-marble group-hover:text-accent transition-colors duration-300">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
