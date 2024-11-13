import React from 'react'
import Container from './Container'

const CustomSeriesTitle = ({s1,s2,s3,s4}) => {
    return (
        <Container>
            <div className='flex gap-x-6 items-center cursor-pointer'>
                <h3 className='font-semibold underline text-base leading-[140%] text-center text-[var(--color---7)]'>{s1}</h3>
                <h3 className='font-semibold text-base leading-[140%] text-center text-[var(--color---20)] capitalize'>{s2}</h3>
                <h3 className='font-semibold text-base leading-[140%] text-center text-[var(--color---20)] capitalize'>{s3}</h3>
                <h3 className='font-semibold text-base leading-[140%] text-center text-[var(--color---20)] capitalize'>{s4}</h3>
            </div>
        </Container>
    )
}

export default CustomSeriesTitle