import { cn } from '@/lib/utils'
import Link from 'next/link'
import { oxygen } from '../fonts'
import HomeService from './components/home-service'
import Image from 'next/image'
import Testimonials from './components/testimonial'
import { AspectRatio } from '@/components/ui/aspect-ratio'


const images = ['abcap-a3be2e4f.png', 'bbb-016bebb4.png', 'geoline-221c69ce.png', 'magha-6b5980fd.png', 'more-09e1cd70.png', 'quikdsp-5b6fab73.png', 'rapido-710258dc.png', 'shim-1e9caefd.png', '12 Nov Logo new 01.png', 'Bluejay.png', 'day events logo.png', 'logo (1).png', 'Logo Design.png', 'output-onlinepngtools (2).png', 'vishal lo for whit vid.png', 'abcap-a3be2e4f.png', 'bbb-016bebb4.png', 'geoline-221c69ce.png', 'magha-6b5980fd.png', 'more-09e1cd70.png', 'quikdsp-5b6fab73.png', 'rapido-710258dc.png', 'shim-1e9caefd.png', '12 Nov Logo new 01.png', 'Bluejay.png', 'day events logo.png', 'logo (1).png', 'Logo Design.png', 'output-onlinepngtools (2).png', 'vishal lo for whit vid.png',]
export default function Home() {
  return (
    <>
      <main className='bg-secondaryColor w-full'>

        <section className='flex h-screen w-full md:px-[5%] lg:px-[7%]'>
          <div className='md:w-1/2 h-full flex flex-col gap-5 justify-center px-20 md:px-10 lg:px-14'>
            <h2 className={cn(oxygen.className, 'text-white text-2xl md:text-xl lg:text-[32px] font-bold leading-8 lg:leading-[2.7rem]')}>
              IgrowMyBiz - <span className='text-textColor'>the one stop solution for you business needs</span>
            </h2>
            <Link href="/services" className='px-4 py-2 text-sm rounded-full bg-white w-fit border-2 border-white font-semibold hover:bg-black hover:text-white transition-all duration-500'>
              Our Services
            </Link>
          </div>
          <div className='w-1/2 hidden md:block'>
            <div className='bg-gray-400 h-full w-full relative'><Image src={'/assets/images/IGMB Home page.png'} alt='home' fill className='object-cover'/></div>
          </div>
        </section>
        <section className='bg-black'>
          <div className='py-2 lg:py-4 lg:h-28 h-24'>
            <div className='relative h-full w-full overflow-hidden mx-auto'>
              <div className='flex absolute logo-scroll-three  xl:gap-14 gap-2 items-center my-auto -bottom-5'>
                {images.map((item, index) => <div key={index} className='relative grow-0 shrink-0 w-28 h-28'>
                  <Image src={`/assets/images/${item}`} alt='bbb' fill className='object-contain filter grayscale hover:grayscale-0' />
                </div>)}

              </div>
            </div>
          </div>
          <div className='sm:w-[45%] w-full mx-auto my-2'>
            <AspectRatio ratio={16 / 9}>
              <iframe className='object-cover w-full h-full rounded-lg' src="https://www.youtube.com/embed/9DhuWapDDrw?si=Y6vr5Qjts9gyygHZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </AspectRatio>
          </div>
          <div className='py-2 lg:py-4 lg:h-28 h-24'>
            <div className='relative h-full w-full overflow-hidden mx-auto'>
              <div className='flex absolute logo-scroll-four  xl:gap-14 gap-2 items-center my-auto -bottom-5'>
                {images.map((item, index) => <div key={index} className='relative grow-0 shrink-0 w-28 h-28'>
                  <Image src={`/assets/images/${item}`} alt='bbb' fill className='object-contain filter grayscale hover:grayscale-0' />
                </div>)}

              </div>
            </div>
          </div>
        </section>
        <section className='bg-secondaryBGColor py-20 flex items-center justify-center'>
          <Testimonials />
        </section>
        <HomeService />

      </main>
    </>
  )
}
