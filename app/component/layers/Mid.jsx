import React from 'react'
import Container from '../layers/Container'

const Services = ({children}) => {
  return (
    <>
      <section id='services' className=' bg-[#F8F8F8] py-[48px] px-8 mb-[64px]'>
        <Container className='rounded-3xl bg-[#fff] p-8'>
            <h1 className='font-bold text-2xl leading-[117%] text-[#374151] font-dm'>
                {children}
            </h1>
        </Container>
      </section>
    </>
  )
}

export default Services