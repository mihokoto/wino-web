import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Download, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // For the Hero Image

import { BlogCta } from "@/components/ui/BlogCta";

// Custom Components for MDX
const components = {
    CtaButton: BlogCta,
};

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    return (
        <main className="min-h-screen bg-wino-black text-white">
            <Navbar />

            {/* Progress Bar (Optional Visual Flair) */}
            <div className="fixed top-0 left-0 h-1 bg-wino-orange w-full z-50 opacity-20" />

            <article className="pt-32 pb-24 px-6">

                {/* 1. CENTERED HEADER SECTION */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-wino-orange mb-8 transition-colors text-sm font-medium">
                        <ArrowLeft size={16} className="mr-2" /> Back to Magazine
                    </Link>

                    {/* Category Pill */}
                    <div className="flex justify-center mb-6">
                        <span className="inline-block bg-wino-card border border-white/10 text-wino-orange text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                            {post.frontmatter.category || "Blog"}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight text-white drop-shadow-xl">
                        {post.frontmatter.title}
                    </h1>

                    {/* Author & Date Row */}
                    <div className="flex items-center justify-center gap-6 text-sm text-gray-400 border-t border-white/5 pt-6 mx-auto max-w-lg">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <User size={14} className="text-wino-orange" />
                            </div>
                            <span className="font-medium text-gray-300">{post.frontmatter.author || "Wino Team"}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-600" />
                        <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>{post.frontmatter.date}</span>
                        </div>
                    </div>
                </div>

                {/* 2. HERO IMAGE (The "Magazine" Look) */}
                {/* 2. HERO IMAGE (The "Magazine" Look) */}
                <div className="max-w-4xl mx-auto mb-16 relative">
                    <div className="aspect-video w-full bg-wino-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
                        {post.frontmatter.image ? (
                            <Image
                                src={post.frontmatter.image}
                                alt={post.frontmatter.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        ) : (
                            <>
                                {/* Fallback pattern if no image is provided */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50" />
                                <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                                    <div className="w-20 h-20 rounded-full bg-white/5 animate-pulse" />
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* 3. CONTENT BODY */}
                <div className="max-w-2xl mx-auto">
                    <div className="prose prose-invert prose-lg max-w-none 
            prose-p:text-gray-300 prose-p:leading-8 prose-p:mb-6 prose-p:font-light
            prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-wino-orange prose-h2:pl-6
            prose-h3:text-xl prose-h3:mt-10 prose-h3:text-gray-100
            prose-strong:text-white prose-strong:font-bold
            prose-a:text-wino-orange prose-a:no-underline hover:prose-a:text-orange-400
            prose-li:text-gray-300 prose-li:marker:text-wino-orange
            prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-img:shadow-2xl prose-img:my-12"
                    >
                        <MDXRemote source={post.content} components={components} />
                    </div>
                </div>

            </article>
            <Footer />
        </main>
    );
}
