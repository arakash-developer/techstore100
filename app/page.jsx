import React from 'react'
import Bannar from './component/layers/Bannar';
import NewProduct from './component/layers/NewProduct';
import CustomBuild from './component/layers/CustomBuild';
import Zip from './component/layers/Zip';
import CustomSeriesTitle from './component/layers/CustomSeriesTitle';
import CustomSeries from './component/layers/CustomSeries';

const page = () => {

  return (
    <>
      <Bannar />
      <NewProduct className='my-5' />
      <Zip />
      <CustomBuild className='my-5' />
      <CustomSeriesTitle
        s1='MSI GS Series'
        s2='MSI GT Series'
        s3='MSI GL Series'
        s4='MSI GE Series'
      />
      <CustomSeries className='my-5'
        seriesImage='bg-msiseries'
        seriesTitle='MSI Laptops'
        seriesLink='#'
      />
      <CustomSeriesTitle
        s1='MSI Infinute Series'
        s2='MSI Triden'
        s3='MSI GL Series'
        s4='MSI Nightblade'
      />
      <CustomSeries className='my-5'
        seriesImage='bg-msidesktop'
        seriesTitle='MSI Desktops'
        seriesLink='#'
      />
      <CustomSeries className='mb-5'
        seriesImage='bg-gamingmonitor'
        seriesTitle='Gaming Monitors'
        seriesLink='#'
      />
    </>
  )
}

export default page
