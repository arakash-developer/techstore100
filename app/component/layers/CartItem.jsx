import React, { useEffect, useState } from 'react'
import Close from '../../../public/close.png'
import { useDispatch } from 'react-redux'
import { changeQuantity } from '../../features/cart/CartSlice'

const CartItem = ({ data }) => {
    const { productId, quantity } = data
    let [detail, setDetail] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        let getData = async () => {
            let response = await fetch("https://dummyjson.com/products")
            let data = await response.json()
            let newdata = data.products
            let finddetails = newdata.filter(item => item.id === productId)[0]
            setDetail(finddetails)
        }
        getData();
    }, [productId])

    let handleMinusQuantity = (e) => {
        e.preventDefault()
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }))
    }

    let handlePlusQuantity = (e) => {
        e.preventDefault()
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }))
    }
    let hamdlerDelete = (e) => {
        e.preventDefault()
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }))
    }

    return (
        <>
            <div className="py-8 border-[1px] border-[#F0F0F0] grid grid-cols-12 content-center items-center">
                <div className="flex items-center col-span-6">
                    <button onClick={hamdlerDelete}>
                        <img className='inline-block cursor-pointer pl-5 pr-10' src={Close} alt="" />
                    </button>
                    <div className="w-24 h-24">
                        <img className='w-full h-full object-cover' src={detail.thumbnail} alt="" />
                    </div>
                    <h3 className='pl-5 font-bold text-base leading-[144%] text-[#262626] font-dm'>{detail.title}</h3>
                </div>
                <h2 className='col-span-2 font-bold text-xl text-[#262626] font-dm'>{Number(detail.price).toFixed(2)}$</h2>
                <div className='col-span-2 border-[1px] border-[#f0f0f0] w-36 h-9 grid grid-cols-3 items-center'>
                    <button onClick={handleMinusQuantity} className='font-normal text-base leading-[187%] text-[#767676] font-dm'>-</button>
                    <h3 className='font-normal text-center text-base leading-[187%] text-[#767676] font-dm'>{quantity}</h3>
                    <button onClick={handlePlusQuantity} className='font-normal border-none text-base leading-[187%] text-[#767676] font-dm'>+</button>
                </div>
                <h2 className='col-span-2 font-bold text-xl text-[#262626] font-dm'>{Number(detail.price * quantity).toFixed(2)}$</h2>
            </div>
        </>
    )
}

export default CartItem