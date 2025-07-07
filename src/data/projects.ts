/* 
title: 'Project Title' - The title of the project.
description: 'Project description.' - The description of the project.
image: '/images/projects/project-image.webp' - The path to the project image.
status: {
    text: 'Status' - The status of the project. (e.g. View Source, Coming Soon, Private Repository)
    link: 'Link' - The link to the project status. (e.g. GitHub Repository, Website)
    icon: 'icon-class' - The icon for the status. https://icon-sets.iconify.design/tabler/?query=mail&prefixes=tabler
}
note: 'Note' - A note for the project. (e.g. In development, Coming Soon)
isFeatured: true - Show the project in the featured section.
isFullWidth: true - Make the project image full width.
*/

export const projects = [
    {
        title: 'Gen AI Prompts',
        description: 'A comprehensive collection of AI prompts designed for software engineers, engineering managers, product managers, and career development. These prompts are optimized for different AI models and organized by role and use case.',
        image: '/images/projects/gen-ai-prompts.webp',
        status: {
            text: 'View Source',
            link: 'https://github.com/Bhavya/gen-ai-prompts',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
        isFullWidth: true,
    },
]
