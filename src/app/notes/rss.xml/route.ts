import { BASE_URL } from '@/config'
import notes from '@/data/notes.json'
import { renderNotesRss } from '@/lib/notes'

export const dynamic = 'force-static'

export function GET() {
    return new Response(renderNotesRss(notes, BASE_URL), {
        headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
    })
}
