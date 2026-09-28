import { ThemeProvider } from '@/components/theme-provider'
import { BASE_URL } from '@/config'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const title = 'Bhavya Kashyap'
const description =
    'Personal site of Bhavya Kashyap. Writing and projects spanning technology, infrastructure, AI, fintech, games, and other interests.'

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: title,
        template: `%s | ${title}`,
    },
    description,
    authors: [{ name: title, url: BASE_URL }],
    creator: title,
    keywords: [
        'Bhavya Kashyap',
        'technology',
        'engineering leadership',
        'infrastructure',
        'developer platforms',
        'fintech',
        'AI',
        'startups',
    ],
    alternates: {
        canonical: '/',
    },
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
        ],
        shortcut: '/favicon.ico',
        apple: '/favicon.svg',
    },
    openGraph: {
        title,
        description,
        url: BASE_URL,
        siteName: title,
        images: [
            {
                url: '/images/profile.png',
                width: 700,
                height: 875,
                alt: 'Bhavya Kashyap',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        creator: '@bhavbhavbhav',
        images: ['/images/profile.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
    themeColor: '#0b0a0d',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
}

const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bhavya Kashyap',
    url: BASE_URL,
    image: `${BASE_URL}/images/profile.png`,
    sameAs: [
        'https://www.linkedin.com/in/bhavya-kashyap/',
        'https://github.com/Bhavya',
        'https://x.com/bhavbhavbhav',
        'https://www.tiktok.com/@madebybhavya',
        'https://www.mithuna.capital/',
    ],
    knowsAbout: [
        'Software engineering',
        'Engineering leadership',
        'Infrastructure',
        'Developer platforms',
        'Fintech',
        'AI systems',
        'Startups',
    ],
}

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
                />
                <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    )
}

export default RootLayout
