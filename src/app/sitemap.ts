import { BASE_URL } from '@/config'
import { getBlogList } from '@/lib/blog'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getBlogList()

    return [
        {
            url: BASE_URL,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/blog`,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/links`,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        ...posts.map((post) => ({
            url: `${BASE_URL}/blog/${post.slug}`,
            lastModified: new Date(post.metadata.date),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
    ]
}
