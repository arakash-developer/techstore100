import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Contex } from '../../context/Quantity';


const SignLog = () => {
    let tok = localStorage.getItem('token')
    let navigate = useNavigate()
    let [logtoken, setLogToken] = useState(false)
    useEffect(() => {
        if(tok){
            setLogToken(true)
        }else{
            setLogToken(false)
        }
    }, [tok])
    let logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('uuid')
        navigate('/home')
    }

    return (
        <>  {
                logtoken ?
                    <>
                        <div className='w-full'>
                            <div className="bg-[#fff] border-b hover:bg-black group w-full flex justify-center">
                                <h3 className='py-4 font-dm font-normal text-sm text-center group-hover:text-[#fff] text-[#262626] group-hover:font-bold'>My Account</h3>
                            </div>
                            <div onClick={logout} className="hover:bg-black bg-[#fff] group w-full flex justify-center">
                                <h3 className='py-4 group-hover:text-[#fff] text-[#262626] group-hover:font-bold text-sm text-center font-dm'>LogOut</h3>
                            </div>
                        </div>
                    </> : <>
                        <div className='w-full'>
                            <div onClick={() => { navigate('/signup') }} className="bg-[#fff] border-b hover:bg-black group w-full flex justify-center">
                                <h3 className='py-4 font-dm font-normal text-sm text-center group-hover:text-[#fff] text-[#262626] group-hover:font-bold'>SignUp</h3>
                            </div>
                            <div onClick={() => { navigate('/login') }} className="hover:bg-black bg-[#fff] group w-full flex justify-center">
                                <h3 className='py-4 group-hover:text-[#fff] text-[#262626] group-hover:font-bold text-sm text-center font-dm'>LogIn</h3>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default SignLog