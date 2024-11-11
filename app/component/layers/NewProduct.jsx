"use client"
import React, { useEffect, useState } from 'react'
import Container from './Container'
import Item from './Item'
import Item2 from './Item2'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



function SampleNextArrow(props) {
  const { check, style, onClick } = props;
  return (
    <div
      className={`${check} absolute right-[1px] top-1/2 -translate-y-1/2 z-10 cursor-pointer rounded-none w-9 h-12 bg-[var(--color---18)] justify-center items-center rounded-l-[30px]`}
      style={{ ...style }}
      onClick={onClick}
    >
      <MdOutlineKeyboardArrowRight className='text-[var(--color---12)] text-[20px]' />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { check, style, onClick } = props;
  return (
    <div
      className={`${check} absolute left-[1px] top-1/2 -translate-y-1/2 z-10 cursor-pointer rounded-none w-9 h-12 bg-[var(--color---18)] justify-center items-center rounded-r-[30px]`}
      style={{ ...style }}
      onClick={onClick}>
      <MdOutlineKeyboardArrowLeft className=' text-[var(--color---12)] text-[20px]' />
    </div>
  );
}


const NewProduct = ({ className }) => {
  let [loading, setLoading] = useState(true)
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow check={`${loading ? "!hidden" : "!flex"}`} />,
    prevArrow: <SamplePrevArrow check={`${loading ? "!hidden" : "!flex"}`} />,
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
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
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
          }

        </Container>
      </div>

    </main>
  )
}

export default NewProduct
