"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";

const ACTIVITY = [
    { city: "London", item: "Veggie Chopper", saved: "$22" },
    { city: "New York", item: "Cloud Slides", saved: "$15" },
    { city: "Toronto", item: "Sunset Lamp", saved: "$18" },
    { city: "Berlin", item: "Mini Printer", saved: "$35" },
    { city: "Sydney", item: "Cleaning Gel", saved: "$8" },
    { city: "Texas", item: "Galaxy Projector", saved: "$40" },
];

export function LiveToast() {
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ACTIVITY.length);
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 4000);
        }, 8000); // Loops every 8 seconds
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="flex items-center gap-4 bg-wino-card/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl w-[280px]"
                    >
                        <div className="bg-wino-orange/20 p-2 rounded-full text-wino-orange">
                            <ShoppingBag size={18} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">
                                Someone in <span className="text-white font-medium">{ACTIVITY[index].city}</span>
                            </p>
                            <p className="text-sm text-white font-semibold">
                                Saved <span className="text-wino-orange">{ACTIVITY[index].saved}</span> on {ACTIVITY[index].item}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
