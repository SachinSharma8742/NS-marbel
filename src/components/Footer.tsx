export default function Footer() {
  return (
    <footer className="relative w-full border-t border-[#C6A15B]/10 bg-[#0B0B0C] overflow-hidden">
      {/* Subtle gold glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,161,91,0.08),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 relative z-10">
        {/* Main content grid */}
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-16 md:gap-20 mb-16">
          {/* Left: Brand & Tagline */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-[clamp(28px,3.5vw,42px)] text-marble leading-[1.1] mb-3">
                Shree Krishna<br />Moorti Museum
              </h3>
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C6A15B]/70">
                Manufacturers, Wholesalers &amp; Exporters
              </p>
            </div>
            <p className="font-sans font-light text-secondary/80 text-sm leading-relaxed max-w-sm">
              Artisanal marble moorties crafted in Jaipur by master sculptors. Devotional authenticity meets timeless craftsmanship.
            </p>
            <div className="pt-4">
              <a
                href="mailto:mohitagnihotri432@gmail.com"
                className="font-sans text-sm text-[#C6A15B] hover:text-marble transition-colors duration-300"
              >
                mohitagnihotri432@gmail.com
              </a>
            </div>
          </div>

          {/* Center: Mukesh */}
          <div className="space-y-4">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C6A15B]">Mukesh Agnihotri</p>
            <div className="space-y-3">
              <a href="tel:+919460149982" className="block font-sans text-secondary/90 hover:text-marble text-sm transition-colors">
                +91 94601 49982
              </a>
              <a href="tel:+918209172990" className="block font-sans text-secondary/90 hover:text-marble text-sm transition-colors">
                +91 82091 72990
              </a>
            </div>
            <a
              href="https://wa.me/919460149982"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-3 py-2 border border-[#C6A15B]/30 hover:border-[#C6A15B]/70 text-[#C6A15B] hover:text-marble text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>

          {/* Right: Mohit */}
          <div className="space-y-4">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C6A15B]">Mohit Agnihotri</p>
            <div className="space-y-3">
              <a href="tel:+919784883775" className="block font-sans text-secondary/90 hover:text-marble text-sm transition-colors">
                +91 97848 83775
              </a>
              <a href="tel:+917014431153" className="block font-sans text-secondary/90 hover:text-marble text-sm transition-colors">
                +91 70144 31153
              </a>
            </div>
            <a
              href="https://wa.me/919784883775"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-3 py-2 border border-[#C6A15B]/30 hover:border-[#C6A15B]/70 text-[#C6A15B] hover:text-marble text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Address Bar */}
        <div className="mb-12 pb-12 border-b border-[#C6A15B]/10">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#C6A15B] mb-4">Located in Jaipur</p>
          <p className="font-sans text-secondary/80 text-sm leading-relaxed">
            3237, Bhindo Ka Rasta 1st Crossing, Chandpole Bazar, Jaipur, Rajasthan
          </p>
        </div>

        {/* Bottom: Nav & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <nav className="flex gap-8 font-sans text-[11px] tracking-[0.2em] uppercase text-secondary/60">
            <a href="#hero" className="hover:text-[#C6A15B] transition-colors">Home</a>
            <a href="#legacy" className="hover:text-[#C6A15B] transition-colors">Heritage</a>
            <a href="#collection" className="hover:text-[#C6A15B] transition-colors">Collection</a>
            <a href="#faq" className="hover:text-[#C6A15B] transition-colors">FAQ</a>
          </nav>
          <p className="font-sans text-[10px] tracking-widest text-secondary/50">
            &copy; {new Date().getFullYear()} Shree Krishna Moorti Museum
          </p>
        </div>
      </div>
    </footer>
  );
}
