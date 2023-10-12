"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'


export default function RoutesClient() {
    const path = usePathname()
    const routes = [
        {
            href: "/",
            label: "Home",
            active: path === "/"
        },
        {
            href: "/aboutus",
            label: "About Us",
            active: path === "/aboutus"
        },
        {
            href: "/services",
            label: "Services",
            active: path === "/services"
        },
        {
            href: "/casestudies",
            label: "Case Studies",
            active: path === "/casestudies"
        },
        {
            href: "/career",
            label: "Career",
            active: path === "/career"
        },
    ]

    const blogsRoutes = [
        {
            href: "/blog?category=trending",
            label: "Trending",
            active: path === "/blog?category=trending"
        },
        {
            href: "/blog?category=ai",
            label: "Ai",
            active: path === "/blog?category=ai"
        },
        {
            href: "/blog?category=marketing",
            label: "Marketing",
            active: path === "/blog?category=marketing"
        },
        {
            href: "/blog?category=branding",
            label: "Branding",
            active: path === "/blog?category=branding"
        },
        {
            href: "/blog?category=strategies",
            label: "Strategies",
            active: path === "/blog?category=strategies"
        },
        
    ]
    return (
        <>
            {routes.map((route) => <Link href={route.href} key={route.href} className={cn('relative w-fit text-textColor hover:text-white hover:scale-110 font-normal transition-all duration-300 animated-border', route.active ? 'scale-110 text-white after:content-[""] after:bg-white after:h-[3px] after:w-full after:absolute after:left-0 after:-bottom[5px]' : '')}>{route.label}</Link>)}
            <div className={cn('relative w-fit text-textColor hover:text-white hover:scale-110 font-normal transition-all duration-300 animated-border flex items-center cursor-pointer group/nav')}>Blogs <ChevronDown className='ml-2 w-4 h-4' />
            <span className='p-2 absolute top-full bottom-full hover:scale-100 invisible group-hover/nav:visible font-light'>
                <ul className='flex flex-col gap-2 py-2 px-4 bg-black/80'>
                    {blogsRoutes.map((route)=><Link href={route.href} key={route.href}><li className={cn('text-textColor hover:text-white',route.active?'':'text-textColor')}>{route.label}</li></Link>)}
                </ul>
            </span>
            </div>
            <Link href={"/contact"} className={cn('relative w-fit text-textColor hover:text-white hover:scale-110 font-normal transition-all duration-300 animated-border', path === "/contact" ? 'scale-110 text-white after:content-[""] after:bg-white after:h-[3px] after:w-full after:absolute after:left-0 after:-bottom[5px]' : '')}>Contact</Link>
        </>
    )
}
