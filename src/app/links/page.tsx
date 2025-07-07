import { Layout } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { contact, projects } from '@/data'
import { BASE_URL } from '@/config'
import type { Metadata } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'

export const metadata: Metadata = {
    title: 'Links',
    description: 'All my important links in one place - social media, projects, and more.',
    openGraph: {
        title: 'Links - Bhavya Kashyap',
        description: 'All my important links in one place - social media, projects, and more.',
        url: `${BASE_URL}/links`,
        siteName: 'Bhavya Kashyap',
        images: [
            {
                url: `${BASE_URL}/images/open-graph.webp`,
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Links - Bhavya Kashyap',
        description: 'All my important links in one place - social media, projects, and more.',
        creator: '@bhavbhavbhav',
        images: [`${BASE_URL}/images/open-graph.webp`],
    },
}

const LinksPage = () => {
    return (
        <Layout>
            <div className="min-h-screen py-8 px-4">
                <div className="max-w-md mx-auto">
                    {/* Profile Section */}
                    <div className="text-center mb-8">
                        <div className="relative w-24 h-24 mx-auto mb-4">
                            <Image
                                src="/images/profile.png"
                                alt="Bhavya Kashyap"
                                fill
                                className="rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
                            />
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Engineering Leader • Angel Investor • Creator
                        </p>
                    </div>

                    {/* Featured Section */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-foreground mb-4 text-center">Featured</h2>
                        <div className="space-y-4">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full h-14 text-lg justify-start gap-3 hover:scale-105 transition-transform"
                                asChild
                            >
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSeoMomg-4pnfYlhoSK9BncGxzZ6bLXCHjrmtUZ__jyP--GaqQ/viewform?usp=dialog"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="icon-[tabler--award-filled] text-2xl" />
                                    BFFF Pitch Competition
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-foreground mb-4 text-center">Links</h2>
                        {/* Social Media Links */}
                        {contact.map((item) => (
                            <Button
                                key={item.label}
                                variant="outline"
                                size="lg"
                                className="w-full h-14 text-lg justify-start gap-3 hover:scale-105 transition-transform"
                                asChild
                            >
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={`${item.icon} text-2xl`} />
                                    {item.label}
                                </a>
                            </Button>
                        ))}

                        {/* Website Link */}
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full h-14 text-lg justify-start gap-3 hover:scale-105 transition-transform"
                            asChild
                        >
                            <NextLink href="/">
                                <span className="icon-[tabler--world] text-2xl" />
                                Website
                            </NextLink>
                        </Button>


                        {/* Oat Productivity */}
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full h-14 text-lg justify-start gap-3 hover:scale-105 transition-transform"
                            asChild
                        >
                            <a
                                href="https://oatproductivity.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon-[tabler--book] text-2xl" />
                                Oat Productivity
                            </a>
                        </Button>

                        {/* Featured Projects */}
                        {projects.filter(p => p.isFeatured).map((project) => (
                            <Button
                                key={project.title}
                                variant="outline"
                                size="lg"
                                className="w-full h-14 text-lg justify-start gap-3 hover:scale-105 transition-transform"
                                asChild
                            >
                                <a
                                    href={project.status.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="icon-[tabler--code] text-2xl" />
                                    {project.title}
                                </a>
                            </Button>
                        ))}

                        {/* Contact Page */}
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full h-14 text-lg justify-start gap-3 hover:scale-105 transition-transform"
                            asChild
                        >
                            <NextLink href="/contact">
                                <span className="icon-[tabler--mail] text-2xl" />
                                Contact Me
                            </NextLink>
                        </Button>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default LinksPage