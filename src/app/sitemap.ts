import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://winofinds.com'; // Change this to your real domain later

    // Get all blog posts to generate dynamic links
    const posts = getAllPosts();
    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.frontmatter.date,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Static routes
    const routes = [
        '',
        '/install',
        '/finds',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1.0,
    }));

    return [...routes, ...blogUrls];
}
