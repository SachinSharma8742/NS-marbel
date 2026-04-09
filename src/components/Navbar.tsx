import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/Hide logic
      if (currentScrollY > 100) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl transition-all duration-500 ${
            isScrolled ? 'py-3' : 'py-5'
          }`}
        >
          <div className="relative group overflow-hidden rounded-2xl">
            {/* Background Glass */}
            <div className="absolute inset-0 bg-[#0B0B0C]/40 backdrop-blur-xl border border-white/5" />
            
            {/* Inner Content */}
            <div className="relative z-10 px-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-serif text-xl text-marble tracking-tight">SKMM</span>
                <div className="h-4 w-[1px] bg-[#C6A15B]/30" />
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C6A15B]/80 hidden md:block">Est. Jaipur</span>
              </div>

              <div className="flex items-center gap-8 font-sans text-[11px] tracking-[0.2em] uppercase text-marble/60">
                <a href="#hero" className="hover:text-[#C6A15B] transition-colors">Home</a>
                <a href="#collection" className="hover:text-[#C6A15B] transition-colors">Collection</a>
                <a href="#trust" className="hover:text-[#C6A15B] transition-colors">Legacy</a>
                <a 
                  href="https://wa.me/919460149982" 
                  target="_blank" 
                  className="px-6 py-2 border border-[#C6A15B]/30 rounded-full hover:bg-[#C6A15B]/10 hover:border-[#C6A15B] transition-all text-[#C6A15B]"
                >
                  Inquire
                </a>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
