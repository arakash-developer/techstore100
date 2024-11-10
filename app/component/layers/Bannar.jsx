"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from './Container';
import Image from 'next/image';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Bannar1 from '@/public/bannar1.png';
import Bannar2 from '@/public/bannar2.png';
import Bannar3 from '@/public/bannar3.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer rounded-none w-9 h-12 bg-[var(--color---18)] justify-center items-center rounded-l-[30px]'
      style={{ ...style, display: "flex"}}
      onClick={onClick}
      >
      <MdOutlineKeyboardArrowRight className='text-[var(--color---12)] text-[20px]' />
      </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer rounded-none w-9 h-12 bg-[var(--color---18)] justify-center items-center rounded-r-[30px]'
      style={{ ...style, display: "flex"}}
      onClick={onClick}>
      <MdOutlineKeyboardArrowLeft className=' text-[var(--color---12)] text-[20px]' />
    </div>
  );
}

const Bannar = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed:5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
      <Container className='my-5'>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <Image src={Bannar1} alt={Bannar1} />
            </div>
            <div>
              <Image src={Bannar2} alt={Bannar1} />
            </div>
            <div>
              <Image src={Bannar3} alt={Bannar1} />
            </div>
            <div>
              <Image src={Bannar1} alt={Bannar1} />
            </div>
            <div>
              <Image src={Bannar2} alt={Bannar1} />
            </div>
            <div>
              <Image src={Bannar3} alt={Bannar1} />
            </div>
          </Slider>
        </div>
      </Container>
    </>
  )
}

export default Bannar