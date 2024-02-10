import { ReactNode } from 'react'

import type { Metadata } from 'next'
import type { Viewport } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const title = 'BadEnd'
const description =
    "👋 Hello! I'm BadEnd, a passionate Full Stack Developer with expertise in efficient web solutions. Explore my portfolio and contact me on GitHub."
const url = 'https://badend.is-a.dev/'
const image = 'https://badend.is-a.dev/images/open-graph.webp'

export const metadata: Metadata = {
    title: {
        template: `${title} - %s`,
        default: `${title} - Personal Website`,
    },
    description,
    authors: [
        {
            name: title,
            url,
        },
    ],
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
        other: {
            rel: 'apple-chrome-512x512',
            url: '/android-chrome-512x512.png',
        },
    },
    metadataBase: new URL(url),
    openGraph: {
        title: {
            template: `${title} - %s`,
            default: `${title} - Personal Website`,
        },
        description,
        url,
        siteName: title,
        images: [
            {
                url: image, // or an array of images
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: {
            template: `${title} - %s`,
            default: `${title} - Personal Website`,
        },
        description,
        creator: '@BadEnd777',
        images: [image], // or an array of images
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
    themeColor: '#2563EB',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

const Root = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="keywords"
                    content="BadEnd, Full Stack Developer, Web Developer, Web Solutions, Portfolio, GitHub"
                />

                {/* lazy loading images */}
                <script src="https://afarkas.github.io/lazysizes/lazysizes.min.js" async></script>
            </head>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}

export default Root
