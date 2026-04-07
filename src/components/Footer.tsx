export default function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-12 px-6 md:px-12 border-t border-white/5 bg-[#09090A]">
      {/* Subtle organic glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(198,161,91,0.05),transparent_45%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] gap-x-8 gap-y-16 mb-20">

          {/* Brand Section — Full width on small mobile, spans 2 cols on medium-small */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-6">NS Marble Art Museum</p>
            <h3 className="font-serif text-[clamp(28px,3.5vw,48px)] text-marble leading-[1.1] mb-6">
              Crafted for temples,<br className="hidden md:block" /> and sacred spaces.
            </h3>
            <p className="font-sans font-light text-secondary text-sm leading-relaxed max-w-sm opacity-80">
              Hand-carved Makrana marble sculptures created by master artisans in Jaipur with temple-grade finishing.
            </p>
          </div>

          {/* Pages Section */}
          <div className="col-span-1">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent mb-8">Navigation</p>
            <nav className="flex flex-col gap-4 font-sans text-sm text-secondary">
              <a href="#hero" className="hover:text-accent transition-colors duration-300">Home</a>
              <a href="#legacy" className="hover:text-accent transition-colors duration-300">Heritage</a>
              <a href="#collection" className="hover:text-accent transition-colors duration-300">Collection</a>
              <a href="#trust" className="hover:text-accent transition-colors duration-300">Gallery</a>
              <a href="#faq" className="hover:text-accent transition-colors duration-300">FAQ</a>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 md:text-right">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent mb-8">Contact</p>
            <div className="font-sans font-light text-secondary text-sm space-y-4">
              <p className="md:ml-auto">Jaipur, Rajasthan</p>
              <a href="tel:+919664174934" className="block hover:text-accent transition-colors duration-300">+91 96641 74934</a>
              <div className="flex flex-col md:items-end gap-3 pt-2">
                <a href="https://wa.me/919664174934" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-white/10 hover:border-accent/30 hover:text-accent transition-all duration-300 text-[11px] uppercase tracking-widest bg-white/[0.02]">
                  WhatsApp
                </a>
                <a href="https://www.instagram.com/ns_marble_art_museum" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-white/10 hover:border-accent/30 hover:text-accent transition-all duration-300 text-[11px] uppercase tracking-widest bg-white/[0.02]">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[10px] tracking-widest text-secondary/40">
            &copy; {new Date().getFullYear()} NS MARBLE ART MUSEUM
          </p>
          <div className="flex gap-8 font-sans text-[10px] tracking-widest text-secondary/40 uppercase">
            <span className="hover:text-secondary cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-secondary cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
