'use client'

import { routes } from '@/data'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

export const DesktopNav = () => {
    const pathname = usePathname()

    return (
        <nav className="hidden items-center gap-6 md:flex">
            {routes.map((route) => {
                const isActive = route.path === '/' ? pathname === '/' : pathname.startsWith(route.path)

                return (
                    <NextLink
                        key={route.path}
                        href={route.path}
                        className={`text-sm transition-colors hover:text-foreground ${
                            isActive ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                    >
                        {route.label}
                    </NextLink>
                )
            })}
        </nav>
    )
}
