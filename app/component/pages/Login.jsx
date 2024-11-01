import React, { useEffect, useState } from 'react'
import Container from '../layers/Container'
import Breadcumb from '../layers/Breadcumb'
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import axios from 'axios';


const Login = () => {
    const navigate = useNavigate()
    let [email, setemail] = useState()
    let [emaileer, setEmailerr] = useState("")
    let [password, setPassword] = useState()
    let [passworderr, setPassworderr] = useState("")
    let [eye, setEye] = useState(false)
    let manegemail = (element) => {
        setemail(element.target.value);
        setEmailerr("");
    }

    let manegpassword = (element) => {
        setPassword(element.target.value);
        setPassworderr("");
    }
    let manegEye = () => {
        setEye(!eye)
    }

    let loginsavedata = (e) => {
        e.preventDefault();
        if (!email) {
            setEmailerr("Enter a valid email");
        }
        if (!password) {
            setPassworderr("Enter a valid password");
        }
        else {
           
        }
    }
   
    return (
        <>
            <Container>
                <Breadcumb className='mt-[124px] mb-[127px]' three='hidden' />
                <div className="border-b border-[#f0f0f0] mb-[57px]">
                    <p className='mb-[62px] max-w-[644px] font-normal text-base leading-[187%] text-[#767676] font-roboto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                </div>
                <h1 className='mb-[42px] font-bold text-[2.44rem] leading-none text-[#262626] font-dm'>Your Personal Details</h1>
                <div className="items flex flex-wrap gap-x-10 gap-y-6">
                    <div className="item w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full capitalize font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">Email address</label>
                        <input onChange={manegemail} value={email} className='w-full lowercase pb-[17px] outline-none border-b font-normal text-sm text-[#767676]' type="email" placeholder='company@domain.com' />
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{emaileer}</p>
                    </div>
                </div>
                <div className="items flex flex-wrap gap-x-10 gap-y-6">
                    <div className="item capitalize w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">Password</label>
                        <input onChange={manegpassword} value={password} className='w-full pb-[17px] outline-none border-b font-normal text-sm text-[#767676]' type={eye ? "text" : "password"} placeholder='Password' />
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{passworderr}</p>
                        <div onClick={manegEye}>
                            {
                                eye ? <FaEye className='absolute right-2 top-1/2 cursor-pointer' /> : <FaEyeSlash className='absolute right-2 top-1/2 cursor-pointer' />
                            }
                        </div>
                    </div>
                </div>

                <a href='' onClick={loginsavedata} className='mt-[27px] mb-[140px] py-4 px-[83px] cursor-pointer focus:text-white inline-block bg-[#262626] font-bold text-sm text-center hover:text-white text-[#fff]'>LogIn</a>
            </Container>
        </>
    )
}

export default Login