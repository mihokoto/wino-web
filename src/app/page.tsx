import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { FeatureSteps } from "@/components/home/FeatureSteps";
import { MiddlemanSection } from "@/components/home/MiddlemanSection";
import { WishlistSection } from "@/components/home/WishlistSection";
import { PriceRevealSection } from "@/components/home/PriceRevealSection";
import { BlogSection } from "@/components/home/BlogSection";
import { SEOContent } from "@/components/home/SEOContent";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-wino-black selection:bg-wino-orange">
      <Navbar />
      <HeroSection />
      <MiddlemanSection />
      <WishlistSection />
      <PriceRevealSection />
      <FeatureSteps />
      <BlogSection />
      <SEOContent />
      <Footer />
    </main>
  );
}
