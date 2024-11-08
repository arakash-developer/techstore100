"use client"
import React, { useEffect, useState } from 'react'

const page = () => {
    let [products,setProducts] = useState([]);
    useEffect(()=>{
        let getdata = async() =>{
            let blops = await fetch("https://techstorevercelapp.vercel.app/akash/api/products");
            let res = await blops.json()
            let result = await res.data.products
            console.log(result);
            setProducts(result)
        }
        getdata();
    },[])
  return (
    <div className='my-52'>
        {
            products.map((item)=>(
                <div className="" key={item.id}>
                  <h1>{item.title}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default page