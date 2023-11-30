import { oxygen } from '@/app/fonts'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export const metadata: Metadata = {
  title: 'Igrowmybiz - services',
  description: 'Social media marketing agency - services',
}
export default function Page() {
  return (
    <main className='w-full bg-secondaryColor flex flex-col gap-20'>
      <section className='pt-24 flex flex-col gap-2 items-center px-5'>
        <h2 className={cn('text-3xl text-white font-semibold', oxygen.className)}>Our Services</h2>
        <p className={cn('text-[#8e8e8e] md:w-1/2 mx-auto text-center', oxygen.className)}>{`Explore the possibilities with iGrowMyBiz We turn your ideas into reality, delivering solutions tailored to your needs. Let's bring your vision to life together.`}</p>
      </section>

      <section className='grid lg:grid lg:grid-cols-4 grid-cols-1 gap-6 h-screen w-full md:flex justify-center flex-wrap px-5 lg:px-32 py-14 text-black'>
        <div className='bg-[#242424] lg:col-span-1 lg:row-span-2 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative'><Image src={'/assets/Web Icons SMM/SMM icons 1.png'} alt='smm1' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-1 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative'><Image src={'/assets/Web Icons SMM/SMM icons 2.png'} alt='smm1' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-2 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative'><Image src={'/assets/Web Icons SMM/SMM icons 3.png'} alt='smm1' fill className='object-contain rounded-xl' /></div>
        <Link href={'/service/socialmediamarketing'} className='lg:col-span-2 lg:row-span-1 rounded-xl hover:scale-[1.03] transition-all duration-300 ease-in p-1 btn-background'><div className='bg-textColor hover:bg-white h-full w-full flex items-center justify-center rounded-xl transition-all duration-300 ease-in'><h3 className='text-black md:text-4xl font-semibold uppercase text-2xl'>Social Media Marketing</h3></div></Link>
        <div className='bg-[#242424] lg:col-span-1 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative'><Image src={'/assets/Web Icons SMM/SMM icons 4.png'} alt='smm1' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-2 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative'><Image src={'/assets/Web Icons SMM/SMM icons 5.png'} alt='smm1' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-2 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative'><Image src={'/assets/Web Icons SMM/SMM icons 6.png'} alt='smm1' fill className='object-contain rounded-xl' /></div>
      </section>

      <section className='grid lg:grid lg:grid-cols-4 grid-cols-1 gap-6 h-screen w-full md:flex justify-center flex-wrap px-5 lg:px-32 py-14 text-black'>
        <div className='bg-[#242424] lg:col-span-1 lg:row-span-2 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Web Icons padi ads/Paid ads management icons 1.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-1 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Web Icons padi ads/Paid ads management icons 2.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-2 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Web Icons padi ads/Paid ads management icons 3.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <Link href={'/service/paidads'} className='lg:col-span-2 lg:row-span-1 rounded-xl hover:scale-[1.03] transition-all duration-300 ease-in p-1 btn-background'><div className='bg-textColor hover:bg-white h-full w-full flex items-center justify-center rounded-xl transition-all duration-300 ease-in'><h3 className='text-black md:text-4xl font-semibold uppercase text-2xl'>paid ads management</h3></div></Link>
        <div className='bg-[#242424] lg:col-span-1 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Web Icons padi ads/Paid ads management icons 4.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-2 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Web Icons padi ads/Paid ads management icons 5.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-2 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Web Icons padi ads/Paid ads management icons 6.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
      </section>

      <section className='grid lg:grid lg:grid-cols-4 grid-cols-1 gap-6 h-screen w-full md:flex justify-center flex-wrap px-5 lg:px-32 py-14 text-black'>
        <div className='bg-[#242424] lg:col-span-1 lg:row-span-2 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Web Development icons/Development icons 1.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-1 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Web Development icons/Development icons 2.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-2 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Web Development icons/Development icons 3.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <Link href={'/service/development'} className='lg:col-span-2 lg:row-span-1 rounded-xl hover:scale-[1.03] transition-all duration-300 ease-in p-1 btn-background'><div className='bg-textColor hover:bg-white h-full w-full flex items-center justify-center rounded-xl transition-all duration-300 ease-in'><h3 className='text-black md:text-4xl font-semibold uppercase text-2xl'>development</h3></div></Link>
        <div className='bg-[#242424] lg:col-span-1 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Web Development icons/Development icons 4.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-2 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Web Development icons/Development icons 5.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-2 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Web Development icons/Development icons 6.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
      </section>

      <section className='grid lg:grid lg:grid-cols-4 grid-cols-1 gap-6 h-screen w-full md:flex justify-center flex-wrap px-5 lg:px-32 py-14 text-black'>
        <div className='bg-[#242424] lg:col-span-1 lg:row-span-2 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Graphic Icons/Asset 1.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-1 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Graphic Icons/Asset 3.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-2 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Graphic Icons/Asset 4.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <Link href={'/service/design'} className='lg:col-span-2 lg:row-span-1 rounded-xl hover:scale-[1.03] transition-all duration-300 ease-in p-1 btn-background'><div className='bg-textColor hover:bg-white h-full w-full flex items-center justify-center rounded-xl transition-all duration-300 ease-in'><h3 className='text-black md:text-4xl font-semibold uppercase text-2xl'>designing services</h3></div></Link>
        <div className='bg-[#242424] lg:col-span-1 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Graphic Icons/Asset 5.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-2 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Graphic Icons/Asset 6.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
        <div className='bg-[#242424] lg:col-span-2 lg:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 relative'><Image src={'/assets/Graphic Icons/Asset 7.png'} alt='paidads' fill className='object-contain rounded-xl' /></div>
      </section>
    </main>
  )
}
