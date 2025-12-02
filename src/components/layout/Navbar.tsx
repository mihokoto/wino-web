"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWaitlist } from "@/context/WaitlistContext";

export function Navbar() {
    const { openWaitlist } = useWaitlist();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-wino-black/80 backdrop-blur-md border-white/10 py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white group">
                    Wino<span className="text-wino-orange group-hover:animate-pulse">.</span>
                </Link>

                <div className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/install" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                            Install Guide
                        </Link>
                        <Link href="/finds" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                            Viral Finds
                        </Link>
                    </div>
                    <button
                        onClick={openWaitlist}
                        className="flex items-center gap-2 bg-wino-orange hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(251,119,1,0.3)] hover:shadow-[0_0_30px_rgba(251,119,1,0.5)]"
                    >
                        <Download size={16} />
                        <span>Join Waitlist</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
