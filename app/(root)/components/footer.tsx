
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RoutesClient from './routes-client'
import { Facebook, Instagram, Linkedin, Mail, PhoneCall } from 'lucide-react'
import FooterRoutes from './footer-routes'

export default function Footer() {
    return (

        <footer className='bg-[#141414] border-t flex flex-col justify-center w-full border-white/10 relative z-[99] px-[5%]'>
            {/* <div className='w-full flex flex-col gap-5 lg:gap-0 lg:flex-row items-start md:items-center justify-between px-10 lg:px-20 py-6'>
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
            </div> */}
            <div className='flex flex-col md:flex-row items-center gap-12 sm:gap-4 h-full w-full pt-20 max-w-7xl mx-auto mb-5'>
                <div className='flex flex-col items-center sm:items-start gap-6 xl:gap-10 md:w-[69%]'>
                    <h2 className='flex gap-2 items-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold text-white md:-mt-5'>Building Brands From Biz <span className='relative h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12'><Image src={'/assets/images/star.png'} alt='' fill className='object-cover' /></span></h2>
                    <Link href={'/'}>
                        <div className='relative h-6 w-[250px] md:-ml-5 hover:scale-125 transition-all ease-in-out duration-500'>
                            <Image src={"/assets/images/new logo-a4aa82bd.png"} alt='' fill className='object-contain' />
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col gap-5 md:gap-10 h-full md:w-[31%]'>
                    <div className='flex flex-col gap-6 items-center md:items-end text-white w-full mx-auto'>
                        <div className='flex flex-col items-start gap-6 h-fit w-fit'>
                            <a className='flex items-center gap-2 hover:text-[#FCF74A] hover:scale-105 transition-all duration-300 ease-linear group/footerIcon' href="tel:+9162647 55339"><PhoneCall className='h-8 w-8 bg-white group-hover/footerIcon:bg-[#FCF74A] text-[#141414] px-[6px] rounded-full' />+9162647 55339</a>
                            <a className='flex items-center gap-2 hover:text-[#FCF74A] hover:scale-105 transition-all duration-300 ease-linear group/footerIcon' href="mailto:igrowmybiz@gmail.com"><Mail className='h-8 w-8 bg-white group-hover/footerIcon:bg-[#FCF74A] text-[#141414] px-[6px] rounded-full' />igrowmybiz@gmail.com</a>
                        </div>
                        <div className='flex h-full w-full justify-center md:justify-start lg:justify-center'>
                            <div className='flex gap-2 pl-3 sm:pl-0 w-fit lg:-ml-8 xl:ml-0 xl:pl-[72px]'>
                                <a href='https://in.linkedin.com/company/igrowmybiz' target='_blank' className='bg-white hover:bg-[#FCF74A] hover:scale-110 transition-all ease-linear duration-300 group/socials p-1 rounded-md cursor-pointer'>
                                    <Linkedin className='text-[#141414]' />
                                </a>
                                <a href='https://m.facebook.com/people/Igrow-My-Biz/100085364342275/' target='_blank' className='bg-white hover:bg-[#FCF74A] hover:scale-110 transition-all ease-linear duration-300 group/socials p-1 rounded-md cursor-pointer'>
                                    <Facebook className='text-[#141414]' />
                                </a>
                                <a href='https://www.instagram.com/igrowmybiz/' target='_blank' className='bg-white hover:bg-[#FCF74A] hover:scale-110 transition-all ease-linear duration-300 group/socials p-1 rounded-md cursor-pointer'>
                                    <Instagram className='text-[#141414]' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full w-full max-w-7xl mx-auto py-5 border-t-2 border-[#FCF74A] flex flex-col md:flex-row gap-2 md:gap-0 justify-between text-textColor text-sm md:text-base text-center md:text-start'>
                <p className='hover:text-white text-xs lg:text-base cursor-pointer hover:scale-105 transition-all duration-300'>@Copyright 2023, All Rights Reserved</p>
                <div className='flex flex-col md:flex-row gap-2 md:gap-5'>
                    <Link href={'/contact'}>
                        <p className='hover:text-white text-xs lg:text-base cursor-pointer hover:scale-105 transition-all duration-300'>Contact us</p>
                    </Link>
                    <p className='hover:text-white text-xs lg:text-base cursor-pointer hover:scale-105 transition-all duration-300'>Terms & Conditions</p>
                    <p className='hover:text-white text-xs lg:text-base cursor-pointer hover:scale-105 transition-all duration-300'>Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}
