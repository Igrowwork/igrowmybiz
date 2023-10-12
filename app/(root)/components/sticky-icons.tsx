"use client"

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export default function StickyIcons() {

    const path = usePathname()

    return (
            <div className={cn('flex flex-col gap-5 h-full w-fit fixed left-[85%] md:left-[95%] top-[80%] z-50',path ==='/contact'?'hidden' : '')}>
                <a className='relative bg-textColor rounded-full p-2 hover:bg-white/70 hover:scale-110 transition-all duration-200 group/message' href='/contact'>
                    <Image src={"/contact-svg.svg"} alt='contact icon' height={50} width={50} className='object-contain h-7 w-7 md:h-8 md:w-8 group-hover/message:hidden' />
                    <Image src={"/contact-color-svg.svg"} alt='contact icon' height={50} width={50} className='object-contain h-7 w-7 md:h-8 md:w-8 hidden group-hover/message:block' />
                </a>
                <a className='relative bg-textColor rounded-full p-2 hover:scale-110 transition-all duration-200 group/whatsapp' href='https://wa.me/+916264755339'>
                    <Image src={"/whatsapp-svg.svg"} alt='contact icon' height={50} width={50} className='object-contain h-7 w-7 md:h-8 md:w-8 group-hover/whatsapp:hidden' />
                    <Image src={"/whatsapp-color-svg.svg"} alt='contact icon' height={50} width={50} className='object-contain h-7 w-7 md:h-8 md:w-8 hidden group-hover/whatsapp:block' />
                </a>
            </div>
    )
}
