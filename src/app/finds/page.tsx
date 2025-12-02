import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, Tag } from "lucide-react";
import { PRODUCTS } from "@/lib/products"; // Import the data

export default function FindsPage() {
    return (
        <main className="min-h-screen bg-wino-black text-white">
            <Navbar />
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Viral <span className="text-wino-orange">Finds</span>
                    </h1>
                    <p className="text-gray-400">Real products detected by Wino this week.</p>
                </div>

                {/* The Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {PRODUCTS.map((product) => (
                        <a
                            key={product.id}
                            href={product.affiliateLink}
                            // These attributes ensure the link opens safely in a new tab
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-wino-card border border-white/10 rounded-2xl overflow-hidden hover:border-wino-orange/50 transition-all cursor-pointer block hover:bg-white/[0.02]"
                        >
                            {/* Visual Container */}
                            <div className={`h-48 relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>

                                {/* LOGIC: Show Image OR Gradient */}
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className={`absolute inset-0 bg-gradient-to-br ${product.imageGradient} opacity-80 group-hover:opacity-100`} />
                                )}

                                {/* Discount Badge (Always on top) */}
                                <div className="absolute top-3 left-3 bg-wino-orange/90 text-white text-xs font-bold px-2 py-1 rounded shadow-lg backdrop-blur-md z-10">
                                    {product.discount} OFF
                                </div>
                            </div>

                            <div className="p-6">
                                {/* Tags */}
                                <div className="flex gap-2 mb-3">
                                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300 flex items-center gap-1">
                                        <Tag size={10} /> {product.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-wino-orange transition-colors">
                                    {product.title}
                                </h3>

                                {/* Price Block */}
                                <div className="flex items-center gap-3 mb-3 text-sm">
                                    <span className="text-gray-500 line-through decoration-wino-orange/50">{product.originalPrice}</span>
                                    <span className="text-white font-bold text-lg">{product.temuPrice}</span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm mb-4 border-b border-white/5 pb-4 min-h-[40px] line-clamp-2">
                                    {product.description}
                                </p>

                                {/* CTA */}
                                <div className="text-wino-orange text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    View Deal <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
