import { Layout } from '@/components/layout'
import { getBlogList } from '@/lib/blog'
import Image from 'next/image'
import NextLink from 'next/link'

const currentProjects = [
    {
        name: 'Settlement',
        description:
            'I’m exploring what reliable execution should look like when AI agents can move money and take real-world actions.',
    },
    {
        name: 'DealMemo',
        description:
            'I’m building a lightweight diligence tool for angels to turn deal materials into a structured memo quickly.',
    },
    {
        name: 'Embermere',
        description:
            'I’m making a cosy game about ghosts, small towns, secrets, and people who know more than they say.',
    },
]

const HomePage = async () => {
    const posts = (await getBlogList()).slice(0, 3)

    return (
        <Layout className="space-y-0">
            <section className="grid items-end gap-12 py-14 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:py-20">
                <div className="pb-2">
                    <h1 className="font-serif text-[4.25rem] font-normal leading-[0.82] tracking-[-0.065em] sm:text-[6rem] lg:text-[8rem]">
                        <span className="block">Bhavya</span>
                        <span className="block">Kashyap.</span>
                    </h1>

                    <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                        <a className="editorial-link" href="https://www.linkedin.com/in/bhavya-kashyap/" target="_blank" rel="noopener noreferrer">
                            LinkedIn ↗
                        </a>
                        <a className="editorial-link" href="https://github.com/Bhavya" target="_blank" rel="noopener noreferrer">
                            GitHub ↗
                        </a>
                        <a className="editorial-link" href="https://x.com/bhavbhavbhav" target="_blank" rel="noopener noreferrer">
                            X ↗
                        </a>
                        <a className="editorial-link" href="https://www.tiktok.com/@madebybhavya" target="_blank" rel="noopener noreferrer">
                            TikTok ↗
                        </a>
                    </div>
                </div>

                <div className="relative max-w-sm md:max-w-none">
                    <div className="absolute inset-0 translate-x-4 translate-y-4 border border-border" aria-hidden="true" />
                    <Image
                        src="/images/profile.png"
                        alt="Bhavya Kashyap"
                        width={700}
                        height={875}
                        className="relative aspect-[4/5] w-full object-cover"
                        priority
                    />
                </div>
            </section>

            <section className="editorial-section">
                <div className="editorial-label">About</div>
                <div className="max-w-3xl space-y-4 text-[15px] leading-7 text-muted-foreground sm:text-base">
                    <p>
                        I’ve spent most of my career in technology, working across software engineering, product, and
                        engineering leadership, with a focus on infrastructure, platforms, developer systems, and
                        fintech. I’ve worked at Chime, Cocoon, Amazon, Microsoft, and Facebook.
                    </p>
                    <p>
                        I care a lot about my family, my friends, and the communities I’m part of. I’m into art, music,
                        books, history, philosophy, astronomy, games, and whatever else happens to pull me in. I like
                        learning for its own sake, making things, and being around people who are curious about the
                        world too.
                    </p>
                </div>
            </section>

            <section className="editorial-section">
                <div className="editorial-label">Right now</div>
                <div>
                    {currentProjects.map((project, index) => (
                        <div
                            key={project.name}
                            className="grid grid-cols-[2rem_1fr] gap-3 border-t border-border/70 py-5 first:border-t-0 first:pt-0"
                        >
                            <span className="font-serif text-sm text-primary">0{index + 1}</span>
                            <div>
                                <h2 className="text-base font-semibold tracking-tight">{project.name}</h2>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="editorial-section">
                <div className="editorial-label">Writing</div>
                <div>
                    {posts.length > 0 ? (
                        posts.map(({ slug, metadata }) => (
                            <NextLink
                                key={slug}
                                href={`/blog/${slug}`}
                                className="group grid gap-2 border-t border-border/70 py-5 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-8"
                            >
                                <div>
                                    <h2 className="font-serif text-xl leading-snug tracking-tight group-hover:underline group-hover:underline-offset-4">
                                        {metadata.title}
                                    </h2>
                                    <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
                                        {metadata.description}
                                    </p>
                                </div>
                                <span className="text-xs text-muted-foreground">Read ↗</span>
                            </NextLink>
                        ))
                    ) : (
                        <p className="text-sm text-muted-foreground">I’ll put new writing here as I publish it.</p>
                    )}
                    <NextLink href="/blog" className="editorial-link mt-5 inline-block text-sm text-muted-foreground">
                        All writing ↗
                    </NextLink>
                </div>
            </section>

            <section className="editorial-section">
                <div className="editorial-label">Elsewhere</div>
                <div>
                    <h2 className="mb-5 font-serif text-3xl font-normal tracking-tight">One more thing.</h2>
                    <a
                        href="https://www.mithuna.capital/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-link font-serif text-2xl"
                    >
                        Mithuna Capital ↗
                    </a>
                    <p className="mt-3 text-sm text-muted-foreground">
                        I do my angel investing and advising through Mithuna Capital.
                    </p>
                </div>
            </section>
        </Layout>
    )
}

export default HomePage
