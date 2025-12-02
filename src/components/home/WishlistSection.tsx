"use client";
import { motion } from "framer-motion";
import { Bookmark, Heart, Plus } from "lucide-react";

export function WishlistSection() {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left: Text Content */}
                <div className="lg:w-1/2 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
                        <Bookmark size={12} /> THE ULTIMATE ORGANIZER
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
                        The Wishlist <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            TikTok Forgot to Build.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Stop using your "Likes" as a shopping cart. Wino auto-extracts the product photo and details, creating a clean, organized gallery of everything you want to buy.
                    </p>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Plus size={14} /></div>
                            <span>One-tap save from TikTok Share menu</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400"><Heart size={14} /></div>
                            <span>Build collections (Decor, Tech, Fits)</span>
                        </li>
                    </ul>
                </div>

                {/* Right: Animation */}
                <div className="lg:w-1/2 relative h-[400px] w-full flex items-center justify-center">
                    {/* Central Hub */}
                    <div className="absolute z-20 w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl">
                        <Bookmark className="text-white" size={40} />
                    </div>

                    {/* Floating Cards Animation */}
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute w-24 h-32 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md"
                            animate={{
                                y: [0, -20, 0],
                                x: [0, i % 2 === 0 ? 10 : -10, 0],
                                scale: [1, 1.05, 1],
                                rotate: [0, i % 2 === 0 ? 5 : -5, 0],
                            }}
                            transition={{
                                duration: 4,
                                delay: i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{
                                top: `${20 + i * 15}%`,
                                left: `${10 + i * 25}%`,
                                zIndex: 10 - i,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
