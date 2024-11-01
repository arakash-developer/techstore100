import React from 'react'
import { NavLink } from 'react-router-dom'

const FootLi = ({liText,to,className}) => {
  return (
    <>
        <li>
            <NavLink  className={`capitalize font-normal text-sm leading-[164%] text-[#6d6d6d] font-dm ${className}`} to={to}>{liText}</NavLink>
        </li>
    </>
  )
}

export default FootLi