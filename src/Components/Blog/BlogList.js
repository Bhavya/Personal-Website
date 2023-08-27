// Importing necessary components and libraries
import { VStack, Grid, GridItem } from '@chakra-ui/react'
import { HeadingUnderline } from '@/Components/HeadingUnderline'
import { BlogCard } from '@/Components/Blog/BlogCard'

// Defining the BlogList component which takes 'title' and 'posts' props
export const BlogList = ({ title, posts }) => {
    return (
        // Outer container for the blog list
        <VStack spacing="8" align="flex-start">
            {/* Displaying the title with an underline */}
            <HeadingUnderline>{title}</HeadingUnderline>
            {/* Grid for displaying blog cards */}
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)'
                }}
                gap="8"
            >
                {/* Mapping through each blog post and creating a GridItem */}
                {posts.map(post => (
                    <GridItem key={post.meta.title} colSpan="1">
                        {/* Displaying the BlogCard component for each post */}
                        <BlogCard post={post} />
                    </GridItem>
                ))}
            </Grid>
        </VStack>
    )
}