export type Note = {
    id: string
    text: string
    publishedAt: string
    sourceUrl?: string
}

const escapeXml = (value: string) =>
    value.replace(/[&<>"']/g, (character) => {
        const entities: Record<string, string> = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;',
        }
        return entities[character]
    })

export const renderNotesRss = (notes: Note[], baseUrl: string): string => {
    const ids = new Set<string>()

    for (const note of notes) {
        if (!/^[a-z0-9][a-z0-9-]*$/.test(note.id) || ids.has(note.id)) {
            throw new Error(`Invalid or duplicate note id: ${note.id}`)
        }
        ids.add(note.id)

        if (!note.text.trim() || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffe\uffff]/.test(note.text)) {
            throw new Error(`Invalid note text: ${note.id}`)
        }
        if (!/(Z|[+-]\d{2}:\d{2})$/.test(note.publishedAt) || !Number.isFinite(Date.parse(note.publishedAt))) {
            throw new Error(`Invalid publication timestamp: ${note.id}`)
        }
        if (note.sourceUrl && !['https:', 'http:'].includes(new URL(note.sourceUrl).protocol)) {
            throw new Error(`Invalid source URL: ${note.id}`)
        }
    }

    const sorted = [...notes].sort(
        (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
    )
    const items = sorted.map((note) => {
        const text = note.sourceUrl && !note.text.includes(note.sourceUrl)
            ? `${note.text}\n\n${note.sourceUrl}`
            : note.text

        return `    <item>
      <title>${escapeXml(note.text)}</title>
      <description>${escapeXml(text)}</description>
      <link>${escapeXml(note.sourceUrl || baseUrl)}</link>
      <guid isPermaLink="false">urn:bhavyakashyap:note:${note.id}</guid>
      <pubDate>${new Date(note.publishedAt).toUTCString()}</pubDate>
    </item>`
    }).join('\n')

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bhavya Kashyap | Notes</title>
    <link>${escapeXml(baseUrl)}</link>
    <description>Short thoughts and links from Bhavya Kashyap.</description>
    <language>en-us</language>
    <atom:link href="${escapeXml(`${baseUrl}/notes/rss.xml`)}" rel="self" type="application/rss+xml" />
${sorted.length ? `    <lastBuildDate>${new Date(sorted[0].publishedAt).toUTCString()}</lastBuildDate>\n` : ''}${items}
  </channel>
</rss>
`
}
