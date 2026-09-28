import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { HTMLAttributes, ReactNode } from 'react'

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const Layout = ({ children, className }: LayoutProps) => {
    return (
        <div className="flex min-h-screen max-w-[100vw] flex-col overflow-x-hidden">
            <Header />
            <main className={`container flex-1 ${className || ''}`}>{children}</main>
            <Footer />
        </div>
    )
}
