"use client";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export function MiddlemanSection() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-wino-black to-wino-card">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        The <span className="text-wino-orange">Middleman Equation</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Why does a $5 item cost $50 on Instagram? You are paying for their ads, their warehouse, and their logo. Stop it.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* THE SCAM SIDE */}
                    <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">THE OLD WAY</div>
                        <h3 className="text-2xl font-bold text-white mb-6">The "Boutique"</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-gray-400 text-sm">
                                <span>Product Cost</span>
                                <span>$4.50</span>
                            </div>
                            <div className="flex justify-between text-red-400 text-sm">
                                <span>Fancy Box</span>
                                <span>+ $5.00</span>
                            </div>
                            <div className="flex justify-between text-red-400 text-sm">
                                <span>Influencer Ads</span>
                                <span>+ $15.00</span>
                            </div>
                            <div className="flex justify-between text-red-400 text-sm">
                                <span>Markup Profit</span>
                                <span>+ $20.00</span>
                            </div>
                            <div className="h-px bg-white/10 my-2" />
                            <div className="flex justify-between text-white text-xl font-bold">
                                <span>You Pay:</span>
                                <span className="text-red-500">$44.50</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-red-400 text-sm">
                            <X size={16} /> <span>Wasting money on branding</span>
                        </div>
                    </div>

                    {/* THE WINO SIDE */}
                    <div className="p-8 rounded-3xl border border-green-500/20 bg-green-500/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-bl-xl">THE WINO WAY</div>
                        <h3 className="text-2xl font-bold text-white mb-6">Factory Direct</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-gray-400 text-sm">
                                <span>Product Cost</span>
                                <span>$4.50</span>
                            </div>
                            <div className="flex justify-between text-green-400 text-sm">
                                <span>Fancy Box</span>
                                <span>$0.00</span>
                            </div>
                            <div className="flex justify-between text-green-400 text-sm">
                                <span>Influencer Ads</span>
                                <span>$0.00</span>
                            </div>
                            <div className="flex justify-between text-green-400 text-sm">
                                <span>Markup</span>
                                <span>$0.00</span>
                            </div>
                            <div className="h-px bg-white/10 my-2" />
                            <div className="flex justify-between text-white text-xl font-bold">
                                <span>You Pay:</span>
                                <span className="text-green-500">$4.50</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                            <Check size={16} /> <span>Same product. Real price.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
