import Hero from './components/Hero';
import Legacy from './components/Heritage';
import Heritage from './components/StorySection';
import FeaturedSection from './components/FeaturedSection';
import Promise from './components/WhyUs';
import Trust from './components/SocialProof';
import FAQ from './components/FAQ';
import PreCTA from './components/PreCTA';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SmoothScroll from './components/ui/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-[#0B0B0C] text-[#E8E6E3] relative">
        <div className="grain-overlay" />
        <Hero />
        <Legacy />
        <Heritage />
        <FeaturedSection />
        <Promise />
        <Trust />
        <FAQ />
        <PreCTA />
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
