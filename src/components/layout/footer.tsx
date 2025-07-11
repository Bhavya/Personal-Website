import { contact } from '@/data'
import NextLink from 'next/link'

export const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <footer className="w-full border-t bg-background mt-16">
            <div className="container flex h-full flex-col items-center justify-between space-y-2 py-4 md:flex-row md:space-y-0">
                <div className="flex flex-col items-center space-y-2 md:items-start">
                    <p>&copy; {date} Bhavya, All Rights Reserved</p>
                </div>
                <div className="flex space-x-4">
                    {contact.map((item) => (
                        <NextLink
                            key={item.link}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                        >
                            <span className={`${item.icon} size-6`} />
                        </NextLink>
                    ))}
                </div>
            </div>
        </footer>
    )
}
