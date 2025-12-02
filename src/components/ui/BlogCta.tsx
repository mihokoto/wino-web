"use client";
import { useWaitlist } from "@/context/WaitlistContext";
import { Download } from "lucide-react";

export function BlogCta() {
    const { openWaitlist } = useWaitlist();
    return (
        <div className="not-prose my-12 p-8 bg-white/5 border border-wino-orange/50 rounded-2xl text-center backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-2">Want to save this item?</h3>
            <p className="text-gray-300 mb-8 text-base">Wino is launching soon. Get on the list.</p>
            <button
                onClick={openWaitlist}
                className="inline-flex items-center gap-3 bg-wino-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_25px_rgba(251,119,1,0.6)] hover:shadow-[0_0_40px_rgba(251,119,1,0.8)] hover:scale-105 transition-all duration-300"
            >
                <Download size={22} /> Notify Me
            </button>
        </div>
    );
}
