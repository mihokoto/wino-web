"use client";
import { motion } from "framer-motion";
import { Download, Scan, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useWaitlist } from "@/context/WaitlistContext";

export function HeroSection() {
    const { openWaitlist } = useWaitlist();
    return (
        <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 pt-20 overflow-hidden">

            {/* Background Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-wino-orange/20 rounded-full blur-[120px] animate-blob mix-blend-screen pointer-events-none" />

            {/* Left: Content */}
            <div className="lg:w-1/2 z-10 text-center lg:text-left mb-20 lg:mb-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono text-gray-300">SYSTEM: ONLINE v1.0</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            Stop Paying The
                        </span>
                        <span className="text-white relative inline-block animate-glitch">
                            "Viral Tax."
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        That $45 lamp is just a $4 item in a fancy box. <strong className="text-white">Bypass the middleman.</strong> Share any TikTok to Wino to unlock the direct factory price instantly.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                        <button
                            onClick={openWaitlist}
                            className="group relative px-8 py-4 bg-wino-orange rounded-full font-bold text-white overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                <Download size={20} /> Join Early Access
                            </span>
                        </button>
                        <Link
                            href="/finds"
                            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                            Browse Finds <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* NEW: Social Proof Counter */}
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border border-black bg-gradient-to-br from-gray-700 to-gray-900" />
                            ))}
                        </div>
                        <p className="text-sm text-gray-500">
                            <span className="text-white font-bold">14,203</span> downloads this week.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Right: 3D Phone Mockup (CSS Only) */}
            <div className="lg:w-1/2 relative z-10 perspective-1000">
                <motion.div
                    initial={{ opacity: 0, rotateY: 15 }}
                    animate={{ opacity: 1, rotateY: -15 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="transform-style-3d w-[300px] mx-auto"
                >
                    <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[45px] border-[8px] border-gray-800 shadow-[0_0_50px_rgba(251,119,1,0.2)] overflow-hidden transform-style-3d">
                        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center">
                            <div className="absolute w-full h-[2px] bg-wino-orange shadow-[0_0_15px_#fb7701] animate-scan z-20" />

                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 border-2 border-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center relative">
                                    <div className="absolute inset-0 border-2 border-wino-orange rounded-lg animate-ping opacity-20" />
                                    <Scan className="text-white" size={32} />
                                </div>
                                <p className="text-wino-orange font-mono text-sm animate-pulse">DETECTING...</p>
                            </div>

                            {/* Grid Pattern */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
