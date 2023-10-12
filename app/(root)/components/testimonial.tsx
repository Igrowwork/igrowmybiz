"use client"
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

const TestimonialsContent = [
    {
        Name: 'Mayank Shergill',
        CompanyName: 'NEARBUY.COM',
        Review: 'I am so impressed with the details and the planning that it felt like we have been working together for such a long time. Would strongly recommend them if you want anything to do with video.',
        media: <iframe className='object-cover w-full h-full rounded-lg' src="https://www.youtube.com/embed/wvxYQwPdZ5E?si=Lu5MGcXNcmfeANs3" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    },
    {
        Name: 'Vanya',
        CompanyName: 'NEARBUY.COM',
        Review: 'I am so impressed with the details and the planning that it felt like we have been working together for such a long time. Would strongly recommend them if you want anything to do with video.',
        media: <iframe className='object-cover w-full h-full rounded-lg' src="https://www.youtube.com/embed/Mn6NRhWTViw?si=F6UrWm4i3Rm5VKF_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    },
    {
        Name: 'Dr. Pushpendra Tiwari',
        CompanyName: 'Founder of Rehab Masters',
        Review: 'Built a Great Website for me Great efforts from team , listened to all My queries and cleared them all , Thank  you Igrowmybiz',
        media: <iframe className='object-cover w-full h-full rounded-lg' src="https://www.youtube.com/embed/9DhuWapDDrw?si=Y6vr5Qjts9gyygHZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    },
    {
        Name: 'Ankur Chaurasia',
        CompanyName: 'NEARBUY.COM',
        Review: 'I am so impressed with the details and the planning that it felt like we have been working together for such a long time. Would strongly recommend them if you want anything to do with video.',
        media: <iframe className='object-cover w-full h-full rounded-lg' src="https://www.youtube.com/embed/9DhuWapDDrw?si=Y6vr5Qjts9gyygHZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    },
    {
        Name: 'Ankur Singh',
        CompanyName: 'NEARBUY.COM',
        Review: 'I am so impressed with the details and the planning that it felt like we have been working together for such a long time. Would strongly recommend them if you want anything to do with video.',
        media: <iframe className='object-cover w-full h-full rounded-lg' src="https://www.youtube.com/embed/9DhuWapDDrw?si=Y6vr5Qjts9gyygHZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    },
    {
        Name: 'Ankur Khalsa',
        CompanyName: 'NEARBUY.COM',
        Review: 'I am so impressed with the details and the planning that it felt like we have been working together for such a long time. Would strongly recommend them if you want anything to do with video.',
        media: <iframe className='object-cover w-full h-full rounded-lg' src="https://www.youtube.com/embed/9DhuWapDDrw?si=Y6vr5Qjts9gyygHZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    },
    {
        Name: 'Ankur Chauhan',
        CompanyName: 'NEARBUY.COM',
        Review: 'I am so impressed with the details and the planning that it felt like we have been working together for such a long time. Would strongly recommend them if you want anything to do with video.',
        media: <iframe className='object-cover w-full h-full rounded-lg' src="https://www.youtube.com/embed/9DhuWapDDrw?si=Y6vr5Qjts9gyygHZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    },
]

export default function Testimonials() {
    const [CurrentSlide, setCurrentSlide] = useState<number>(0);
    const nextSlide = () => {
        if (CurrentSlide < TestimonialsContent.length - 1) {
            setCurrentSlide((prev)=> prev + 1);
        }
    }

    const prevSlide = () => {
        if (CurrentSlide !== 0) {
            setCurrentSlide(CurrentSlide - 1)
        }

    }


    return (
        <div className='w-4/5 relative'>
            <div className='overflow-hidden'>
                <div className='flex gap-10 px-[1.3rem] transition-all ease-in-out duration-500' style={{ transform: `translateX(-${CurrentSlide * 100}%)` }}>
                    {TestimonialsContent.map((item, index) => <div key={index} className='flex-shrink-0 flex-grow-0 w-full flex flex-col-reverse sm:flex-row justify-between items-center gap-10 mb-5 sm:mb-0'>
                        <div className='sm:w-1/2 w-full flex flex-col gap-2 sm:pl-3'>
                            <h3 className=' text-white font-bold text-2xl'>{item.Name}</h3>
                            <p className='text-white/70 font-semibold text-lg'>{item.CompanyName}</p>
                            <p className='text-textColor text-base'>{item.Review}</p>
                        </div>
                        <div className='sm:w-1/2 w-full'>
                            <AspectRatio ratio={16 / 9}>
                                {item.media}
                            </AspectRatio>
                        </div>
                    </div>)}
                </div>
            </div>
            <div onClick={prevSlide} className='absolute cursor-pointer select-none sm:-left-10 sm:top-1/2 bg-white p-1 rounded-full'>
                <ChevronLeft />
            </div>
            <div onClick={nextSlide} className='absolute cursor-pointer select-none sm:-right-10 mx-14 sm:mx-0 sm:top-1/2 bg-white p-1 rounded-full'>
                <ChevronRight />
            </div>
        </div>
    )
}
