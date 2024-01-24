import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "@/components"

const navItems = [
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Pricing',
        path: '/pricing'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href='/' className="flex items-center">
                <HomeIcon className="mr-2"/>
                <span>Home</span>
            </Link>
            

            <div className="flex flex-1" />

            {
                navItems.map((navItems, index) => (
                    <ActiveLink key={index} {...navItems} />
                ))
            }
        </nav>
    )
}