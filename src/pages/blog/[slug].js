import {
    Flex,
    Container,
    VStack,
    HStack,
    Avatar,
    Text,
    Box,
    ButtonGroup,
    Badge
} from '@chakra-ui/react'
import { MDXComponents } from '@/Components/MDXComponents'
import { ContactItem } from '@/Components/ContactItem'
import { MDXRemote } from 'next-mdx-remote'
import { Layout } from '@/Layout'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { contact } from '@/data'

const BlogPost = ({ post }) => {
    return (
        <Layout>
            <Container maxW="container.md">
                <VStack spacing="4" align="flex-start" w="100%">
                    <Flex w="100%" justify="space-between" align="center">
                        <HStack spacing="2" align="flex-start">
                            <Avatar
                                size="md"
                                name="BadEnd"
                                src="https://avatars.githubusercontent.com/u/126331618"
                            />
                            <VStack spacing="0" align="flex-start">
                                <Text fontWeight="bold">BadEnd</Text>
                                <Text color="mocha.blue">{post.meta.publishedAt}</Text>
                            </VStack>
                        </HStack>
                        <ButtonGroup variant="ghost" spacing="4">
                            {contact.map((item, index) => (
                                <ContactItem key={index} icon={item.icon} href={item.href} />
                            ))}
                        </ButtonGroup>
                    </Flex>
                    <HStack spacing="2" align="flex-start">
                        {post.meta.tags.map((tag, index) => (
                            <Badge key={index} colorScheme="blue">
                                {tag}
                            </Badge>
                        ))}
                    </HStack>
                    <Box w="100%">
                        <MDXRemote {...post.mdxSource} components={MDXComponents} />
                    </Box>
                </VStack>
            </Container>
        </Layout>
    )
}

export default BlogPost

export const getStaticPaths = async () => {
    const posts = await getAllPosts()

    return {
        paths: posts.map(post => ({
            params: {
                slug: post.slug
            }
        })),
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const post = await getPostBySlug(params.slug)

    return {
        props: {
            post
        }
    }
}