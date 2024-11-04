import Link from 'next/link'
import React from 'react'


const FootLi = ({liText,to,className,span}) => {
  return (
    <>
        <li>
            <Link  className={`font-normal text-[0.81rem] leading-[140%] text-[var(--color---12)] ${className}`} href={to}>{liText} <span className='text-[var(--color---4)]'>{span}</span></Link>
        </li>
    </>
  )
}

export default FootLi