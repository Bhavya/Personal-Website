import { BASE_URL } from '@/config'
import { getBlogList } from '@/lib/blog'

export const dynamic = 'force-static'

const escapeXml = (value: string) => value.replace(/[<>&"']/g, (character) => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
}[character]!))

const cdata = (value: string) => `<![CDATA[${value.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`

// Feed readers and importers cannot resolve site-relative image or link URLs.
const absoluteUrls = (html: string, postUrl: string) => html.replace(
    /\b(href|src)="([^"]*)"/g,
    (_, attribute: string, value: string) => {
        const decoded = value.replace(/&amp;/g, '&')
        return `${attribute}="${escapeXml(new URL(decoded, postUrl).href)}"`
    },
)

export async function GET() {
    const posts = (await getBlogList()).filter((post) =>
        !post.metadata.externalUrl && String(post.content).trim() &&
        new Date(post.metadata.date).getTime() >= Date.UTC(2026, 6, 3) &&
        Number.isFinite(new Date(post.metadata.date).getTime()) &&
        new Date(post.metadata.date).getTime() <= Date.now(),
    )
    const items = posts.map((post) => {
        const url = new URL(`/blog/${post.slug}`, BASE_URL).href
        return `<item>
<title>${escapeXml(post.metadata.title)}</title>
<link>${escapeXml(url)}</link>
<guid isPermaLink="true">${escapeXml(url)}</guid>
<pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
<dc:creator>Bhavya Kashyap</dc:creator>
<description>${escapeXml(post.metadata.description)}</description>
<content:encoded>${cdata(absoluteUrls(String(post.content), url))}</content:encoded>
${post.metadata.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('\n')}
</item>`
    }).join('\n')

    return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Bhavya Kashyap | Blog</title>
<link>${escapeXml(new URL('/blog', BASE_URL).href)}</link>
<description>Writing by Bhavya Kashyap about technology, systems, AI, startups, and other things worth thinking about.</description>
<language>en-us</language>
<atom:link href="${escapeXml(new URL('/blog/rss.xml', BASE_URL).href)}" rel="self" type="application/rss+xml" />
${posts.length ? `<lastBuildDate>${new Date(posts[0].metadata.date).toUTCString()}</lastBuildDate>` : ''}
${items}
</channel>
</rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
