"use client";
import { motion } from "framer-motion";
import { Share2, Bookmark, Search } from "lucide-react";

export function FeatureSteps() {
    const steps = [
        {
            icon: Share2,
            title: "1. Share from TikTok",
            text: "Don't lose that video. Tap 'Share' -> 'More' -> 'Wino' to capture it instantly.",
        },
        {
            icon: Bookmark,
            title: "2. Your Universal Wishlist",
            text: "We auto-save the thumbnail and details. Build your dream collection in one place.",
        },
        {
            icon: Search,
            title: "3. Reveal Real Prices",
            text: "One tap to find the factory source on Temu or AliExpress for 90% less.",
        },
    ];

    return (
        <section className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                    The <span className="text-wino-orange">Smartest Way</span> to Scroll
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Stop cluttering your TikTok "Likes." Start building your Wino Wishlist.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className="group bg-wino-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-wino-orange/50 hover:bg-white/[0.03] transition-all duration-300"
                    >
                        <div className="w-16 h-16 rounded-full bg-wino-orange/10 flex items-center justify-center text-wino-orange mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(251,119,1,0.1)]">
                            <step.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
