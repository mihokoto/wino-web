"use client";
import { Download, Sparkles, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wino-black">
            {/* Animated gradient blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-wino-orange/20 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-48 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-wino-card/50 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                        <Sparkles className="text-wino-orange" size={16} />
                        <span className="text-sm text-gray-300">Visual Search Intelligence</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-white">
                        Don't Lose That{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-wino-orange to-orange-400">
                            Viral Product
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
                        Scan it. Detect it. Coupon it. <br />
                        <span className="text-wino-text">Your AI-powered shopping assistant for TikTok finds.</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href="/install"
                            className="group flex items-center gap-2 bg-wino-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(251,119,1,0.4)] hover:shadow-[0_0_50px_rgba(251,119,1,0.6)] hover:scale-105"
                        >
                            <Download size={20} />
                            <span>Download App</span>
                        </Link>
                        <Link
                            href="/demo"
                            className="flex items-center gap-2 bg-wino-card border border-white/10 hover:border-wino-orange/50 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 backdrop-blur-sm"
                        >
                            <Zap size={20} />
                            <span>See Demo</span>
                        </Link>
                    </div>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-wino-card/30 border border-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
                            <Shield className="text-green-400" size={16} />
                            <span className="text-gray-300">100% Free</span>
                        </div>
                        <div className="flex items-center gap-2 bg-wino-card/30 border border-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
                            <Zap className="text-yellow-400" size={16} />
                            <span className="text-gray-300">Instant Results</span>
                        </div>
                        <div className="flex items-center gap-2 bg-wino-card/30 border border-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
                            <Sparkles className="text-wino-orange" size={16} />
                            <span className="text-gray-300">AI-Powered</span>
                        </div>
                    </div>
                </motion.div>

                {/* 3D Product Showcase */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mt-20 perspective-1000"
                >
                    <div className="transform-style-3d hover:rotate-y-12 transition-transform duration-500">
                        <div className="relative max-w-4xl mx-auto">
                            {/* Placeholder for phone mockup - you can add actual product image here */}
                            <div className="relative bg-gradient-to-b from-wino-card to-wino-black border border-white/10 rounded-3xl p-8 shadow-2xl">
                                <div className="aspect-[9/16] max-w-sm mx-auto bg-gradient-to-br from-wino-orange/20 to-purple-500/20 rounded-2xl border border-white/5 flex items-center justify-center">
                                    <div className="text-center">
                                        <Sparkles className="mx-auto mb-4 text-wino-orange" size={48} />
                                        <p className="text-gray-400">Product Showcase</p>
                                        <p className="text-xs text-gray-500 mt-2">3D Phone Mockup Coming Soon</p>
                                    </div>
                                </div>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-wino-orange/10 to-transparent rounded-3xl blur-2xl -z-10" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-wino-orange rounded-full" />
                </div>
            </div>
        </section>
    );
}
