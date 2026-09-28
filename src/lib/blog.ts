import { access, readdir, readFile } from 'fs/promises'
import path from 'path'
import dayjs from 'dayjs'
import matter from 'gray-matter'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { CompileResults, unified } from 'unified'

const blogPath = path.join(process.cwd(), 'src', 'blog')

export const BLOG_TAGS = [
    'AI',
    'Engineering',
    'Infrastructure',
    'Engineering Leadership',
    'Product',
    'Careers',
    'Investing',
    'Startups',
    'Markets',
    'Books',
    'Personal',
    'Culture',
    'Design',
    'Security',
] as const

export type BlogTag = (typeof BLOG_TAGS)[number]

export type BlogFrontmatter = {
    title: string
    description: string
    tags: BlogTag[]
    image?: string
    date: string
    externalUrl?: string
    originalSource?: string
}

export type BlogData = {
    slug: string
    metadata: BlogFrontmatter
    content: CompileResults
}

export const getBlogData = async (slug: string): Promise<BlogData | null> => {
    const filePath = path.resolve(path.join(blogPath, `${slug}.mdx`))

    try {
        await access(filePath)
    } catch (err) {
        return null
    }

    const { content, data } = matter(await readFile(filePath, 'utf8'))
    const frontmatter = data as BlogFrontmatter

    const invalidTags = (frontmatter.tags || []).filter(
        (tag) => !BLOG_TAGS.includes(tag as BlogTag),
    )

    if (invalidTags.length > 0) {
        throw new Error(
            `Invalid blog tag(s) in ${slug}: ${invalidTags.join(', ')}. Use a tag from BLOG_TAGS.`,
        )
    }

    if (!frontmatter.date) {
        return null
    }

    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeCodeTitles)
        .use(rehypePrismPlus)
        .use(rehypeStringify)
        .process(content)

    return {
        slug,
        metadata: frontmatter,
        content: file.toString(),
    }
}

export const getBlogList = async (tag?: string): Promise<BlogData[]> => {
    const files = await readdir(blogPath)

    const posts = await Promise.all(
        files.map(async (file) => {
            const slug = file.replace(/\.mdx$/, '')
            const blogData = await getBlogData(slug)
            if (!tag || (blogData && blogData.metadata.tags.includes(tag as BlogTag))) {
                return blogData
            }
            return null
        }),
    )

    // Remove null entries
    const filteredPosts = posts.filter(Boolean) as BlogData[]

    // Sort by date (ascending)
    const sorted = filteredPosts.sort((a, b) => {
        const dateA = dayjs(a?.metadata?.date || '')
        const dateB = dayjs(b?.metadata?.date || '')
        return dateA.isValid() && dateB.isValid() ? dateB.diff(dateA) : 0
    })

    return sorted
}

export const getBlogTags = async () => {
    const posts = await getBlogList()
    const tagsSet = new Set<BlogTag>()

    posts.forEach((post) => {
        post.metadata.tags.forEach((tag) => tagsSet.add(tag))
    })

    return BLOG_TAGS.filter((tag) => tagsSet.has(tag)).map((tag) => ({ tag }))
}
