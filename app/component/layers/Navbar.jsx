import React, { useState } from 'react'
import Container from '../layers/Container'
// import logo from '../../../public/SoulSpace.png'
import logo from '/logo.png'
import { NavLink } from 'react-router-dom'
import Li from './Li'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";




const navbar = () => {
  let [show, setShow] = useState(false);
  let handler = () => {
    setShow(!show);
  }
  return (
    <>
      <nav className='py-8 bg-[#fff] relative'>
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
              <Li className='text-[#000] md:text-[#767676]' liText='Contacts' to='/about' />
              <Li className='text-[#000] md:text-[#767676]' liText='Journal' to='/contact' />
            </ul>


          </div>
        </Container>
      </nav>
    </>
  )
}

export default navbar