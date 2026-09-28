import { Layout } from '@/components/layout'
import { contact } from '@/data'
import { BASE_URL } from '@/config'
import type { Metadata } from 'next'
import NextLink from 'next/link'

export const metadata: Metadata = {
    title: 'Links',
    description: 'Links to Bhavya Kashyap around the web, plus current projects and writing.',
    alternates: {
        canonical: '/links',
    },
    openGraph: {
        title: 'Links | Bhavya Kashyap',
        description: 'Links to Bhavya Kashyap around the web, plus current projects and writing.',
        url: `${BASE_URL}/links`,
        type: 'website',
    },
}

const siteLinks = [
    { label: 'Home', href: '/', internal: true },
    { label: 'Blog', href: '/blog', internal: true },
    { label: 'Mithuna Capital', href: 'https://www.mithuna.capital/' },
    { label: 'Settlement', href: 'https://www.withsettlement.com/' },
]

const LinksPage = () => {
    return (
        <Layout className="space-y-0">
            <section className="py-14 sm:py-20">
                <h1 className="font-serif text-5xl font-normal tracking-[-0.04em] sm:text-7xl">Links.</h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                    A few places to find me and the things I’m working on.
                </p>
            </section>

            <section className="editorial-section">
                <div className="editorial-label">Around the web</div>
                <div>
                    {contact.map((item) => (
                        <a
                            key={item.label}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between border-t border-border/70 py-5 first:border-t-0 first:pt-0"
                        >
                            <span className="font-serif text-2xl group-hover:underline group-hover:underline-offset-4">
                                {item.label}
                            </span>
                            <span className="text-sm text-muted-foreground">↗</span>
                        </a>
                    ))}
                </div>
            </section>

            <section className="editorial-section">
                <div className="editorial-label">Here too</div>
                <div>
                    {siteLinks.map((item) =>
                        item.internal ? (
                            <NextLink
                                key={item.label}
                                href={item.href}
                                className="group flex items-center justify-between border-t border-border/70 py-5 first:border-t-0 first:pt-0"
                            >
                                <span className="font-serif text-2xl group-hover:underline group-hover:underline-offset-4">
                                    {item.label}
                                </span>
                                <span className="text-sm text-muted-foreground">→</span>
                            </NextLink>
                        ) : (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between border-t border-border/70 py-5 first:border-t-0 first:pt-0"
                            >
                                <span className="font-serif text-2xl group-hover:underline group-hover:underline-offset-4">
                                    {item.label}
                                </span>
                                <span className="text-sm text-muted-foreground">↗</span>
                            </a>
                        ),
                    )}
                </div>
            </section>
        </Layout>
    )
}

export default LinksPage
