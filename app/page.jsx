import React from 'react'
import Bannar from './component/layers/Bannar';
import NewProduct from './component/layers/NewProduct';
import CustomBuild from './component/layers/CustomBuild';
import Zip from './component/layers/Zip';

const page = () => {

  return (
    <>
      <Bannar />
      <NewProduct className='my-5'/>
      <Zip />
      <CustomBuild className='my-5'/>
    </>
  )
}

export default page
