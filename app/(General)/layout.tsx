import { Navbar } from '@/components'

export default function AboutLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center p-24">
                <span className="text-5xl">Hello World!</span>
                {children}
            </main>
        </>
    )
    }
