import React, { useEffect, useState,useContext} from 'react'
import Container from '../layers/Container'
import Breadcumb from '../layers/Breadcumb'
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import axios from 'axios';
import { v4 as uuidv4, v4 } from 'uuid';
// import { Contex } from '../../context/Quantity';


const SignUp = () => {
    let deleteAll =(e)=>{
        e.preventDefault();
        axios.delete("https://66f38f7c71c84d805879181b.mockapi.io/orebi_auth/1").then(()=>{
            console.log("Deleted");
        })
    }
    
    const bangladeshDivisions = [
        "Dhaka",
        "Chittagong",
        "Rajshahi",
        "Khulna",
        "Barisal",
        "Sylhet",
        "Rangpur",
        "Mymensingh"
    ];
    const bangladeshDistricts = [
        "Bagerhat",
        "Bandarban",
        "Barguna",
        "Barisal",
        "Bhola",
        "Bogra",
        "Brahmanbaria",
        "Chandpur",
        "Chapai Nawabganj",
        "Chittagong",
        "Chuadanga",
        "Comilla",
        "Cox's Bazar",
        "Dhaka",
        "Dinajpur",
        "Faridpur",
        "Feni",
        "Gaibandha",
        "Gazipur",
        "Gopalganj",
        "Habiganj",
        "Jamalpur",
        "Jashore",
        "Jhalokathi",
        "Jhenaidah",
        "Joypurhat",
        "Khagrachari",
        "Khulna",
        "Kishoreganj",
        "Kurigram",
        "Kushtia",
        "Lakshmipur",
        "Lalmonirhat",
        "Madaripur",
        "Magura",
        "Manikganj",
        "Meherpur",
        "Moulvibazar",
        "Munshiganj",
        "Mymensingh",
        "Naogaon",
        "Narail",
        "Narayanganj",
        "Narsingdi",
        "Natore",
        "Netrokona",
        "Nilphamari",
        "Noakhali",
        "Pabna",
        "Panchagarh",
        "Patuakhali",
        "Pirojpur",
        "Rajbari",
        "Rajshahi",
        "Rangamati",
        "Rangpur",
        "Satkhira",
        "Shariatpur",
        "Sherpur",
        "Sirajganj",
        "Sunamganj",
        "Sylhet",
        "Tangail",
        "Thakurgaon"
    ];


    const navigate = useNavigate();

    let [fname, setFname] = useState();
    let [fnameeer, setFnameeer] = useState("");

    let [lname, setlname] = useState();
    let [lnameeer, setLnameeer] = useState("");

    let [email, setemail] = useState();
    let [emaileer, setEmailerr] = useState("");

    let [number, setNumber] = useState();
    let [numbererr, setNumbererr] = useState("");

    let [address1, setAddress1] = useState();
    let [address1err1, setAddress1err1] = useState("");

    let [address2, setAddress2] = useState();
    let [address1err2, setAddress1err2] = useState("");

    let [city, setCity] = useState();
    let [cityerr, setCityerr] = useState("");

    let [post, setPost] = useState();
    let [posterr, setPosterr] = useState("");

    let [division, setDivision] = useState();
    let [divisionerr, setDivisionerr] = useState("");

    let [district, setDistrict] = useState();
    let [districterr, setDistricterr] = useState("");

    let [password, setPassword] = useState();
    let [passworderr, setPassworderr] = useState("");

    let [repassword, setrePassword] = useState();
    let [repassworderr, setrePassworderr] = useState("");

    let [check, setCheck] = useState(true);
    let [eye, setEye] = useState(false);

    let uid = uuidv4();
    let tokenid = uuidv4();

    let manegfname = (element) => {
        setFname(element.target.value);
        setFnameeer("");
    }

    let maneglname = (element) => {
        setlname(element.target.value);
        setLnameeer("");
    }

    let manegemail = (element) => {
        setemail(element.target.value);
        setEmailerr("");
    }

    let manegnumber = (element) => {
        setNumber(element.target.value);
        setNumbererr("");
    }

    let manegaddress1 = (element) => {
        setAddress1(element.target.value);
        setAddress1err1("");
    }

    let manegaddress2 = (element) => {
        setAddress2(element.target.value);
        setAddress1err2("");
    }

    let manegcity = (element) => {
        setCity(element.target.value);
        setCityerr("");
    }

    let manegpost = (element) => {
        setPost(element.target.value);
        setPosterr("");
    }

    let manegpassword = (element) => {
        setPassword(element.target.value);
        setPassworderr("");
    }

    let manegrepassword = (element) => {
        setrePassword(element.target.value);
        setrePassworderr("");
    }

    let manegdivision = (element) => {
        setDivision(element.target.value);
        setDivisionerr("");
    }

    let manegdistrict = (element) => {
        setDistrict(element.target.value);
        setDistricterr("");
    }

    let manegEye = () => {
        setEye(!eye)
    }

    let loginsavedata = (e) => {
        e.preventDefault();

        if (!fname) {
            setFnameeer("Enter a first name");
        }
        if (!lname) {
            setLnameeer("Enter a last name");
        }
        if (!email) {
            setEmailerr("Enter a valid email");
        }
        if (!number) {
            setNumbererr("Enter a valid phone number");
        }
        if (!address1) {
            setAddress1err1("Enter a address1");
        }
        if (!address2) {
            setAddress1err2("Enter a address2");
        }
        if (!city) {
            setCityerr("Enter a city");
        }
        if (!post) {
            setPosterr("Enter a Post Code");
        }
        if (!district) {
            setDistricterr("Sellect a district");
        }
        if (!division) {
            setDivisionerr("Sellect a division");
        }
        if (!password) {
            setPassworderr("Enter a valid password");
        }
        if (!repassword) {
            setrePassworderr("Enter a valid repassword");
        }
        else if (!/^(?=.*[0-9])/.test(password)) {
            setPassworderr("Password must contain one digit from 1 to 9");
        } else if (!/^(?=.*[a-z])/.test(password)) {
            setPassworderr("Password must contain one lowercase letter");
        }
        else if (!/^(?=.*[A-Z])/.test(password)) {
            setPassworderr("Password must contain one Uppercase letter");
        }
        else if (!/^(?=.*\W)/.test(password)) {
            setPassworderr("Password must contain one special character");
        }
        else if (!/^(?!.* ).{8,16}$/.test(password)) {
            setPassworderr("Password must be no-space and 8-16 characters long");
        }
        else if (!repassword) {
            setrePassworderr("Enter a re password");
        }
        else if (password != repassword) {
            setrePassworderr(`Match the password and repassword : ${eye ? password : ""}`);
        }
        else {
            localStorage.setItem('token',tokenid);
            localStorage.setItem('uuid',uid);
            signupsuccess();
            navigate("/account");
        }

    }

    let handlercheck = () => {
        setCheck(!check)
    }
    let header = {"Access-Control-Allow-Origin":"*"}; 
    let signupsuccess = ()=>{
        try {
            axios.post("https://66f38f7c71c84d805879181b.mockapi.io/orebi_auth",{
                uuid:uid,
                fname:fname,
                lname:lname,
                email :email,
                number:number,
                address1:address1,
                address2:address2,
                city:city,
                post:post,
                division:division,
                district:district,
                password:password,
                token:tokenid,
                header
            }).then(()=>{
             console.log("Reg Data Send...")
             
            })
         } catch (err) {
           console.error(err.message);
         }
    }

    

    return (
        <>
            <Container>
                <Breadcumb className='mt-[124px] mb-[127px]' three='hidden'/>
                <div className="border-b border-[#f0f0f0] mb-[57px]">
                    <p className='mb-[62px] max-w-[644px] font-normal text-base leading-[187%] text-[#767676] font-roboto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                </div>
                <h1 className='mb-[42px] font-bold text-[2.44rem] leading-none text-[#262626] font-dm'>Your Personal Details</h1>
                <div className="items flex flex-wrap gap-x-10 gap-y-6">
                    <div className="item  w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full capitalize font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">First Name</label>
                        <input onChange={manegfname} value={fname} className='w-full capitalize pb-[17px] outline-none border-b font-normal text-sm text-[#767676]' type="text" placeholder='first name' />
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{fnameeer}</p>
                    </div>
                    <div className="item w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full capitalize font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">Last Name</label>
                        <input onChange={maneglname} value={lname} className='w-full capitalize pb-[17px] outline-none border-b font-normal text-sm text-[#767676]' type="text" placeholder='Last Name' />
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{lnameeer}</p>
                    </div>
                    <div className="item w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full capitalize font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">Email address</label>
                        <input onChange={manegemail} value={email} className='w-full lowercase pb-[17px] outline-none border-b font-normal text-sm text-[#767676]' type="email" placeholder='company@domain.com' />
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{emaileer}</p>
                    </div>
                    <div className="item w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full capitalize font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">Telephone</label>
                        <input onChange={manegnumber} value={number} className='w-full capitalize pb-[17px] outline-none border-b font-normal text-sm text-[#767676]' type="number" placeholder='Your phone number' />
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{numbererr}</p>
                    </div>
                </div>
                <div className='border-[1px] border-[#f0f0f0] my-[60px]' />
                <h1 className='mb-[42px] font-bold text-[2.44rem] leading-none text-[#262626] font-dm'>New Customer</h1>
                <div className="items flex flex-wrap gap-x-10 gap-y-6">
                    <div className="item capitalize w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">Address 1</label>
                        <input onChange={manegaddress1} value={address1} className='w-full capitalize pb-[17px] outline-none border-b font-normal text-sm text-[#767676]' type="text" placeholder='4279 Zboncak Port Suite 6212' />
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{address1err1}</p>
                    </div>
                    <div className="item capitalize w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">Address 2</label>
                        <input onChange={manegaddress2} value={address2} className='w-full capitalize pb-[17px] outline-none border-b font-normal text-sm text-[#767676]' type="text" placeholder='4279 Zboncak Port Suite 6212' />
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{address1err2}</p>
                    </div>
                    <div className="item capitalize w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">City</label>
                        <input onChange={manegcity} value={city} className='w-full capitalize pb-[17px] outline-none border-b font-normal text-sm text-[#767676]' type="text" placeholder='Your city' />
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{cityerr}</p>
                    </div>
                    <div className="item capitalize w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">Post Code</label>
                        <input onChange={manegpost} value={post} className='w-full capitalize pb-[17px] outline-none border-b font-normal text-sm text-[#767676]' type="text" placeholder='05228' />
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{posterr}</p>
                    </div>
                    <div className="item capitalize w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">Division</label>
                        <select name="" id="" onChange={manegdivision} className='w-full capitalize pb-[17px] outline-none border-b font-normal text-sm text-[#767676] cursor-pointer'>
                            {
                                bangladeshDivisions.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                })
                            }
                        </select>
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{divisionerr}</p>
                    </div>
                    <div className="item capitalize w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">District</label>
                        <select onChange={manegdistrict} name="" id="" className='w-full capitalize pb-[17px] outline-none border-b font-normal text-sm text-[#767676] cursor-pointer'>
                            {
                                bangladeshDistricts.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                })
                            }
                        </select>
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{districterr}</p>
                    </div>
                </div>
                <div className='border-[1px] border-[#f0f0f0] my-[60px]' />
                <h1 className='mb-[42px] font-bold text-[2.44rem] leading-none text-[#262626] font-dm'>Your Password</h1>
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
                    <div className="item capitalize w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">Repeat Password</label>
                        <input onChange={manegrepassword} value={repassword} className='w-full pb-[17px] outline-none border-b font-normal text-sm text-[#767676]' type={eye ? "text" : "password"} placeholder='Repeat Password' />
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm normal-case'>{repassworderr}</p>
                        <div onClick={manegEye}>
                            {
                                eye ? <FaEye className='absolute right-2 top-1/2 cursor-pointer' /> : <FaEyeSlash className='absolute right-2 top-1/2 cursor-pointer' />
                            }
                        </div>
                    </div>
                </div>
                <hr className='my-[70px] h-[1px] bg-[#F0F0F0]' />
                <div className="">
                    <div className="flex items-center gap-4">
                        <div onClick={handlercheck} className={`h-3 cursor-pointer ${check ? "before:opacity-0" : "before:opacity-100"} w-3 border-solid border-[1px]  border-[#767676] relative before:absolute before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:bg-[#767676] before:h-2 before:w-2`}></div>
                        <p className='font-normal text-sm text-[#767676] font-dm'>I have read and agree to the Privacy Policy</p>
                    </div>
                    <div className="flex gap-x-8 items-center pt-4">
                        <p className='font-normal text-sm text-[#767676] font-dm'>Subscribe Newsletter</p>
                        <div className="flex items-center gap-x-4">
                            <div onClick={handlercheck} className={`h-3 cursor-pointer ${check ? "before:opacity-0" : "before:opacity-100"} w-3 border-solid border-[1px]  border-[#767676] relative before:absolute before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:bg-[#767676] before:h-2 before:w-2`}></div>
                            <p className='font-dm font-normal text-sm text-[#767676]'>Yes</p>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div onClick={handlercheck} className={`h-3 cursor-pointer ${check ? "before:opacity-0" : "before:opacity-100"} w-3 border-solid border-[1px]  border-[#767676] relative before:absolute before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:bg-[#767676] before:h-2 before:w-2`}></div>
                            <p className='font-dm font-normal text-sm text-[#767676]'>No</p>
                        </div>
                    </div>
                    <a href='' onClick={loginsavedata} className='mt-[27px] mb-[140px] py-4 px-[83px] cursor-pointer focus:text-white inline-block bg-[#262626] font-bold text-sm text-center text-[#fff]'>SignUp</a>
                    <a href='' onClick={deleteAll} className='mt-[27px] mb-[140px] ml-2 py-4 px-[83px] cursor-pointer focus:text-white inline-block bg-[#262626] font-bold text-sm text-center text-[#fff]'>DELETE ALL DATA</a>
                </div>
            </Container>
        </>
    )
}

export default SignUp