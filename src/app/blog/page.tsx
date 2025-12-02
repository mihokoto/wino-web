import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-wino-black text-white">
            <Navbar />
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Wino <span className="text-wino-orange">Blog</span>
                    </h1>
                    <p className="text-gray-400">Latest updates, viral trends, and saving hacks.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-wino-card border border-white/10 rounded-2xl overflow-hidden hover:border-wino-orange/50 transition-all"
                        >
                            <div className="h-48 bg-gray-800 relative">
                                {post.frontmatter.image ? (
                                    <Image
                                        src={post.frontmatter.image}
                                        alt={post.frontmatter.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
                                )}
                            </div>
                            <div className="p-6">
                                <div className="text-xs text-wino-orange mb-2">{post.frontmatter.date}</div>
                                <h2 className="text-xl font-bold mb-2 group-hover:text-wino-orange transition-colors">
                                    {post.frontmatter.title}
                                </h2>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {post.frontmatter.description}
                                </p>
                                <div className="flex items-center gap-1 text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                                    Read Article <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
