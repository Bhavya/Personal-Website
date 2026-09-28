import { guardEnv } from 'guard-env'

const env = guardEnv(process.env, {
    NEXT_PUBLIC_BASE_URL: String,
})

const LOCAL_BASE_URL = env.NEXT_PUBLIC_BASE_URL as string
export const BASE_URL =
    process.env.NODE_ENV === 'production' ? 'https://www.bhavyakashyap.com' : LOCAL_BASE_URL

export const OPEN_GRAPH_IMAGE = `${BASE_URL}/images/open-graph.webp`
