"use client"
import React, { useEffect, useState } from 'react'
import Container from '../component/layers/Container'
import Single from './Single'

const page = () => {
    let [product,setAllProducts] = useState([])
    let getdata = async () => {
        const blops = await fetch("https://akashtechstore.onrender.com/products")
        let res = await blops.json()
        setAllProducts(res)
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <Container className='my-40'>
            <div>Test Page -- rimjim</div>
            {/* <Single /> */}
            <div className="">
                {
                    product.map((item)=>(
                        <h1 key={item.id}>{item.title}</h1>
                    ))
                }
            </div>
        </Container>
    )
}

export default page