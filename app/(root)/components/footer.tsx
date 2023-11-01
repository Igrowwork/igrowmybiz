
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RoutesClient from './routes-client'
import { Facebook, Instagram, Linkedin, PhoneCall } from 'lucide-react'
import FooterRoutes from './footer-routes'

export default function Footer() {
    return (

        <footer className='bg-[#141414] border-t flex justify-center w-full border-white/10'>
            <div className='w-full flex flex-col gap-5 lg:gap-0 lg:flex-row items-start md:items-center justify-between px-10 lg:px-20 py-6'>
                <div className='hidden flex-col md:flex-row gap-5 md:gap-10 items-center  lg:flex'>
                    <FooterRoutes />
                </div>
                <div className='flex gap-2'>
                    <a href="tel:+9162647 55339" className='bg-textColor hover:bg-white hover:scale-110 transition-all ease-linear duration-300 group/socials p-1 rounded-md cursor-pointer flex gap-3'>
                        <PhoneCall className='text-[#141414]' /> +91 62647 55339
                    </a>
                    <a href='https://in.linkedin.com/company/igrowmybiz' target='_blank' className='bg-textColor hover:bg-white hover:scale-110 transition-all ease-linear duration-300 group/socials p-1 rounded-md cursor-pointer'>
                        <Linkedin className='text-[#141414]' />
                    </a>
                    <a href='https://m.facebook.com/people/Igrow-My-Biz/100085364342275/' target='_blank' className='bg-textColor hover:bg-white hover:scale-110 transition-all ease-linear duration-300 group/socials p-1 rounded-md cursor-pointer'>
                        <Facebook className='text-[#141414]' />
                    </a>
                    <a href='https://www.instagram.com/igrowmybiz/' target='_blank' className='bg-textColor hover:bg-white hover:scale-110 transition-all ease-linear duration-300 group/socials p-1 rounded-md cursor-pointer'>
                        <Instagram className='text-[#141414]' />
                    </a>
                </div>
            </div>
        </footer>
    )
}
