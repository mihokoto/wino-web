"use client";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

export function PriceRevealSection() {
    return (
        <section className="py-32 px-6 bg-wino-card/30 border-y border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">

                {/* Right: Text Content */}
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wino-orange/10 border border-wino-orange/20 text-wino-orange text-xs font-bold mb-6">
                        <Search size={12} /> VISUAL INTELLIGENCE
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
                        Don't Pay for the Logo. <br />
                        <span className="text-wino-orange">Pay for the Product.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Most viral brands are just white-labeling generic products. Our AI scans the image to find the original factory source on Temu & AliExpress.
                    </p>

                    <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-500">Average Savings</span>
                            <span className="text-green-400 font-bold font-mono">82%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-green-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: "82%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                </div>

                {/* Left: The Scanner Visual */}
                <div className="lg:w-1/2 relative">
                    <div className="relative w-full max-w-md mx-auto aspect-square bg-black rounded-3xl border border-white/10 overflow-hidden shadow-2xl group">

                        {/* --- IMAGE INSERTED HERE --- */}
                        {/* Using a standard img tag for immediate rendering without config */}
                        <img
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
                            alt="Viral Headphones"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20" /> {/* Dimmer */}

                        {/* The Scanning Laser */}
                        <motion.div
                            className="absolute top-0 left-0 w-full h-1 bg-wino-orange shadow-[0_0_25px_#fb7701,0_0_10px_#fb7701]"
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Price Tag Animation */}
                        <div className="absolute bottom-8 left-8 right-8 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/20 flex justify-between items-center z-10">
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Detected Price</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-white">$12.50</span>
                                    <span className="text-sm text-red-400 line-through">$89.00</span>
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-wino-orange flex items-center justify-center text-black">
                                <ArrowRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
