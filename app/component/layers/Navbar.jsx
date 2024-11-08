"use client"
import { IoLogoFacebook } from "react-icons/io";
import React, { useState } from 'react'
import Logo from '@/public/Logo.png'
import Cart from '@/public/jam_shopping-cart.png'
import Akash from '@/public/akash.png'
import { IoCloseSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Container from "./Container"
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Li from "./Li";
import { FaBarsStaggered } from "react-icons/fa6";
import Product from "@/public/product.jpg";
import Edit from "@/public/edit.png";
import Delete from "@/public/delete.png";
import Paypal from "@/public/paypal.png";



const navbar = () => {
  let [show, setShow] = useState(false);
  let [searchbar, setSearchbar] = useState(false);
  let handler = () => {
    setShow(!show);
  }
  let SearchbarHandler = () => {
    setSearchbar(!searchbar);
  }
  return (
    <>
      <nav className="relative z-50">
        <div className="navtop bg-[var(--color---11)] py-2">
          <Container className='flex justify-between items-center'>
            <p className="font-semibold text-xs text-[var(--color---5)] w-full lg:w-auto">Mon-Thu: <span className="text-[var(--color---12)]">9:00 AM - 5:30 PM</span></p>
            <p className="font-semibold text-xs text-center text-[#acacac] invisible lg:visible">Visit our showroom in 1234 Street Adress City Address, 1234  <span className="text-[var(--color---12)] relative before:w-full before:h-[2px] before:absolute before:bg-[var(--color---12)] before:top-full before:left-0 before:rounded-full">  Contact Us</span></p>
            <div className="flex gap-x-4 items-center">
              <p className="font-semibold text-xs text-center text-[var(--color---12)] invisible lg:visible">Call Us: (00) 1234 5678</p>
              <div className="flex gap-x-2 items-center text-[var(--color---12)]">
                <IoLogoFacebook />
                <AiFillInstagram />
              </div>
            </div>
          </Container>
        </div>

        <div className="nav py-6 border-b border-[var(--color---6)] relative">
          <Container className='flex justify-between items-center'>
            <div className="">
              <Link href='#' className="h-[60px] flex items-center">
                <Image src={Logo} alt={Logo} />
              </Link>
            </div>

            <div className={`w-[60%] SearchBar px-3 ${searchbar ? "w-[80%] lg:w-[85%] lg:visible" : "lg:invisible sm:w-[80%] lg:w-0"}`}>
              <input type="text" className="w-full bg-[var(--color---1)] rounded-[32px] px-5 h-[60px] outline-[var(--color---3)]" placeholder="Search entiere store here..." />
            </div>

            <ul className={`flex flex-col lg:flex-row gap-y-2 lg:gap-x-6 xl:gap-x-[40px] gap-x-3 items-center bg-[var(--color---11)] lg:bg-transparent w-full lg:w-auto py-4 lg:py-0 absolute left-0 top-0 lg:static transition-all ${show ? "visible top-full" : "invisible lg:visible"} ${searchbar ? "lg:hidden" : "lg:flex"}`}>
              <Li className='' liText='Laptops' to='/laptop' />
              <Li className='' liText='Desktop PCs' to='/desktop' />
              <Li className='' liText='Networking Devices' to='/faq' />
              <Li className='' liText='Printers & Scanners' to='/contact' />
              <Li className='' liText='PC Parts' to='/about' />
              <Li className='' liText='All Other Products' to='/about' />
              <Li className='' liText='Repairs' to='/about' />
              <Link href='#' className="font-semibold text-sm  text-[var(--color---3)] inline-block rounded-3xl py-2 px-6 border-2 border-[var(--color---3)] lg:hidden xl:inline-block">Our Deals</Link>
            </ul>


            <div className="flex items-center xl:gap-x-[25px] gap-3 cursor-pointer">
              <div className="lg:hidden flex justify-center items-center sm:px-3" onClick={handler} >
                {
                  show ?
                    <IoCloseSharp className="text-[22px] absolute" />
                    :
                    <FaBarsStaggered className="text-[20px] absolute" />
                }
              </div>
              <div className="flex justify-center items-center invisible lg:visible" onClick={SearchbarHandler}>
                {
                  searchbar ?
                    <IoCloseSharp className="text-[22px] absolute" />
                    :
                    <FaSearch className="absolute" />
                }
              </div>
              <div className="relative">
                <div className="flex justify-center items-center absolute left-[17px] bottom-[15px] w-4 h-4 bg-[var(--color---3)] rounded-full">
                  <p className="font-bold text-[0.63rem] text-center text-[var(--color---12)]">2</p>
                </div>
                <div className="relative">
                  <Image src={Cart} alt="Cart" />
                  <div className="w-80 h-[31.94rem] bg-[var(--color---12)] absolute right-0 top-[140%] py-6 flex items-center flex-col cartbox-shad z-50 invisible">
                    <h3 className="font-semibold text-lg leading-[140%] text-center text-[var(--color---7)]">My Cart</h3>
                    <p className="font-normal text-xs text-center text-[var(--color---5)] pt-[6px] pb-4 capitalize"><span className="text-[var(--color---3)] font-bold text-sm">2</span> item in cart</p>
                    <Link href='#' className="font-semibold text-sm text-center text-[var(--color---3)] border-[var(--color---3)] py-2 px-[48px] border rounded-full inline-block mb-5">View or Edit Your Cart</Link>
                    <div className="CartsContainer border-t border-[var(--color---6)] w-full h-[50%] overflow-y-scroll">

                      <div className="item flex justify-center border-b border-[var(--color---6)] px-4">
                        <div className="py-[18px] flex items-center">
                          <h4 className="font-normal text-lg leading-[140%] text-center text-[var(--color---7)]">1 <span className="text-[14px]">X</span></h4>
                          <Image className="inline-block ml-1" src={Product} alt="aa" />
                          <h3 className="w-[60%] font-normal text-[0.81rem] text-[var(--color---7)]">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
                        </div>
                        <div className="w-[20%] flex flex-col gap-y-1 items-center justify-center">
                          <Image className="h-5 w-5" src={Delete} alt="delete" />
                          <Image className="h-5 5-5" src={Edit} alt="edit" />
                        </div>
                      </div>
                      <div className="item flex justify-center border-b border-[var(--color---6)] px-4">
                        <div className="py-[18px] flex items-center">
                          <h4 className="font-normal text-lg leading-[140%] text-center text-[var(--color---7)]">1 <span className="text-[14px]">X</span></h4>
                          <Image className="inline-block ml-1" src={Product} alt="aa" />
                          <h3 className="w-[60%] font-normal text-[0.81rem] text-[var(--color---7)]">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
                        </div>
                        <div className="w-[20%] flex flex-col gap-y-1 items-center justify-center">
                          <Image className="h-5 w-5" src={Delete} alt="delete" />
                          <Image className="h-5 5-5" src={Edit} alt="edit" />
                        </div>
                      </div>
                      <div className="item flex justify-center border-b border-[var(--color---6)] px-4">
                        <div className="py-[18px] flex items-center">
                          <h4 className="font-normal text-lg leading-[140%] text-center text-[var(--color---7)]">1 <span className="text-[14px]">X</span></h4>
                          <Image className="inline-block ml-1" src={Product} alt="aa" />
                          <h3 className="w-[60%] font-normal text-[0.81rem] text-[var(--color---7)]">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
                        </div>
                        <div className="w-[20%] flex flex-col gap-y-1 items-center justify-center">
                          <Image className="h-5 w-5" src={Delete} alt="delete" />
                          <Image className="h-5 5-5" src={Edit} alt="edit" />
                        </div>
                      </div>
                      <div className="item flex justify-center border-b border-[var(--color---6)] px-4">
                        <div className="py-[18px] flex items-center">
                          <h4 className="font-normal text-lg leading-[140%] text-center text-[var(--color---7)]">1 <span className="text-[14px]">X</span></h4>
                          <Image className="inline-block ml-1" src={Product} alt="aa" />
                          <h3 className="w-[60%] font-normal text-[0.81rem] text-[var(--color---7)]">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
                        </div>
                        <div className="w-[20%] flex flex-col gap-y-1 items-center justify-center">
                          <Image className="h-5 w-5" src={Delete} alt="delete" />
                          <Image className="h-5 5-5" src={Edit} alt="edit" />
                        </div>
                      </div>
                      <div className="item flex justify-center border-b border-[var(--color---6)] px-4">
                        <div className="py-[18px] flex items-center">
                          <h4 className="font-normal text-lg leading-[140%] text-center text-[var(--color---7)]">1 <span className="text-[14px]">X</span></h4>
                          <Image className="inline-block ml-1" src={Product} alt="aa" />
                          <h3 className="w-[60%] font-normal text-[0.81rem] text-[var(--color---7)]">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
                        </div>
                        <div className="w-[20%] flex flex-col gap-y-1 items-center justify-center">
                          <Image className="h-5 w-5" src={Delete} alt="delete" />
                          <Image className="h-5 5-5" src={Edit} alt="edit" />
                        </div>
                      </div>
                      <div className="item flex justify-center border-b border-[var(--color---6)] px-4">
                        <div className="py-[18px] flex items-center">
                          <h4 className="font-normal text-lg leading-[140%] text-center text-[var(--color---7)]">1 <span className="text-[14px]">X</span></h4>
                          <Image className="inline-block ml-1" src={Product} alt="aa" />
                          <h3 className="w-[60%] font-normal text-[0.81rem] text-[var(--color---7)]">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
                        </div>
                        <div className="w-[20%] flex flex-col gap-y-1 items-center justify-center">
                          <Image className="h-5 w-5" src={Delete} alt="delete" />
                          <Image className="h-5 5-5" src={Edit} alt="edit" />
                        </div>
                      </div>

                    </div>
                    <div className="my-2">
                      <h3 className="font-semibold text-sm leading-[140%] text-center text-[var(--color---5)]">Subtotal: <span className="text-lg text-[var(--color---7)]">$499.00</span></h3>
                    </div>
                    <Link href="#" className="font-semibold text-sm text-center text-[var(--color---12)] w-64 h-9 rounded-[50px] bg-[var(--color---3)] flex justify-center items-center">Go to Checkout</Link>

                    <Link href="#" className="mt-2 font-semibold text-xs text-center text-[var(--color---7)] flex justify-center items-center w-64 h-9 rounded-[50px] bg-[var(--color---13)]">Go to Checkout <Image className="ml-2" src={Paypal} alt="paypal" /></Link>
                  </div>
                </div>
              </div>
              <div className="w-9 h-9 bg-red-200 rounded-full overflow-hidden">
                <Image src={Akash} className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </Container>
        </div>
      </nav>
    </>
  )
}

export default navbar







