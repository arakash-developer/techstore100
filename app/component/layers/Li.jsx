import Link from 'next/link'
import React from 'react'


const Li = ({liText,to,className}) => {
  return (
    <>
        <li>
            <Link className={`font-semibold text-sm text-center text-[var(--color---7)] ${className}`} href={to}>{liText}</Link>
        </li>
    </>
  )
}

export default Li