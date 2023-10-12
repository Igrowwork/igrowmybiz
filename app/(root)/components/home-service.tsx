import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function HomeService() {

    const data = [
        {
            bgImagePath: "/assets/images/home-service-1.jpg",
            heading: "Social Media Marketing",
            para: "Where creativity meets connectivity, we're here to make your brand shine brighter than the summer sun. Our main focus is on creating a captivating buzz around your brand, igniting excitement and captivating the interest of your specific target audience.",
        },
        {
            bgImagePath: "/assets/images/home-service-2.jpg",
            heading: "Paid Ads Management",
            para: "Where data-driven strategies jet fuels your brand's digital dreams. We'll optimize your ad spend through laser-focused targeting, awesome creatives, and the magic of analytics. ",
        },
        {
            bgImagePath: "/assets/images/home-service-3.jpg",
            heading: "Designing Services",
            para: "At our agency, we don't just edit and design, we sculpt experiences that leave a mark. We transform ordinary footage into extraordinary works of art.",
        },
        {
            bgImagePath: "/assets/images/home-service-4.jpg",
            heading: "Devlopment",
            para: "Our developers embark on a mission to create a website that captures the essence of the client's business and delivers a wow factor. We also take pride in delivering high-quality results on time.",
        },
    ]

    return (
        <section className='md:h-screen w-full py-[5%] px-10 flex flex-col md:flex-row gap-5 md:gap-0'>
            {data.map((data, index) => <div key={index} className='h-[400px] md:h-full w-full md:hover:w-[200%] transition-all ease-linear duration-200 relative group/animatedService'>
                <Image src={data.bgImagePath} alt='BG Image' fill className='object-cover' />
                <div className='absolute bottom-0 h-[25%] group-hover/animatedService:h-full transition-all ease-in-out duration-300 bg-opacity-20 backdrop-blur bg-white z-10 w-full'>
                    <div className='flex flex-col justify-center gap-5 absolute bottom-2 md:bottom-6 lg:bottom-8 left-2'>
                        <h2 className='text-2xl font-semibold'>{data.heading}</h2>
                        <p className='hidden group-hover/animatedService:block font-bold transition-all ease-in-out'>
                            {data.para}
                        </p>
                        <ChevronRight className='h-8 w-8 bg-white rounded-full' />
                    </div>
                </div>
            </div>
            )}
        </section>
    )
}
