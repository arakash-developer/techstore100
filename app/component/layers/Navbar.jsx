"use client"
import { IoLogoFacebook } from "react-icons/io";
import React, { useState } from 'react'
import Logo from '@/public/Logo.png'
import Cart from '@/public/jam_shopping-cart.png'
import Akash from '@/public/akash.png'
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoCloseSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Container from "./Container"
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Li from "./Li";
import { FaBarsStaggered } from "react-icons/fa6";



const navbar = () => {
  let [show, setShow] = useState(false);
  let handler = () => {
    setShow(!show);
  }
  return (
    <>
      <nav className="relative z-50">
        <div className="navtop bg-[var(--color---11)] py-2">
          <Container className='flex justify-between items-center'>
            <p className="font-semibold text-xs text-[var(--color---5)]">Mon-Thu: <span className="text-[var(--color---12)]">9:00 AM - 5:30 PM</span></p>
            <p className="font-semibold text-xs text-center text-[#acacac] invisible lg:visible">Visit our showroom in 1234 Street Adress City Address, 1234  <span className="text-[var(--color---12)] relative before:w-full before:h-[2px] before:absolute before:bg-[var(--color---12)] before:top-full before:left-0 before:rounded-full">  Contact Us</span></p>
            <div className="flex gap-x-4 items-center">
              <p className="font-semibold text-xs text-center text-[var(--color---12)]">Call Us: (00) 1234 5678</p>
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
              <Link href='#'>
                <Image src={Logo} alt={Logo} />
              </Link>
            </div>
            <ul className={`flex flex-col lg:flex-row gap-y-2 lg:gap-x-0 xl:gap-x-[40px] gap-x-3 items-center bg-red-300 w-full lg:w-auto py-4 lg:py-0 absolute left-0 top-0 lg:static transition-all ${show ?"visible top-full" :"invisible lg:visible"}`}>
              <Li className='' liText='Laptops' to='/laptop' />
              <Li className='' liText='Desktop PCs' to='/desktop' />
              <Li className='' liText='Networking Devices' to='/faq' />
              <Li className='' liText='Printers & Scanners' to='/contact' />
              <Li className='' liText='PC Parts' to='/about' />
              <Li className='' liText='All Other Products' to='/about' />
              <Li className='' liText='Repairs' to='/about' />
              <Link href='#' className="font-semibold text-sm  text-[var(--color---3)] inline-block rounded-3xl py-2 px-6 border-2 border-[var(--color---3)]">Our Deals</Link>
            </ul>

            <div className="flex items-center xl:gap-x-[25px] lg:gap-x-1 gap-3 cursor-pointer">
              <FaBarsStaggered className="lg:hidden" onClick={handler} />
              <FaSearch className="" />
              <div className="relative">
                <div className="flex justify-center items-center absolute left-[17px] bottom-[15px] w-4 h-4 bg-[var(--color---3)] rounded-full">
                  <p className="font-bold text-[0.63rem] text-center text-[var(--color---12)]">2</p>
                </div>
                <Image src={Cart} alt="Cart" />
              </div>
              <div className="w-9 h-9 bg-red-200 rounded-full overflow-hidden">
                <Image src={Akash} alt="" />
              </div>
            </div>
          </Container>
        </div>
      </nav>
    </>
  )
}

export default navbar







