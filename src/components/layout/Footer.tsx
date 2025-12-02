import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12 px-6 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white tracking-tighter">Wino.</h2>
                    <p className="text-gray-500 text-sm mt-1">Visual Search Intelligence.</p>
                </div>
                <div className="flex gap-8 text-sm text-gray-400">
                    <Link href="/install" className="hover:text-wino-orange transition-colors">Install Guide</Link>
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center">
                <p className="text-[10px] text-gray-700 uppercase tracking-widest">
                    Not affiliated with TikTok or PDD Holdings.
                </p>
            </div>
        </footer>
    );
}
