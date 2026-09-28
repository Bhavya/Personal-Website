import NextLink from 'next/link'

export const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <footer className="mt-10 w-full border-t border-border">
            <div className="container flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                <p>&copy; {date} Bhavya Kashyap</p>
                <div className="flex gap-4">
                    <NextLink className="hover:text-foreground" href="https://www.linkedin.com/in/bhavya-kashyap/" target="_blank">
                        LinkedIn
                    </NextLink>
                    <NextLink className="hover:text-foreground" href="https://github.com/Bhavya" target="_blank">
                        GitHub
                    </NextLink>
                    <NextLink className="hover:text-foreground" href="https://x.com/bhavbhavbhav" target="_blank">
                        X
                    </NextLink>
                </div>
            </div>
        </footer>
    )
}
