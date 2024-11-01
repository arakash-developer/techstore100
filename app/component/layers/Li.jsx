import React from 'react'
import { NavLink } from 'react-router-dom'

const Li = ({liText,to,className}) => {
  return (
    <>
        <li>
            <NavLink  className={`font-normal text-sm text-[#767676] font-dm ${className}`} to={to}>{liText}</NavLink>
        </li>
    </>
  )
}

export default Li