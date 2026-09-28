import { DesktopNav } from '@/components/layout/desktop-nav'
import { MobileNav } from '@/components/layout/mobile-nav'
import NextLink from 'next/link'

export const Header = () => {
    return (
        <header className="sticky left-0 top-0 z-10 min-h-[72px] w-full border-b border-border/80 bg-background/90 backdrop-blur-md">
            <div className="container flex h-[72px] items-center justify-between">
                <NextLink
                    href="/"
                    aria-label="Bhavya Kashyap home"
                    className="grid size-9 place-items-center rounded-full border border-border text-xs font-bold tracking-[-0.04em] transition-colors hover:border-primary/60"
                >
                    BK
                </NextLink>
                <DesktopNav />
                <MobileNav />
            </div>
        </header>
    )
}
