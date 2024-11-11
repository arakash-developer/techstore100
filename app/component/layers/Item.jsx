'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import Successs from '@/public/success.png'
import Product1 from '@/public/products/product1.jpg'
import { IoIosStar } from "react-icons/io";



const Item = ({className,id,title,image}) => {
  const router = useRouter()
  return (
    <div className={`${className} w-[234px] min-h-[360px] bg-[var(--color---12)]`}>
      <div className="w-full h-full px-6 bgcolor" onClick={() => router.push(`/products/details/${id}`)}>
        <div className="flex gap-x-[2px] items-center justify-start my-2">
          <Image src={Successs} alt={Successs} />
          <p className='capitalize font-normal text-[0.63rem] leading-[210%] text-[var(--color---9)]'>in stock</p>
        </div>
        <div className="w-full h-[150px] flex justify-center">
          <Image className='w-[150px] h-full object-cover' width='150' height='150' src={image} alt={Product1} />
        </div>
        <div className="flex gap-x-2 items-center my-1">
          <div className="flex gap-x-[2px] items-center">
            <IoIosStar className='text-[var(--color---19)] text-[13px]' />
            <IoIosStar className='text-[var(--color---19)] text-[13px]' />
            <IoIosStar className='text-[var(--color---19)] text-[13px]' />
            <IoIosStar className='text-[var(--color---19)] text-[13px]' />
            <IoIosStar className='text-[var(--color---6)] text-[13px]' />
          </div>
          <p className='font-normal text-xs leading-[210%] text-[var(--color---6)]'>Reviews (4)</p>
        </div>
        <h1 className='font-normal text-[0.81rem] text-[var(--color---7)] h-16 overflow-hidden'>
          {title.substr(0,57)+"..."}
        </h1>
        <del className='font-normal text-sm leading-[140%] text-[var(--color---10)] mt-2'>$499.00</del>
        <h2 className='font-semibold text-lg leading-[140%] text-[var(--color---7)] pb-3'>$499.00</h2>
      </div>
    </div>
  )
}

export default Item