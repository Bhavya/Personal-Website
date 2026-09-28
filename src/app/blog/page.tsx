import { Layout } from '@/components/layout'
import { Blog } from '@/components/sections/blog'
import { BASE_URL } from '@/config'
import { getBlogList } from '@/lib/blog'
import type { Metadata } from 'next'

const title = 'Writing'
const description = 'Writing by Bhavya Kashyap about technology, systems, AI, startups, and other things worth thinking about.'

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: '/blog',
    },
    openGraph: {
        title: `${title} | Bhavya Kashyap`,
        description,
        url: `${BASE_URL}/blog`,
        type: 'website',
    },
}

const BlogPage = async () => {
    const blogs = await getBlogList()

    return (
        <Layout className="space-y-0">
            <Blog blogs={blogs} />
        </Layout>
    )
}

export default BlogPage
