import React, { useEffect, useState } from 'react'
import close from '../../../public/close.png'
const SearchCartItem = ({ data }) => {
    let { productId, quantity } = data;
    let [detail, setDetail] = useState([])
    useEffect(() => {
        let getData = async () => {
            let response = await fetch("https://dummyjson.com/products")
            let data = await response.json()
            let newdata = data.products
            let finddetails = newdata.filter(item => item.id === productId)[0];
            setDetail(finddetails)
            // console.log(finddetails);
        }
        getData();
    }, [productId])
    return (
        <div className=" bg-[#F5F5F3] h-[120px] center mb-1">
            <div className="h-[80px] grid grid-cols-12 gap-2 justify-between items-center">
                <div className="col-span-3">
                    <img className='' src={detail.thumbnail} alt="" />
                </div>
                <div className="col-span-8">
                    <h3 className='font-bold text-sm text-[#262626] font-dm'>{detail.title}</h3>
                    <h3 className='font-bold text-sm text-[#262626] font-dm'>{(detail.price * quantity).toFixed(2)}$</h3>
                </div>
                <div className="col-span-1">
                    <img src={close} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SearchCartItem