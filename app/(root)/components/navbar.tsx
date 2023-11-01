"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import RoutesClient from './routes-client'
import NavBarMobile from './navbar-mobile'
import { cn } from '@/lib/utils'

export default function NavBar() {
    const [logoWidth, setLogoWidth] = useState(false); // Initial logo width
    const scrollThreshold = 20; // Adjust this value as needed
    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            setLogoWidth(true); // Change logo width when scrolled down
        } else {
            setLogoWidth(false); // Reset logo width when scrolled back up
        }
    };

    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            // Remove scroll event listener when component unmounts
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header>
            <nav className={cn('bg-secondaryColor border-b flex justify-center top-0 left-0 w-full border-white/10 z-50',!logoWidth?"relative":"fixed")}>
                <div className='w-full flex items-center justify-between px-10 md:px-[3%] lg:px-[7%] py-6'>
                    <div className='relative h-5 w-40 hover:scale-125 transition-all ease-in-out duration-500'>
                        <Link href="/">
                            <Image src={"/assets/images/new logo-a4aa82bd.png"} alt='logo' fill className='object-contain' />
                        </Link>
                    </div>
                    <div className=''>
                        <div className='hidden md:flex md:gap-5 lg:gap-10'>
                            <RoutesClient />
                        </div>
                        <div className='md:hidden'>
                            <NavBarMobile />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
