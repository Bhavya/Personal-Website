# Publishing approved notes

The separate short-post RSS feed is at
`https://www.bhavyakashyap.com/notes/rss.xml`. It is generated during the site's
normal static build from `src/data/notes.json`. Blog articles remain separate.
The feed starts empty. Never add sample drafts or unapproved posts to the data.

## Approval workflow

1. Draft posts in the conversation with a verified source URL where possible.
2. Wait for Bhavya to explicitly approve a specific post for publication. A
   general style preference such as "first or last" is not publication approval.
3. Read the latest `src/data/notes.json` from the default branch of
   `Bhavya/Personal-Website` before updating it. Preserve all existing entries.
4. Append only the approved text and source URL. Do not rewrite the approved text
   while publishing. If a source link was not part of the reviewed draft, present
   the final text and link before publishing it.
5. Set a unique stable lowercase `id` and an ISO 8601 `publishedAt` timestamp with
   an explicit timezone. Check that the approved post is not already present to
   prevent duplicate publication. Keep existing IDs and dates unchanged.
6. Run the production build, commit the data update to the default branch and
   verify that Vercel deployed it and the live feed contains the new item. Report
   a failed or pending deployment accurately. Do not post to X as part of this
   workflow.

Each array entry has this shape (documentation example only):

```json
{
    "id": "2026-10-15-example-topic",
    "text": "The exact approved post text",
    "publishedAt": "2026-10-15T09:00:00-07:00",
    "sourceUrl": "https://example.com/original-source"
}
```

`sourceUrl` is optional when there is no relevant source. It must be an HTTP(S)
URL when present. The feed's `description` contains the complete approved text
and source URL, separated by a blank line. A URL already present in `text` is not
appended again. RSS consumers should use `description` for the complete post and
`guid` to avoid duplicates. Items are sorted newest first and their stable GUIDs
do not change across builds. The publication date is the approval/publication
time, not the date of the source article.
