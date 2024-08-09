import Image from 'next/image'
import React from 'react'

interface bannerProps {
  name : string,
  img:string
}

export default function Banner({name, img}:bannerProps) {
  return (
    <div className='relative md:h-[30vw] sm:h-[40vw] h-[60vw] w-full flex justify-center items-center'>
      <div className='w-full h-full bg-black/30 z-10 absolute' />
      <Image src={img} alt='No Preview' fill className='object-cover' />
      <p className='xl:text-8xl lg:text-6xl md:text-4xl sm:text-3xl text-2xl  font-medium text-white z-10'>{name}</p>
    </div>
  )
}
