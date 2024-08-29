// PageComponent.tsx
import React from 'react';
import Banner from '../../../our-portfolio/_components/banner';
import { cn } from '@/lib/utils';
import { poppins } from '@/app/fonts';
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import WorkDetailSlider from '../../_components/work-detail-slider';
import { getDummyData, PageId } from '@/dummy-data/page'; // Import your data function

interface PageProps {
    params: {
        id: PageId;
    };
}

const Page: React.FC<PageProps> = ({ params }) => {
    const { id } = params;
    const {  projectDetail, bannerData, images, workDetail, colors , services } = getDummyData(id) ; // Use the function to get data

    return (
        <div className={cn('h-full w-full min-h-screen', poppins.className)}>
            <Banner img={bannerData.img} name={bannerData.name} />
            <div className='max-w-6xl xl:p-0 p-6  mx-auto h-full w-full xl:my-10 md:my-8 sm:my-6 my-2'>
                <div className=''>
                    <div className='grid md:grid-cols-2 grid-cols-1 items-start gap-8'>
                        <div className='grid grid-cols-2 items-start justify-start gap-4 my-4'>
                            {services.map((service, index) => (
                                <span
                                    key={index}
                                    className={`lg:text-2xl md:text-xl sm:text-base text-sm font-medium flex justify-center items-center p-2 border border-[${colors.primary}] md:px-5 sm:px-3 px-0 rounded-full text-[${colors.primary}] `} style={{color : colors.primary, border:`1px solid ${colors.primary}`}}
                                >
                                    {service.name}
                                </span>
                            ))}
                        </div>
                        <div>
                            <h1 className={`xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium text-[${colors.heading}]`} style={{color : colors.primary }} >{projectDetail.title}</h1>
                            <p className={`md:text-xl sm:text-lg text-base font-normal text-[${colors.secondary}] my-6`}>{projectDetail.description}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className={`text-[${colors.primary}] xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium flex items-center gap-4`}  style={{color : colors.primary }}>
                        Visit Live Site <FaArrowRightLong />
                    </h1>
                    <div className={`h-[0.5px] w-full bg-[${colors.primary}] md:my-4 my-2`}  style={{backgroundColor : colors.primary }} />
                    <div className='flex md:items-center md:gap-4 gap-2'>
                        <span className={`text-[${colors.secondary}] md:text-2xl sm:text-xl text-base font-normal w-36`}>Language -</span>
                        <p className={`text-[${colors.heading}] md:text-2xl sm:text-xl text-sm font-medium`}>{projectDetail.language}</p>
                    </div>
                    <div className={`h-[1px] w-full bg-[${colors.primary}] md:my-4 my-2`} style={{backgroundColor : colors.primary }}/>
                    <div className='flex items-center gap-4'>
                        <span className={`text-[${colors.secondary}] md:text-2xl sm:text-xl text-base font-normal w-36`}>Timescale -</span>
                        <p className={`text-[${colors.heading}] md:text-2xl sm:text-xl text-sm font-medium`}>{projectDetail.timescale}</p>
                    </div>
                    <div className={`h-[1px] w-full bg-[${colors.primary}] md:my-4 my-2`} style={{backgroundColor : colors.primary }}/>
                    <div className='flex items-center gap-4'>
                        <span className={`text-[${colors.secondary}] md:text-2xl sm:text-xl text-base font-normal w-36 flex justify-between`}>
                            System <span>-</span>
                        </span>
                        <p className={`text-[${colors.heading}] md:text-2xl sm:text-xl text-base font-medium`}>{projectDetail.system}</p>
                    </div>
                    <div className={`h-[1px] w-full bg-[${colors.primary}] my-4`} style={{backgroundColor : colors.primary }}/>
                </div>
                <div className='grid grid-cols-12 md:gap-8 sm:gap-6 gap-2'>
                    <div className='w-full col-span-8 rounded-2xl overflow-hidden'>
                        <div className='md:h-[40vw] sm:h-[50vw] h-[60vw] w-full relative'>
                            <Image src={images[1].src} alt={images[1].alt} fill className='w-full h-full max-sm:scale-150' />
                            {/* <Image src={images[0].src} alt={images[0].alt} fill className='object-cover h-full w-full' /> */}
                        </div>
                    </div>
                    <div className='col-span-4 overflow-hidden h-full w-full'>
                        <div className='h-[40vw] w-full relative'>
                            <Image src={images[3].src} alt={images[3].alt} fill className='object-cover w-full h-full overflow-hidden max-sm:scale-150' />
                            {/* <Image src={images[2].src} alt={images[2].alt} fill className=' relative overflow-hidden object-cover h-full w-full' /> */}
                        </div>
                    </div>
                </div>
                <div className='my-8'>
                    <h1 className={`text-[${colors.primary}] xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium flex items-center gap-4`}  style={{color : colors.primary }}>
                        Context <FaArrowRightLong />
                    </h1>
                    <p className={`xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-normal text-[${colors.heading}] my-2`}>{workDetail.context}</p>
                    <p className={`md:text-xl sm:text-lg text-base font-normal text-[${colors.secondary}] my-6`}>{workDetail.description}</p>
                </div>
                <div className='md:h-[35vw] sm:h-[40vw] h-[60vw]'>
                    <WorkDetailSlider isColor={colors.primary} />
                </div>
                <div className='my-8'>
                    <h1 className={`text-[${colors.primary}] xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium flex items-center gap-4`}  style={{color : colors.primary }}>
                        Goals <FaArrowRightLong />
                    </h1>
                    <p className={`xl:text-[2.5rem] md:text-3xl sm:text-2xl text-xl  font-normal text-[${colors.heading}] my-2`}>{workDetail.goals}</p>
                    <p className={`md:text-xl sm:text-lg text-base  font-normal text-[${colors.secondary}] my-6`}>{workDetail.description}</p>
                </div>
                <div className='grid md:grid-cols-2 md:gap-8 sm:gap-6 gap-4'>
                    <div>
                        <h1 className={`text-[${colors.primary}] xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium flex items-center gap-4`}  style={{color : colors.primary }}>
                            Business Challenges <FaArrowRightLong />
                        </h1>
                        <ul className='my-6 list-disc ml-5'>
                            {workDetail.businessChallenges.map((challenge, index) => (
                                <li key={index} className={`xl:text-[1.5rem] md:text-xl text-base text-[${colors.secondary}]`}>{challenge}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='h-auto w-full relative'>
                        <Image src={'/assets/portfolio-images/10.png'} alt='No Preview' fill className='object-cover rounded-2xl' />
                    </div>
                </div>
                <div className='xl:my-10 md:my-8 sm:my-6 my-2'>
                    <h1 className={`text-[${colors.primary}] xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium flex items-center gap-4 my-2`}  style={{color : colors.primary }}>
                        Customer relationship management (CRM) <FaArrowRightLong />
                    </h1>
                    <div className='h-[40vw] w-full relative my-6'>
                        <Image src={'/assets/portfolio-images/10.png'} alt='No Preview' fill className='object-contain' />
                    </div>
                    <p className={`xl:text-[2.5rem] md:text-3xl sm:text-2xl text-xl  font-normal text-[${colors.heading}] my-2`}>{workDetail.crm}</p>
                    <p className={`md:text-xl sm:text-lg text-base  font-normal text-[${colors.secondary}] my-6`}>{workDetail.description}</p>
                </div>
                <div className="xl:my-10 md:my-8 sm:my-6 my-2">
                    <h1 className={`text-[${colors.primary}] xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium flex items-center gap-4`}  style={{color : colors.primary }}>
                        Our Social Media Work <FaArrowRightLong />
                    </h1>
                    <div className='h-[40vw] w-full relative my-6'>
                        <Image src={'/assets/portfolio-images/11.png'} alt='No Preview' fill className='object-contain' />
                    </div>
                    <p className={`md:text-xl sm:text-lg text-base  font-normal text-[${colors.secondary}] my-6`}>{workDetail.socialMediaWork}</p>
                </div>
            </div>
        </div>
    );
};

export default Page;




// // PageComponent.tsx
// import React from 'react';
// import Banner from '../../../our-portfolio/_components/banner';
// import { cn } from '@/lib/utils';
// import { poppins } from '@/app/fonts';
// import { FaArrowRightLong } from "react-icons/fa6";
// import WebsiteScroll from '../../../our-portfolio/_components/website-scroll';
// import Image from 'next/image';
// import WorkDetailSlider from '../../_components/work-detail-slider';
// import { services, projectDetail ,bannerData, images, workDetail } from '@/dummy-data/page';

// export default function Page({params} : {params:{id:any}}) {
//     console.log(params.id,"===")
//     return (
//         <div className={cn('h-full w-full min-h-screen', poppins.className)}>
//             <Banner img={bannerData.img} name={bannerData.name} />
//             <div className='max-w-6xl mx-auto h-full w-full xl:my-10 md:my-8 sm:my-6 my-2'>
//                 <div className=''>
//                     <div className='grid grid-cols-2 items-start gap-8'>
//                         <div className='grid grid-cols-2 items-start justify-start gap-4 my-4'>
//                             {services.map((service, index) => (
//                                 <span key={index} className='text-2xl font-medium flex justify-center items-center p-2 text-[#00AB55] border border-[#00AB55] px-5 rounded-full hover:bg-[#00AB55] hover:text-white transition-transform'>
//                                     {service.name}
//                                 </span>
//                             ))}
//                         </div>
//                         <div>
//                             <h1 className='text-[2rem] font-medium text-[#282D46]'>{projectDetail.title}</h1>
//                             <p className='text-xl font-normal text-[#625D60] my-6'>{projectDetail.description}</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <h1 className='text-[#00AB55] text-[2rem] font-medium flex items-center gap-4'>Visit Live Site <FaArrowRightLong /></h1>
//                     <div className='h-[0.5px] w-full bg-[#00AB55] my-4' />
//                     <div className='flex items-center gap-4'>
//                         <span className='text-[#625D60] text-2xl font-normal w-36'>Language  -</span>
//                         <p className='text-[#282D46] text-2xl font-medium'>{projectDetail.language}</p>
//                     </div>
//                     <div className='h-[1px] w-full bg-[#00AB55] my-4' />
//                     <div className='flex items-center gap-4'>
//                         <span className='text-[#625D60] text-2xl font-normal w-36'>Timescale  -</span>
//                         <p className='text-[#282D46] text-2xl font-medium'>{projectDetail.timescale}</p>
//                     </div>
//                     <div className='h-[1px] w-full bg-[#00AB55] my-4' />
//                     <div className='flex items-center gap-4'>
//                         <span className='text-[#625D60] text-2xl font-normal w-36 flex justify-between'>System <span>-</span></span>
//                         <p className='text-[#282D46] text-2xl font-medium'>{projectDetail.system}</p>
//                     </div>
//                     <div className='h-[1px] w-full bg-[#00AB55] my-4' />
//                 </div>
//                 <div className='grid grid-cols-12 gap-8'>
//                     <div className='w-full col-span-8 rounded-2xl overflow-hidden'>
//                         <div className='h-[40vw] w-full relative'>
//                             <Image src={images[0].src} alt={images[0].alt} fill className='object-cover h-full w-full' />
//                             <Image src={images[1].src} alt={images[1].alt} fill className='w-full h-full' />
//                         </div>
//                     </div>
//                     <div className='col-span-4 overflow-hidden h-full w-full'>
//                         <div className='h-[40vw] w-full relative'>
//                             <Image src={images[2].src} alt={images[2].alt} fill className='object-cover h-full w-full' />
//                             <Image src={images[3].src} alt={images[3].alt} fill className='object-cover w-full h-full' />
//                         </div>
//                     </div>
//                 </div>
//                 <div className='my-8'>
//                     <h1 className='text-[#00AB55] text-[2rem] font-medium flex items-center gap-4'>Context <FaArrowRightLong /></h1>
//                     <p className='text-[2.5rem] font-normal text-[#282D46] my-2'>{workDetail.context}</p>
//                     <p className='text-xl font-normal text-[#625D60] my-6'>{workDetail.description}</p>
//                 </div>
//                 <div className='h-[35vw]'>
//                     <WorkDetailSlider />
//                 </div>
//                 <div className='my-8'>
//                     <h1 className='text-[#00AB55] text-[2rem] font-medium flex items-center gap-4'>Goals <FaArrowRightLong /></h1>
//                     <p className='text-[2.5rem] font-normal text-[#282D46] my-2'>{workDetail.goals}</p>
//                     <p className='text-xl font-normal text-[#625D60] my-6'>{workDetail.description}</p>
//                 </div>
//                 <div className='grid grid-cols-2 gap-8'>
//                     <div>
//                         <h1 className='text-[#00AB55] text-[2rem] font-medium flex items-center gap-4'>Business Challenges <FaArrowRightLong /></h1>
//                         <ul className='my-6 list-disc ml-5'>
//                             {workDetail.businessChallenges.map((challenge, index) => (
//                                 <li key={index} className='text-[1.5rem] text-[#625D60]'>{challenge}</li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className='h-auto w-full relative'>
//                         <Image src={'/assets/portfolio-images/10.png'} alt='No Preview' fill className='object-cover rounded-2xl' />
//                     </div>
//                 </div>
//                 <div className='xl:my-10 md:my-8 sm:my-6 my-2'>
//                     <h1 className='text-[#00AB55] text-[2rem] font-medium flex items-center gap-4 my-2'>Customer relationship management (CRM) <FaArrowRightLong /></h1>
//                     <div className='h-[40vw] w-full relative my-6'>
//                         <Image src={'/assets/portfolio-images/10.png'} alt='No Preview' fill className='object-contain' />
//                     </div>
//                     <p className='text-[2.5rem] font-normal text-[#282D46] my-2'>{workDetail.crm}</p>
//                     <p className='text-xl font-normal text-[#625D60] my-6'>{workDetail.description}</p>
//                 </div>
//                 <div className="xl:my-10 md:my-8 sm:my-6 my-2">
//                     <h1 className='text-[#00AB55] text-[2rem] font-medium flex items-center gap-4'>Our Social Media Work <FaArrowRightLong /></h1>
//                     <div className='h-[40vw] w-full relative my-6'>
//                         <Image src={'/assets/portfolio-images/11.png'} alt='No Preview' fill className='object-contain' />
//                     </div>
//                     <p className='text-xl font-normal text-[#625D60] my-6'>{workDetail.socialMediaWork}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }
