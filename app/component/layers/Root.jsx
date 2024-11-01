import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Bannar from './Bannar'
import Footer from '../pages/Footer'
import Search from './Search'
import Home from '../pages/Home'


const Root = () => {
  return (
    <>
      <Navbar />
      <Search />
      <Outlet />
      <Footer />
    </>
  )
}
export default Root
