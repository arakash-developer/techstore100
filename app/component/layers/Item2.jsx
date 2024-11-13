import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import Successs from '@/public/success.png'
import Product1 from '@/public/products/product1.jpg'
import { IoIosStar } from "react-icons/io";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { ShimmerTitle } from "react-shimmer-effects";
import { ShimmerText } from "react-shimmer-effects";

const Item2 = ({ className }) => {
    return (
        <div className={`${className} w-[234px] h-[360px] bg-[var(--color---12)] relative`}>
            <div className="w-full h-full px-6  bg-[var(--color--12)] absolute">
                <div className="absolute left-2 top-4 h-5 w-[40%] overflow-hidden">
                <ShimmerTitle line={1} gap={10} variant="secondary" />
                </div>
                <div className="absolute left-2 rounded-md top-[11%] h-[139px] w-[94%] overflow-hidden">
                    <ShimmerThumbnail height={139} rounded />
                </div>
                <div className="absolute left-2 rounded-md top-[51%] h-6 w-[80%]"></div>
                <div className="absolute left-2 rounded-md top-[55%] h-16 w-[90%]">
                    <ShimmerText line={5} gap={10} />
                </div>
                <div className="absolute left-2 rounded-md top-[82%] h-6 w-[40%]">
                    <ShimmerTitle line={2} gap={10} variant="secondary" />
                </div>
            </div>
        </div>
    )
}

export default Item2