import { BlogData } from '@/lib/blog'
import dayjs from 'dayjs'
import NextLink from 'next/link'

export interface BlogSectionProps {
    blogs: BlogData[]
    tag?: string
}

export const Blog = ({ blogs, tag }: BlogSectionProps) => {
    return (
        <section className="py-14 sm:py-20">
            <div className="mb-12 border-b border-border pb-10">
                <p className="editorial-label mb-4">{tag ? `Tagged: ${tag}` : 'Writing'}</p>
                <h1 className="font-serif text-5xl font-normal tracking-[-0.04em] sm:text-7xl">
                    {tag || 'Things I’ve been thinking about.'}
                </h1>
                {!tag && (
                    <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
                        This page also pulls in some older writing from{' '}
                        <a
                            href="https://www.bhavyakashyap.me/articles"
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-4 hover:text-foreground"
                        >
                            my old site
                        </a>
                        ,{' '}
                        <a
                            href="https://medium.com/@bhavyakashyap"
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-4 hover:text-foreground"
                        >
                            Medium
                        </a>
                        , and an old Tumblr that I think is lost to the internet.
                    </p>
                )}
            </div>

            <div>
                {blogs.map(({ slug, metadata }) => (
                    <NextLink
                        key={slug}
                        href={metadata.externalUrl || `/blog/${slug}`}
                        target={metadata.externalUrl ? '_blank' : undefined}
                        rel={metadata.externalUrl ? 'noreferrer' : undefined}
                        className="group grid gap-3 border-b border-border py-7 first:border-t sm:grid-cols-[1fr_auto] sm:gap-10"
                    >
                        <div>
                            <h2 className="font-serif text-2xl leading-snug tracking-tight sm:text-3xl group-hover:underline group-hover:underline-offset-4">
                                {metadata.title}
                            </h2>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                                {metadata.description}
                            </p>
                            {metadata.originalSource && (
                                <p className="mt-2 text-xs italic text-muted-foreground">
                                    Originally posted on {metadata.originalSource}
                                </p>
                            )}
                            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                                {metadata.tags.map((postTag) => (
                                    <span key={postTag}>{postTag}</span>
                                ))}
                            </div>
                        </div>
                        <time className="text-xs text-muted-foreground">{dayjs(metadata.date).format('MMM D, YYYY')}</time>
                    </NextLink>
                ))}
            </div>
        </section>
    )
}
