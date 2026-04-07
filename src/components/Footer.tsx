export default function Footer() {
  return (
    <footer className="relative w-full pt-24 pb-12 px-6 md:px-12 border-t border-white/10 bg-[#09090A]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(198,161,91,0.08),transparent_45%)]" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-14 mb-16 relative z-10">

          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.34em] text-accent mb-4">NS Marble Art Museum</p>
            <h3 className="font-serif text-[clamp(28px,3.2vw,42px)] text-marble leading-[1.15] mb-4">
              Crafted for temples,
              <br />
              homes, and sacred spaces.
            </h3>
            <p className="font-sans font-light text-secondary text-sm leading-relaxed max-w-sm">
              Hand-carved Makrana marble sculptures created by master artisans in Jaipur with temple-grade finishing.
            </p>
          </div>

          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent mb-5">Pages</p>
            <nav className="grid gap-3 font-sans text-sm text-secondary">
              <a href="#hero" className="hover:text-accent transition-colors">Home</a>
              <a href="#legacy" className="hover:text-accent transition-colors">Heritage</a>
              <a href="#collection" className="hover:text-accent transition-colors">Collection</a>
              <a href="#trust" className="hover:text-accent transition-colors">Gallery</a>
              <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </nav>
          </div>

          <div className="md:text-right">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent mb-5">Contact</p>
            <div className="font-sans font-light text-secondary text-sm space-y-3">
              <p>Jaipur, Rajasthan</p>
              <a href="tel:+919664174934" className="block hover:text-accent transition-colors">+91 96641 74934</a>
              <a href="https://wa.me/919664174934" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">WhatsApp</a>
              <a href="https://www.instagram.com/ns_marble_art_museum" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">Instagram</a>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-7" />

        <p className="font-sans text-xs tracking-[0.08em] text-secondary/50 text-center">
          &copy; {new Date().getFullYear()} NS Marble Art Museum. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
