import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Download, AlertTriangle, Settings, CheckCircle } from "lucide-react";

export default function InstallPage() {
    return (
        <main className="min-h-screen bg-wino-black text-white">
            <Navbar />
            <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">
                    Install Wino <span className="text-wino-orange">v1.0</span>
                </h1>

                <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="p-6 bg-wino-card border border-white/10 rounded-2xl flex gap-6 items-start hover:border-blue-500/50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Download APK</h3>
                            <p className="text-gray-400 text-sm mb-4">Get the official signed APK file.</p>
                            <button className="bg-white text-black px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 flex items-center gap-2">
                                <Download size={16} /> Download Now
                            </button>
                        </div>
                    </div>

                    {/* Step 2 (The Friction Point) */}
                    <div className="p-6 bg-wino-card border border-white/10 rounded-2xl flex gap-6 items-start hover:border-yellow-500/50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">"Unknown Source" Warning</h3>
                            <p className="text-gray-400 text-sm">Android protects you from unknown apps. Since we are new, you need to allow it manually.</p>
                            <div className="mt-3 p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg text-yellow-200 text-xs flex items-center gap-2">
                                <AlertTriangle size={14} />
                                Tap "Settings" → Toggle "Allow from this source"
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="p-6 bg-wino-card border border-white/10 rounded-2xl flex gap-6 items-start hover:border-green-500/50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold shrink-0">3</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Launch & Scan</h3>
                            <p className="text-gray-400 text-sm">Open Wino, grant camera permission, and start saving money.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
