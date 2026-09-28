import { Layout } from '@/components/layout'
import { contact } from '@/data'
import { BASE_URL } from '@/config'
import type { Metadata } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'

export const metadata: Metadata = {
    title: 'Links',
    description: 'Find Bhavya Kashyap around the web.',
    alternates: {
        canonical: '/links',
    },
    openGraph: {
        title: 'Links | Bhavya Kashyap',
        description: 'Find Bhavya Kashyap around the web.',
        url: `${BASE_URL}/links`,
        type: 'website',
    },
}

const links = [
    { label: 'Website', href: '/', internal: true },
    { label: 'Writing', href: '/blog', internal: true },
    { label: 'Settlement', href: 'https://www.withsettlement.com/' },
    { label: 'DealMemo', href: 'https://trydealmemo.so/' },
    { label: 'Mithuna Capital', href: 'https://www.mithuna.capital/' },
]

const linkClassName =
    'group flex min-h-14 w-full items-center justify-between border border-border bg-card/35 px-5 py-4 text-left transition-colors hover:border-primary/50 hover:bg-card/70'

const LinksPage = () => {
    return (
        <Layout className="space-y-0">
            <section className="mx-auto flex w-full max-w-xl flex-col items-center py-14 text-center sm:py-20">
                <Image
                    src="/images/profile.png"
                    alt="Bhavya Kashyap"
                    width={112}
                    height={112}
                    className="size-28 rounded-full border border-border object-cover"
                    priority
                />

                <h1 className="mt-5 font-serif text-3xl font-normal tracking-[-0.03em]">Bhavya Kashyap</h1>

                <div className="mt-5 flex items-center justify-center gap-4">
                    {contact.map((item) => (
                        <a
                            key={item.label}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                            className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                        >
                            <span className={`${item.icon} text-xl`} aria-hidden="true" />
                        </a>
                    ))}
                </div>

                <div className="mt-10 w-full space-y-3">
                    {links.map((item) =>
                        item.internal ? (
                            <NextLink key={item.label} href={item.href} className={linkClassName}>
                                <span className="font-medium">{item.label}</span>
                                <span className="text-sm text-muted-foreground">→</span>
                            </NextLink>
                        ) : (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClassName}
                            >
                                <span className="font-medium">{item.label}</span>
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
