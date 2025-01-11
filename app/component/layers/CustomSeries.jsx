"use client"
import React, { useEffect, useState } from 'react'
import Container from './Container'
import Item from './Item'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomBuild from '@/public/custombuild.png'
import Image from 'next/image'
import CustomScleton from './CustomScleton'
import { CustomScletonOne } from './CustomScleton'
import Link from 'next/link';
import getAllProducts from '@/app/lib/getallproducts';



const CustomSeries = ({ className,seriesImage,seriesTitle,seriesLink }) => {
    let [loading, setLoading] = useState()
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    let [allproducts, setAllProducts] = useState([])


    let getdata = async () => {
        setLoading(true)
        let blobs= await getAllProducts();
        let res = blobs.data
        setAllProducts(res)
        setLoading(false)
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <main>
            <div className={`${className}`}>
                <Container className='max-w-[1404px]'>
                    {loading &&
                        <div className="grid grid-cols-12 h-[372px] items-start w-full">
                            <div className="xsm:w-[234px] h-[372px] lg:col-span-2 md:col-span-3 sm:col-span-4 xsm:col-span-6 col-span-12">
                                <CustomScletonOne className='w-full px-[1px] h-full object-cover' />
                            </div>
                            <div className="w-full h-full bg-[var(--color---12)] md:col-span-9 lg:col-span-10 sm:col-span-8 xsm:col-span-6 hidden xsm:block">
                                <Slider {...settings}>
                                    <CustomScleton className='w-full px-[1px]' />
                                    <CustomScleton className='w-full px-[1px]' />
                                    <CustomScleton className='w-full px-[1px]' />
                                    <CustomScleton className='w-full px-[1px]' />
                                    <CustomScleton className='w-full px-[1px]' />
                                </Slider>
                            </div>
                        </div>
                    }
                    {
                        !loading &&
                        <div className="grid grid-cols-12 h-[372px] items-start w-full">
                            <div className={`xsm:w-[234px] lg:w-[166px] xl:w-[234px]  h-[372px] ${seriesImage} bg-no-repeat bg-cover bg-center lg:col-span-2 md:col-span-3 sm:col-span-4 xsm:col-span-6 hidden xsm:block`}>
                                <div className="pt-[151px] pb-9">
                                    <h3 className='max-w-[100px] mx-auto capitalize font-bold text-[1.38rem]  leading-[130%] text-center text-[var(--color---12)]'>{seriesTitle}</h3>
                                    <Link href={seriesLink} className='mt-[100px] block capitalize font-normal text-[0.81rem] underline leading-[115%] text-center text-[#fff]'>See All Products</Link>
                                </div>
                            </div>
                            <div className="w-full h-full bg-[var(--color---12)] md:col-span-9 lg:col-span-10 sm:col-span-8 xsm:col-span-6 col-span-12">

                                <Slider {...settings}>
                                    {
                                        allproducts?.map((item) => (
                                            <Item
                                                key={item._id}
                                                className='w-full px-[1px]'
                                                id={item._id}
                                                title={item.title}
                                                image={item.thumbnail}
                                                price={item.price}
                                                discountPercentage={item.discountPercentage}
                                            />
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    }
                </Container>
            </div>

        </main>
    )
}

export default CustomSeries
