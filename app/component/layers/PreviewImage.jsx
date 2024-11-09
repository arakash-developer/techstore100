"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const PreviewImage = ({newdata}) => {
  let [preview,setPreview] = useState("https://www.startech.com.bd/image/cache/catalog/monitor/msi/491cqp/mpg-491cqp-qd-oled-06-500x500.webp")
  const handlePreviewImageChange = (previewImage) => {
    setPreview(previewImage);
  }

  return (
    <div className='cursor-pointer'>
      {
        newdata.map((item) => {
          return (
            <div className='flex' key={item.id}>
              <p>{item.title}</p>
              {
                item.images.map((image,index)=>(
                  <div key={index} className=""   onClick={() => handlePreviewImageChange(image)}>
                    <Image src={image} alt='a' width='100' height='100' />
                  </div>
                ))
              }
            </div>
          )
        })
      }


      <div className="mt-3">
      <Image src={preview} alt='a' width='500' height='500' />
      </div>

    </div>
  )
}

export default PreviewImage