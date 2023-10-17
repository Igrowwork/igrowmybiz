import { dancing_script } from '@/app/fonts'
import { cn } from '@/lib/utils'
import React from 'react'
import Content from './content'

export default function DevelopmentSectionFour() {
    return (
        <section className='bg-[#242424] py-10'>
            <div className='w-[80%] lg:w-[70%] mx-auto flex flex-col items-center gap-6 lg:gap-6 mb-6'>
                <h2 className='text-white text-center flex flex-col text-4xl font-bold'><span className={cn(dancing_script.className, 'text-mainColor font-semibold text-xl sm:text-lg md:text-xl ')}>Idea to reality</span><span>How <span className='text-mainColor'>It Works</span></span></h2>
                <div className="h-[3px] lg:w-[30%] w-[80%] divider rounded-none"></div>
            </div>
            <div className='w-[80%] md:w-[70%] mx-auto'>
                <Content />
            </div>
        </section>
    )
}
