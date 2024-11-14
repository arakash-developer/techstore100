import React from 'react'
import Blog1 from '@/public/blog1.png'
import Image from 'next/image'

const BlogItem = ({ className }) => {
    return (
        <>
            <div className={`w-full h-[422px] sm:h-[322px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 ${className}`}>
                <div className="w-full h-[250px] sm:h-[150px]">
                    <Image className='w-full h-full object-cover' src={Blog1} alt={Blog1} />
                </div>
                    <div className="py-4 px-5 w-full">
                        <p className='font-normal w-full sm:max-w-[185px] text-xs text-center text-[var(--color---7)]'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
                        <p className='font-normal text-[0.63rem] mt-3 text-center text-[var(--color---5)]'>01.09.2020</p>
                    </div>

            </div>
        </>
    )
}

export default BlogItem