"use client"
import React, { useEffect, useState } from 'react'
import Container from './Container'
import Item from './Item'
import Item2 from './Item2'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomBuild from '@/public/custombuild.png'
import Image from 'next/image'



const NewProduct = ({ className }) => {
    let [loading, setLoading] = useState(true)
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
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
        const blops = await fetch("https://akashtechstore.onrender.com/products")
        let res = await blops.json()
        setAllProducts(res)
        setLoading(false)
        // console.log(res);

    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <main>
            <div className={`${className}`}>
                <Container className='max-w-[1404px]'>
                    {
                        loading &&
                        <Slider {...settings}>
                            <Item2 className='w-full px-[1px]' />
                            <Item2 className='w-full px-[1px]' />
                            <Item2 className='w-full px-[1px]' />
                            <Item2 className='w-full px-[1px]' />
                            <Item2 className='w-full px-[1px]' />
                            <Item2 className='w-full px-[1px]' />
                        </Slider>
                    }
                    {
                        !loading &&
                        <div className="grid grid-cols-12 h-[372px] items-start w-full">
                            <div className="xsm:w-[234px] h-[372px] lg:col-span-2 md:col-span-3 sm:col-span-4 xsm:col-span-6 col-span-12">
                                <Image className='h-full w-full object-cover' src={CustomBuild} alt={CustomBuild} />
                            </div>
                            <div className="w-full h-full bg-[var(--color---12)] md:col-span-9 lg:col-span-10 sm:col-span-8 xsm:col-span-6 hidden xsm:block">

                                <Slider {...settings}>
                                    {
                                        allproducts?.map((item) => (
                                            <Item
                                                key={item.id}
                                                className='w-full px-[1px]'
                                                id={item.id}
                                                title={item.title}
                                                image={item.thumbnail}
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

export default NewProduct
