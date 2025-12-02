"use client";
import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Check } from "lucide-react";

type WaitlistContextType = {
    openWaitlist: () => void;
};

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const openWaitlist = () => setIsOpen(true);
    const closeWaitlist = () => {
        setIsOpen(false);
        setTimeout(() => setSubmitted(false), 500); // Reset after close
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would normally send the email to a database (Google Sheets/ConvertKit)
        console.log("Captured Email:", email);
        setSubmitted(true);
    };

    return (
        <WaitlistContext.Provider value={{ openWaitlist }}>
            {children}

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeWaitlist}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative z-10 w-full max-w-md bg-wino-card border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden pointer-events-auto"
                        >
                            {/* Close Button */}
                            <button onClick={closeWaitlist} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
                                <X size={20} />
                            </button>

                            {!submitted ? (
                                <>
                                    <div className="text-center mb-8">
                                        <div className="w-16 h-16 bg-wino-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-wino-orange">
                                            <Mail size={32} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-2">Join the Wino Beta</h2>
                                        <p className="text-gray-400">
                                            We are putting the final touches on v1.0. Enter your email to get the APK link the second we launch.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <input
                                                type="email"
                                                required
                                                placeholder="name@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-wino-orange focus:ring-2 focus:ring-wino-orange/20 transition-all"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-wino-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-wino-orange/20"
                                        >
                                            Notify Me When Ready
                                        </button>
                                        <p className="text-center text-xs text-gray-600">No spam. Only the download link.</p>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                                        <Check size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                                    <p className="text-gray-400">Keep an eye on your inbox. We launch very soon.</p>
                                    <button
                                        onClick={closeWaitlist}
                                        className="mt-8 text-sm text-gray-500 hover:text-white transition-colors"
                                    >
                                        Close Window
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </WaitlistContext.Provider>
    );
}

export const useWaitlist = () => {
    const context = useContext(WaitlistContext);
    if (!context) throw new Error("useWaitlist must be used within a WaitlistProvider");
    return context;
};
