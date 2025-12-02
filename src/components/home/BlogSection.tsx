import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { ArrowRight } from "lucide-react";

export function BlogSection() {
    // Get the 3 most recent blog posts
    const posts = getAllPosts().slice(0, 3);

    return (
        <section className="py-24 px-6 bg-wino-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-wino-orange/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Latest from the <span className="text-wino-orange">Wino Magazine</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Product trends, shopping hacks, and the latest finds from around the web
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-wino-card border border-white/10 rounded-2xl overflow-hidden hover:border-wino-orange/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,119,1,0.3)] hover:scale-[1.02]"
                        >
                            {/* Image or Placeholder */}
                            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                                {post.frontmatter.image ? (
                                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                                        {/* Using standard img tag for local files in public folder to avoid Next.js config issues with external domains if any, 
                                            but since these are local, next/image is better. However, let's use a simple img for now or next/image with fill. 
                                            Actually, let's use next/image with fill. */}
                                        <img
                                            src={post.frontmatter.image}
                                            alt={post.frontmatter.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-wino-orange/10 group-hover:bg-wino-orange/20 transition-colors duration-300" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white/5 animate-pulse" />
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Category */}
                                <span className="inline-block text-xs font-bold text-wino-orange uppercase tracking-widest mb-3 bg-wino-orange/10 px-3 py-1 rounded-full border border-wino-orange/20">
                                    {post.frontmatter.category || "Blog"}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-wino-orange transition-colors">
                                    {post.frontmatter.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {post.frontmatter.description || "Read more to discover..."}
                                </p>

                                {/* Date */}
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <span>{post.frontmatter.date}</span>
                                    <ArrowRight size={16} className="text-wino-orange group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 bg-wino-orange/10 hover:bg-wino-orange text-wino-orange hover:text-white border border-wino-orange px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,119,1,0.5)]"
                    >
                        View All Articles <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
