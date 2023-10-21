"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from '@/lib/utils'
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function NavBarMobile() {

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
        <Sheet>
            <SheetTrigger asChild>
                <AlignRight className="text-white h-8 w-8" />
            </SheetTrigger>
            <SheetContent className="bg-secondaryColor">
                <div className="flex flex-col gap-5">
                    {routes.map((route) => <SheetClose key={route.href} asChild><Link href={route.href} className={cn('relative w-fit text-textColor hover:text-white hover:scale-110 font-normal transition-all duration-300 animated-border scale-125', route.active ? 'scale-150 text-white after:content-[""] after:bg-white after:h-[3px] after:w-full after:absolute after:left-0 after:-bottom[5px]' : '')}>{route.label}</Link></SheetClose>)}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="w-fit border-none">
                            <AccordionTrigger className="relative w-fit text-textColor hover:text-white hover:scale-110 font-normal transition-all duration-300 animated-border flex items-center cursor-pointer">Blog</AccordionTrigger>
                            <AccordionContent>
                                <ul className='flex flex-col gap-3 bg-black py-5'>
                                    {blogsRoutes.map((route) => <SheetClose key={route.href} asChild><Link href={route.href}><li className={cn('text-textColor text-4xl hover:text-white px-5', route.active ? '' : 'text-textColor')}>{route.label}</li></Link></SheetClose>)}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Link href={"/contact"} className={cn('relative w-fit text-textColor hover:text-white hover:scale-110 font-normal transition-all duration-300 animated-border scale-125', path === "/contact" ? 'scale-150 text-white after:content-[""] after:bg-white after:h-[3px] after:w-full after:absolute after:left-0 after:-bottom[5px]' : '')}>Contact</Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}
