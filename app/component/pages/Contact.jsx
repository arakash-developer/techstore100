import React from 'react'
import Mid from '../layers/Mid'
import Container from '../layers/Container'
import Breadcumb from '../layers/Breadcumb'

const Contact = () => {
  return (
    <>
      <Container className='mt-[124px]'>
        <Breadcumb />
        <div className="form mt-[125px]">
          <h1 className='font-bold text-[2.44rem] leading-none text-[#262626] font-dm mb-[42px] font-dm'>Fill up a Form</h1>
          <div className="w-[780px]">
            <label htmlFor="" className='w-full font-bold text-base leading-[144%] text-[#262626] font-dm'>Name</label>
            <input type="text" placeholder='Your Name Here' className='w-full pt-[10px] pb-[16px] outline-none border-b mb-[23px] border-[#f0f0f0] font-dm' />
          </div>
          <div className="w-[780px]">
            <label htmlFor="" className='w-full font-bold text-base leading-[144%] text-[#262626] font-dm'>Email</label>
            <input type="text" placeholder='Your Email Here' className='w-full pt-[10px] pb-[16px] outline-none border-b mb-[23px] border-[#f0f0f0] font-dm' />
          </div>
          <div className="w-[780px]">
            <label htmlFor="" className='w-full font-bold text-base leading-[144%] text-[#262626] font-dm'>Messege</label>
            <textarea name="" id="" className='h-[120px] w-full outline-none border-b mb-8 font-normal text-sm text-[#767676] font-dm'>
              Your message here
            </textarea>
          </div>
          <button className='w-48 mb-[140px] h-12 bg-[#262626] text-[#fff] font-bold text-sm text-center font-dm'>Post</button>
        </div>
        <div className="mapplace w-[780px] h-[35.75rem]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9945106584005!2d90.37376327586588!3d23.747577850907646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf7201b55bb9%3A0xc9d1b33c66372335!2sAbahani%20Club%20Field!5e0!3m2!1sen!2sbd!4v1729450526855!5m2!1sen!2sbd" width="600" height="450" 
        className='w-full' referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </Container>
    </>
  )
}

export default Contact
