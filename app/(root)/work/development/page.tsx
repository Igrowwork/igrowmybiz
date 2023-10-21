/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { dancing_script } from '@/app/fonts'
import Link from 'next/link'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'


const images1 = [{ mockup: 'abcapitals mockup.png', web: 'https://abcapital.ae' }, { mockup: 'SHIM MOCKUP.png', web: 'http://shim.co.in' }, { mockup: 'pachmarhi ayurceda mock.png', web: 'https://www.pachmarhiayurveda.com' }];
const images2 = [{ mockup: 'tathyabaan mockup.png', web: 'https://tathyabaan.in' }, { mockup: 'quikdsp mockup.png', web: 'https://www.quikdsp.com' }, { mockup: 'megha and parv mockup.png', web: 'https://meghaandparvtradingfze.com' }, { mockup: 'geoline mockup.png', web: 'https://geolineglobal.com' }]
export default function Page() {
    return (
        <main className='w-full bg-secondaryColor min-h-screen'>
            <section className='pt-5 flex flex-col gap-20 items-center'>
                <div className='relative h-96 w-10/12 rounded-xl overflow-hidden'>
                    <div className='bg-black bg-opacity-20 sm:bg-opacity-30 absolute top-0 left-0 h-full w-full z-10'></div>
                    <Image src={"/assets/images/career.jpg"} alt='BG-Image' fill className='object-cover' />
                    <div className='flex flex-col gap-10 justify-center items-center px-5 sm:px-0 mb-10 z-10 relative h-full bg-black/50'>
                        <h2 className='text-white text-3xl font-bold text-center flex flex-col'>IgrowMyBiz <span className={cn(dancing_script.className, 'text-mainColor -mt-4')}>Website Development Works</span></h2>
                        <p className='text-white text-center flex flex-col font-semibold gap-3 md:text-xl'>
                            Igrow Social is a digital marketing agency, that’s beyond social.
                            <span className='text-white/70 font-normal text-sm md:text-base'>
                                {`We don't just manage social media accounts, we elevate them, turning audiences from viewers to an engaged community.
                        `}
                            </span>
                        </p>
                        <Link href="/services" className='px-4 py-2 text-sm rounded-full bg-white w-fit border-2 border-white font-semibold hover:bg-black hover:text-white transition-all duration-500'>
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>
            <section className='w-4/5 mx-auto mt-10 md:flex gap-5 pb-20'>
                <div className='flex flex-col md:w-1/2 gap-4'>
                    {images1.map((image, index) => <div key={index} className='md:mt-5 grow-0 shrink-0'>
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className='w-full rounded-lg cursor-pointer'><img src={`/assets/web mockups/${image.mockup}`} alt={'logo'} className='object-cover rounded-lg w-full' /></div>
                            </DialogTrigger>
                            <DialogContent>
                                <AspectRatio ratio={16 / 9} className='lg:w-screen h-screen lg:-translate-x-[30%] lg:-translate-y-[30%] -translate-y-[40%] scale-75 '>
                                    <iframe
                                        src={image.web}
                                        width="100%"
                                        height="100%"
                                    ></iframe>
                                </AspectRatio>
                            </DialogContent>
                        </Dialog>
                    </div>
                    )}
                </div>
                <div className='flex flex-col md:w-1/2 gap-4'>
                    {images2.map((image, index) => <div key={index} className='md:mb-3 grow-0 shrink-0'>
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className='w-full h-full rounded-lg cursor-pointer'><img src={`/assets/web mockups/${image.mockup}`} alt={'logo'} className='object-cover rounded-lg w-full h-full' /></div>
                            </DialogTrigger>
                            <DialogContent>
                                <AspectRatio ratio={16 / 9} className='lg:w-screen h-screen lg:-translate-x-[30%] lg:-translate-y-[30%] -translate-y-[40%] scale-75 '>
                                    <iframe
                                        src={image.web}
                                        width="100%"
                                        height="100%"
                                    ></iframe>
                                </AspectRatio>
                            </DialogContent>
                        </Dialog>
                    </div>)}
                </div>

            </section>
        </main>
    )
}
