import React from 'react'
import Bannar from './component/layers/Bannar';
import NewProduct from './component/layers/NewProduct';
import CustomBuild from './component/layers/CustomBuild';

const page = () => {

  return (
    <>
      <Bannar />
      <NewProduct className='my-5'/>
      <CustomBuild className='my-5'/>
    </>
  )
}

export default page
