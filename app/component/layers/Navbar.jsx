import { IoLogoFacebook } from "react-icons/io";
// import React, { useState } from 'react'
// import Container from '../layers/Container'
// // import logo from '../../../public/SoulSpace.png'
import Logo from '@/public/Logo.png'
// import { NavLink } from 'react-router-dom'
// import Li from './Li'
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoCloseSharp } from "react-icons/io5";

import Container from "./Container"

import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Li from "./Li";



const navbar = () => {
  // let [show, setShow] = useState(false);
  // let handler = () => {
  //   setShow(!show);
  // }
  return (
    <>
      {/* <nav className='py-8 bg-[#fff] relative'>
        <Container className='flex items-center justify-between'>
          <div className="flex flex-col md:flex-row items-center w-full">

            <div className="flex items-center justify-between w-full md:block md:w-auto">
              <NavLink to='/'>
                <img src={logo} alt="aa" />
              </NavLink>
              <div className="hamburger md:hidden">
                <NavLink className='bg-red-200' onClick={handler} to='/'>
                  {
                    show ? <IoCloseSharp /> : <GiHamburgerMenu />
                  }
                </NavLink>
              </div>
            </div>

            <ul className={`flex gap-x-[40px] mynav w-full justify-center pl-[12px] absolute left-0 top-full z-[99999]  py-4 md:static  flex-col md:flex-row bg-slate-200 md:bg-transparent transition-all duration-100 }`}>
              <Li className='text-[#000] md:text-[#767676]' liText='Home' to='/home' />
              <Li className='text-[#000] md:text-[#767676]' liText='Shop' to='/shop' />
              <Li className='text-[#000] md:text-[#767676]' liText='About' to='/faq' />
              <Li className='text-[#000] md:text-[#767676]' liText='Journal' to='/contact' />
              <Li className='text-[#000] md:text-[#767676]' liText='Contacts' to='/about' />
            </ul>


          </div>
        </Container>
      </nav> */}
      <nav>

        <div className="navtop bg-[var(--color---11)] py-2">
          <Container className='flex justify-between items-center'>
            <p className="font-semibold text-xs text-[var(--color---5)]">Mon-Thu: <span className="text-[var(--color---12)]">9:00 AM - 5:30 PM</span></p>
            <p className="font-semibold text-xs text-center text-[#acacac]">Visit our showroom in 1234 Street Adress City Address, 1234  <span className="text-[var(--color---12)] relative before:w-full before:h-[2px] before:absolute before:bg-[var(--color---12)] before:top-full before:left-0 before:rounded-full">  Contact Us</span></p>
            <div className="flex gap-x-4 items-center">
              <p className="font-semibold text-xs text-center text-[var(--color---12)]">Call Us: (00) 1234 5678</p>
              <div className="flex gap-x-2 items-center text-[var(--color---12)]">
                <IoLogoFacebook />
                <AiFillInstagram />
              </div>
            </div>
          </Container>
        </div>

        <div className="nav py-6 bg-red-300">
          <Container className='flex justify-between items-center'>
            <div className="">
              <Link href='#'>
                <Image src={Logo} alt={Logo} />
              </Link>
            </div>
            <ul className={`flex gap-x-[40px] mynav w-full justify-center pl-[12px] absolute left-0 top-full z-[99999]  py-4 md:static  flex-col md:flex-row bg-slate-200 md:bg-transparent transition-all duration-100 }`}>
              <Li className='' liText='Home' to='/home' />
              <Li className='' liText='Shop' to='/shop' />
              <Li className='' liText='About' to='/faq' />
              <Li className='' liText='Journal' to='/contact' />
              <Li className='' liText='Contacts' to='/about' />
            </ul>

            <div className="button">a</div>
          </Container>
        </div>
      </nav>
    </>
  )
}

export default navbar