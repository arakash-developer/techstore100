import Link from 'next/link'
import Container from '../layers/Container'
import React from 'react'
// import logo from '/SoulSpace.png'
import Li from '../layers/Li'
import { MdFacebook } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";
import FootLi from '../layers/FootLi'




const Footer = () => {
    return (
        <>
            <section id='footer' className='pt-[47px] pb-[18px] bg-[var(--color---14)]'>
                <Container className=''>
                    <div className="flex justify-between items-center">
                        <div className="">
                            <h1 className='font-medium text-[2.38rem] leading-[133%] text-[var(--color---12)]'>Sign Up To Our Newsletter.</h1>
                            <p className='mt-2 font-light text-base leading-[133%] text-[var(--color---12)]'>Be the first to hear about the latest offers.</p>
                        </div>
                        <div className="flex items-center gap-x-6 mt-[25px]">
                            <input type="text" className='font-light text-sm leading-[143%] text-[var(--color---12)] rounded-[4px] w-96 h-[50px] px-3 inline-block bg-transparent border-2 border-[var(--color---12)]' placeholder='Your Email'/>
                            <button type='button' className='font-semibold text-sm text-center text-[var(--color---12)] rounded-[50px] w-36 h-[50px] bg-[var(--color---3)]'>Subscribe</button>
                        </div>
                    </div>

                    <div className="mt-[47px] flex flex-wrap gap-x-[143px] xl:gap-x-[110px] lg:gap-x-[78px] md:flex-wrap sm:flex-wrap gap-y-[30px]">
                        <div className="menu">
                            <h3 className='pb-[17px] font-bold text-base leading-[144%] text-[#262626] font-dm'>MENU</h3>
                            <ul className='flex flex-col gap-y-[6px]'>
                                <FootLi liText='Home' to='/home' />
                                <FootLi liText='Shop' to='/services' />
                                <FootLi liText='About Us' to='/faq' />
                                <FootLi liText='Contact Us' to='/about' />
                                <FootLi liText='Journal' to='/contact' />
                            </ul>
                        </div>
                        <div className="shop">
                            <h3 className='pb-[17px] font-bold text-base leading-[144%] text-[#262626] font-dm'>SHOP</h3>
                            <ul className='flex flex-col gap-y-[6px]'>
                                <FootLi liText='Category 1' to='/' />
                                <FootLi liText='Category 2' to='/' />
                                <FootLi liText='Category 3' to='/' />
                                <FootLi liText='Category 4' to='/' />
                                <FootLi liText='Category 5' to='/' />
                            </ul>
                        </div>
                        <div className="help">
                            <h3 className='pb-[17px] font-bold text-base leading-[144%] text-[#262626] font-dm'>HELP</h3>
                            <ul className='flex flex-col gap-y-[6px]'>
                                <FootLi liText='Privacy Policy' to='/' />
                                <FootLi liText='Terms & Conditions' to='/' />
                                <FootLi liText='Special E-shop' to='/' />
                                <FootLi liText='Shipping' to='/' />
                                <FootLi liText='Secure Payments' to='/' />
                            </ul>
                        </div>
                        <div className="contact">
                            <h3 className='pb-[17px] font-bold text-base leading-[144%] text-[#262626] font-dm'>(052) 611-5711 <br />
                                company@domain.com</h3>
                            <ul className='flex flex-col gap-y-[6px]'>
                                <FootLi liText='575 Crescent Ave. Quakertown, PA 18951' to='/' />
                            </ul>
                        </div>
                        <div className="logo xl:pl-[118px] pl-[0px]">
                            {/* <Link><img className='w-[122px] h-auto' src={orebi} alt="aa" /></Link> */}
                        </div>
                    </div>
                    <div className="bottom pt-[65px] pb-[52px] flex flex-wrap gap-y-2 justify-between items-center">
                        <div className="flex gap-x-[25px] items-center">
                            {/* <img src={fb} alt="" />
                            <img src={lindin} alt="" />
                            <img src={ins} alt="" /> */}
                        </div>
                        <p className='font-normal text-sm leading-[164%] text-right text-[#6d6d6d] font-dm'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Footer