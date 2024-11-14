import React from 'react'
import Image from 'next/image'

const BlogItem = ({ className,body,date,img }) => {
    return (
        <>
            <div className={`w-full h-[422px] sm:h-[322px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 ${className}`}>
                <div className="w-full h-[250px] sm:h-[150px]">
                    <Image width={225} height={150} className='w-full h-full object-cover' src={img} alt={img} />
                </div>
                    <div className="py-4 px-5 w-full">
                        <p className='capitalize font-normal w-full sm:max-w-[185px] text-xs text-center text-[var(--color---7)]'>{body}</p>
                        <p className='font-normal text-[0.63rem] mt-3 text-center text-[var(--color---5)]'>{date}</p>
                    </div>

            </div>
        </>
    )
}

export default BlogItem