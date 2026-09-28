import { Layout } from '@/components/layout'
import { ShareButton } from '@/components/share-button'
import { BASE_URL } from '@/config'
import { getBlogData, getBlogList } from '@/lib/blog'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
    params: {
        slug: string
    }
}

export const generateMetadata = async ({ params }: BlogPostPageProps): Promise<Metadata> => {
    const blog = await getBlogData(params.slug)

    if (!blog) {
        return notFound()
    }

    const { title, description, image } = blog.metadata
    const preview = image ? (image.startsWith('http') ? image : `${BASE_URL}${image}`) : `${BASE_URL}/images/profile.png`

    return {
        title,
        description,
        alternates: {
            canonical: `/blog/${params.slug}`,
        },
        openGraph: {
            title,
            description,
            type: 'article',
            url: `${BASE_URL}/blog/${params.slug}`,
            images: [preview],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [preview],
        },
    }
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
    const { slug } = params
    const blog = await getBlogData(slug)

    if (!blog) {
        return notFound()
    }

    const { metadata, content } = blog
    const { title, description, tags, date, image } = metadata
    const url = `${BASE_URL}/blog/${slug}`
    const preview = image ? (image.startsWith('http') ? image : `${BASE_URL}${image}`) : undefined

    const articleStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        datePublished: date,
        dateModified: date,
        mainEntityOfPage: url,
        ...(preview ? { image: preview } : {}),
        author: {
            '@type': 'Person',
            name: 'Bhavya Kashyap',
            url: BASE_URL,
        },
        keywords: tags.join(', '),
    }

    return (
        <Layout className="space-y-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
            />

            <article className="mx-auto max-w-3xl py-12 sm:py-16">
                <NextLink href="/blog" className="editorial-link text-sm text-muted-foreground">
                    ← Writing
                </NextLink>

                <header className="border-b border-border pb-10 pt-10">
                    <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
                        <time>{dayjs(date).format('MMMM D, YYYY')}</time>
                        <span aria-hidden="true">·</span>
                        {tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                    <h1 className="font-serif text-4xl font-normal leading-[1.08] tracking-[-0.035em] sm:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">{description}</p>
                    <div className="mt-7">
                        <ShareButton title={title} text={description} url={url} />
                    </div>
                </header>

                {image &&
                    (image.startsWith('http') ? (
                        <img
                            src={image}
                            alt=""
                            className="mt-10 aspect-[16/9] w-full border border-border object-cover"
                        />
                    ) : (
                        <Image
                            src={image}
                            alt=""
                            width={1400}
                            height={788}
                            className="mt-10 aspect-[16/9] w-full border border-border object-cover"
                            priority
                        />
                    ))}

                <div
                    className="prose prose-zinc mt-10 max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight prose-a:text-primary prose-p:leading-8 dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </article>
        </Layout>
    )
}

export default BlogPostPage

export const generateStaticParams = async () => {
    const blogs = await getBlogList()

    return blogs.map((blog) => ({
        slug: blog.slug,
    }))
}
