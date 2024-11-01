import React, { useEffect, useState, useContext } from 'react'
import Container from '../layers/Container'
import Breadcumb from '../layers/Breadcumb'
import Down from '../../../public/down.png';
import { useNavigate, useParams } from 'react-router-dom';
import { Contex } from '../../context/Quantity'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const ShoppingCart = () => {
    const carts = useSelector(state => state.cart.items);
    let nevigate = useNavigate();
    let [opens, setOpens] = useState(false)
    let {setSize, size } = useContext(Contex);
    let handlersize = () => {
        setOpens(!opens);
    }
    let totalAm = carts.reduce((prev, curr) => {
        return prev + curr?.price * curr?.quantity
      }, 0)

    return (
        <>
            <Container>
                <Breadcumb status='hidden' className='my-[124px]' three='hidden' />
                <div className="mb-5">
                    <div className="bg-[#f5f5f3] py-8 grid grid-cols-12 content-center">
                        <h3 className='col-span-6 pl-5 font-bold text-base leading-[144%] text-[#262626] font-dm'>Product</h3>
                        <h3 className='col-span-2 font-bold text-base leading-[144%] text-[#262626] font-dm'>Price</h3>
                        <h3 className='col-span-2 font-bold text-base leading-[144%] text-[#262626] font-dm'>Quantity</h3>
                        <h3 className='col-span-2 font-bold text-base leading-[144%] text-[#262626] font-dm'>Total</h3>
                    </div>


                    <div className="cart_inner">
                        {
                            carts.map((item,index)=>(
                                <CartItem key={index} data={item} />
                            ))
                        }
                        
                        <div className="flex justify-between items-center py-6 border-b border-r border-l border-[#F0F0F0] px-5">
                            <div className="flex items-center">
                                <button onClick={handlersize} className="flex focus:outline-none relative items-center justify-center border-[1px] border-[#f0f0f0] w-36 h-9 gap-x-[76px] px-5">
                                    <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>{size}</h3>
                                    <img src={Down} alt="" />
                                    <div className={`absolute bg-[#fff] top-full left-0 w-full ${opens ? "visible opacity-1" : "invisible opacity-0"}`}>
                                        <button onClick={(e) => { setSize(e.target.value) }} value='S' className='border hover:bg-teal-400 hover:border-teal-400 focus:outline-none py-1 w-full'>S</button>
                                        <button onClick={(e) => { setSize(e.target.value) }} value='M' className='border hover:bg-teal-400 hover:border-teal-400 focus:outline-none py-1 w-full'>M</button>
                                        <button onClick={(e) => { setSize(e.target.value) }} value='L' className='border hover:bg-teal-400 hover:border-teal-400 focus:outline-none py-1 w-full'>L</button>
                                        <button onClick={(e) => { setSize(e.target.value) }} value='XL' className='border hover:bg-teal-400 hover:border-teal-400 focus:outline-none py-1 w-full'>XL</button>
                                    </div>
                                </button>
                                <h3 className='font-bold text-sm text-[#262626] font-dm pl-6'>Apply coupon</h3>
                            </div>
                            <h3 className='font-bold text-sm text-right text-[#262626] font-dm capitalize'>Update cart</h3>
                        </div>
                    </div>

                    <div className="flex items-end flex-col">
                        <h3 className='font-bold text-xl text-[#262626] font-dm pt-[54px] pb-[24px] capitalize'>Cart totals</h3>
                        <div className="grid grid-cols-2 grid-rows-2 border-[2px] border-[#F0F0F0]">
                            <h3 className='pr-[234px] border-b-[2px] border-r-[2px] border-[#F0F0F0] pl-5 py-4 font-bold text-base leading-[144%] text-[#262626] font-dm'>Subtotal</h3>
                            <h3 className='pr-[234px] pl-5 py-4 border-b-[2px] border-[#F0F0F0] font-normal text-base leading-[187%] text-[#767676] font-dm'>{totalAm.toFixed(2)} $</h3>
                            <h3 className='pr-[234px] pl-5 py-4 border-r-[2px] border-[#F0F0F0] font-bold text-base leading-[144%] text-[#262626] font-dm'>Total</h3>
                            <h3 className='pr-[234px] pl-5 py-4 font-normal text-base text-[#262626] font-dm'>{totalAm.toFixed(2)} $</h3>
                        </div>
                        <div className="flex gap-x-5 items-center">
                            <button onClick={() => { nevigate("/shop") }} className='py-4 px-10 border-[1px] border-[#262626] text-[#262626] font-bold text-sm text-center hover:bg-[#262626] hover:text-[#fff] font-dm mt-8'>Back to Shop</button>
                            <button className='py-4 px-7 bg-[#262626] font-bold text-sm text-center text-[#fff] font-dm mt-8'>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ShoppingCart