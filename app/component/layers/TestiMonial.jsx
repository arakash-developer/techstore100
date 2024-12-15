"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Container from "@/app/component/layers/Container";
import Quote from "@/public/quote.png";

const TestiMonial = ({className}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container className={`testimonial max-w-[922px] mx-auto ${className}`}>
        <Slider {...settings} className="h-full w-full slicks">
        <div className="box">
          <div className="flex gap-x-6 items-start">
            <Image src={Quote} alt={Quote} />
            <p className="max-w-[850px] font-normal text-lg text-var(--color---7)">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <h4 className="mt-2 mr-1 font-normal text-sm text-right text-var(--color---7)">
            - Tama Brown
          </h4>
        </div>
        <div className="box">
          <div className="flex gap-x-6 items-start">
            <Image src={Quote} alt={Quote} />
            <p className="max-w-[850px] font-normal text-lg text-var(--color---7)">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <h4 className="mt-2 mr-1 font-normal text-sm text-right text-var(--color---7)">
            - Tama Brown
          </h4>
        </div>
        <div className="box">
          <div className="flex gap-x-6 items-start">
            <Image src={Quote} alt={Quote} />
            <p className="max-w-[850px] font-normal text-lg text-var(--color---7)">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <h4 className="mt-2 font-normal text-sm text-right text-var(--color---7)">
            - Tama Brown
          </h4>
        </div>
        <div className="box">
          <div className="flex gap-x-6 items-start">
            <Image src={Quote} alt={Quote} />
            <p className="max-w-[850px] font-normal text-lg text-var(--color---7)">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <h4 className="mt-2 mr-1 font-normal text-sm text-right text-var(--color---7)">
            - Tama Brown
          </h4>
        </div>
        </Slider>
        <div className="bottom mt-5">
        <button className="rounded-3xl py-2 px-6 border-2 border-[var(--color---3)] inline-block font-semibold text-sm text-center text-[var(--color---3)]">Leave Us A Review</button>
        </div>
      </Container>
    </div>
  );
};

export default TestiMonial;
