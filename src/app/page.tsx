import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { MiddlemanSection } from "@/components/home/MiddlemanSection";
import { WishlistSection } from "@/components/home/WishlistSection";
import { PriceRevealSection } from "@/components/home/PriceRevealSection";
import { FeatureSteps } from "@/components/home/FeatureSteps";
import { BlogSection } from "@/components/home/BlogSection";
import { SEOContent } from "@/components/home/SEOContent";
import { Footer } from "@/components/layout/Footer";
import { Construction } from "lucide-react"; // Icon for maintenance

// --- 🔒 THE KILL SWITCH ---
// Change this to 'false' when you are ready to go live again.
const MAINTENANCE_MODE = true;

export default function Home() {

  // 🚧 MAINTENANCE SCREEN 🚧
  if (MAINTENANCE_MODE) {
    return (
      <main className="min-h-screen bg-wino-black flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-wino-orange/10 rounded-full flex items-center justify-center mb-8 animate-pulse">
          <Construction className="text-wino-orange" size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Wino is <span className="text-wino-orange">Updating.</span>
        </h1>
        <p className="text-gray-400 max-w-lg text-lg mb-8">
          We are pushing the final V1.0 updates to the servers.
          The site will be back online shortly.
        </p>
        <div className="px-4 py-2 border border-white/10 rounded-full text-xs font-mono text-gray-500">
          STATUS: DEPLOYING PATCH
        </div>
      </main>
    );
  }

  // 🌍 REAL APP (Hidden when mode is true)
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
