import Link from 'next/link'
import Container from './Container'
import React from 'react'
import FootLi from './FootLi'
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import Image from 'next/image';
import Paypal from '@/public/paypal2.png'
import Visa from '@/public/visa.png'
import Maestro from '@/public/maestro.png'
import Discover from '@/public/discover.png'
import America from '@/public/american-express.png'


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
                            <input type="text" className='font-light text-sm leading-[143%] text-[var(--color---12)] rounded-[4px] w-96 h-[50px] px-3 inline-block bg-transparent border-2 border-[var(--color---12)] placeholder-[var(--color---12)]' placeholder='Your Email' />
                            <button type='button' className='font-semibold text-sm text-center text-[var(--color---12)] rounded-[50px] w-36 h-[50px] bg-[var(--color---3)]'>Subscribe</button>
                        </div>
                    </div>

                    <div className="mt-[50px] flex flex-wrap gap-x-[78px] items-start pb-9 border-b border-[var(--color---16)]">
                        <div className="Information">
                            <h3 className='font-bold text-sm leading-[100%] text-[var(--color---15)]'>Information</h3>
                            <ul className='mt-8 flex flex-col gap-y-2'>
                                <FootLi liText='About Us' to='/about-us' />
                                <FootLi liText='About Zip' to='/about-zip' />
                                <FootLi liText='Privacy Policy' to='/privacy-policy' />
                                <FootLi liText='Search' to='/search' />
                                <FootLi liText='Terms' to='/terms' />
                                <FootLi liText='Orders and Returns' to='/orders-and-returns' />
                                <FootLi liText='Contact Us' to='/contact-us' />
                                <FootLi liText='Advanced Search' to='/advanced-search' />
                                <FootLi liText='Newsletter Subscription' to='/newsletter-subscription' />
                            </ul>
                        </div>
                        <div className="PC Parts">
                            <h3 className='font-bold text-sm leading-[100%] text-[var(--color---15)]'>PC Parts</h3>
                            <ul className='mt-8 flex flex-col gap-y-2'>
                                <FootLi liText='CPUs' to='/cpus' />
                                <FootLi liText='Add-On Cards' to='/add-on-cards' />
                                <FootLi liText='Hard Drives (Internal)' to='/hard-drives-internal' />
                                <FootLi liText='Graphic Cards' to='/graphic-cards' />
                                <FootLi liText='Keyboards / Mice' to='/keyboards-mice' />
                                <FootLi liText='Cases / Power Supplies / Cooling' to='/cases-power-supplies-cooling' />
                                <FootLi liText='RAM (Memory)' to='/ram-memory' />
                                <FootLi liText='Software' to='/software' />
                                <FootLi liText='Speakers / Headsets' to='/speakers-headsets' />
                                <FootLi liText='Motherboards' to='/motherboards' />
                            </ul>
                        </div>
                        <div className="Desktop PCs">
                            <h3 className='font-bold text-sm leading-[100%] text-[var(--color---15)]'>Desktop PCs</h3>
                            <ul className='mt-8 flex flex-col gap-y-2'>
                                <FootLi liText='Custom PCs' to='/custom-pcs' />
                                <FootLi liText='Servers' to='/servers' />
                                <FootLi liText='MSI All-In-One PCs' to='/msi-all-in-one-pcs' />
                                <FootLi liText='HP/Compaq PCs' to='/hp-compaq-pcs' />
                                <FootLi liText='ASUS PCs' to='/asus-pcs' />
                                <FootLi liText='Tecs PCs' to='/tecs-pcs' />
                            </ul>
                        </div>

                        <div className="Laptops">
                            <h3 className='font-bold text-sm leading-[100%] text-[var(--color---15)]'>Laptops</h3>
                            <ul className='mt-8 flex flex-col gap-y-1'>
                                <FootLi liText='Everyday Use Notebooks' to='/everyday-use-notebooks' />
                                <FootLi liText='MSI Workstation Series' to='/msi-workstation-series' />
                                <FootLi liText='MSI Prestige Series' to='/msi-prestige-series' />
                                <FootLi liText='Tablets and Pads' to='/tablets-and-pads' />
                                <FootLi liText='Netbooks' to='/netbooks' />
                                <FootLi liText='Infinity Gaming Notebooks' to='/infinity-gaming-notebooks' />
                            </ul>
                        </div>
                        <div className="Address">
                            <h3 className='font-bold text-sm leading-[100%] text-[var(--color---15)]'>Address</h3>
                            <ul className='mt-8 flex flex-col gap-y-1'>
                                <FootLi liText='Address: 1234 Street Adress City Address, 1234' to='#' />
                                <FootLi liText='Phones:' span=' (00) 1234 5678' to='#' />
                                <FootLi liText='We are open: Monday-Thursday: 9:00 AM - 5:30 PM' to='#' />
                                <FootLi liText='Friday: 9:00 AM - 6:00 PM' to='#' />
                                <FootLi liText='Saturday: 11:00 AM - 5:00 PM' to='#' />
                                <FootLi liText='E-mail:' span='shop@email.com' to='#' />
                            </ul>
                        </div>
                    </div>
                    <div className="py-5 flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <IoLogoFacebook className='text-[var(--color---17)] w-[18px] h-[18px]' />
                            <AiFillInstagram className='text-[var(--color---17)] w-[18px] h-[18px]' />
                        </div>
                        <div className="flex items-center gap-x-[10px]">
                            <Image src={Paypal} alt={Paypal} />
                            <Image src={Visa} alt={Visa} />
                            <Image src={Maestro} alt={Maestro} />
                            <Image src={Discover} alt={Discover} />
                            <Image src={America} alt={America} />
                        </div>
                        <p className='font-medium text-xs leading-[133%] text-right text-[var(--color---17)]'>Copyright © 2020 Shop Pty. Ltd.</p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Footer