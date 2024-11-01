import React from 'react'
import love from '../../../public/Icon_heart.png';
import compare from '../../../public/Icon_compare.png';
import cartimg from '../../../public/Icon_cart (1).png';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/CartSlice';

const Item = ({ productTitle, productImg, productPrice, productTag, productColor, productid, className }) => {
    const carts = useSelector(state => state.cart.items);
    const navigate = useNavigate();
    let dispatch = useDispatch();
    let handleraddtoCart = (e) => {
        e.preventDefault();
        // console.log(carts);
        dispatch(addToCart({
            productId: productid,
            quantity: 1,
            price: productPrice,

        }))
    }

    return (
        <>
            <div className={`item w-[370px] relative group ${className}`}>
                <div className="bg-slate-200 h-[370px]">
                    <img onClick={() => { navigate(`/products/details/${productid}`) }} className='object-cover
                     w-full h-full' src={productImg ? productImg : null} alt="productImg" />
                </div>

                <div onClick={() => { navigate(`/products/details/${productid}`) }} className="group-hover:bg-[#ebf0fa] z-20">
                    <div className="flex justify-between pt-[24px] xl:pt-[16px] xl:pb-[12px] pb-[15px]">
                        <h2 className='font-dm  font-bold text-xl xl:text-md text-[#262626] capitalize'>{productTitle ? productTitle : null}</h2>
                        <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>${productPrice ? productPrice : null}</h3>
                    </div>
                    <div className='font-normal text-base leading-[187%] text-[#767676] font-dm capitalize'>{productColor ? productColor : <h5 className='text-transparent'>None</h5>}</div>
                </div>

                <div className="overlay tag absolute left-[40px] top-[20px] py-[9px] xl:py-[5px] xl:px-[22px] px-[30px] bg-[#262626]">
                    <h4 className='font-bold text-sm  xl:text-[12px] text-[#fff] capitalize'>{productTag ? `${productTag}%` : "New"}</h4>
                </div>

                <div className="overlay absolute left-0 bottom-0 group-hover:bottom-[78px] opacity-0 group-hover:opacity-100 transition-all duration-100 bg-[#fff] z-10 w-full 2xl:h-[156px] xl:h-[100px]">
                    <ul className='text-right pr-[30px] py-[26px] h-full flex flex-col justify-between'>
                        <li><a className='font-normal text-base text-right text-[#767676] font-dm' href="#">Add to Wish List <img className='inline-block pl-4 my' src={love} alt="" /></a></li>
                        <li><a className='font-normal text-base text-right text-[#767676] font-dm' href="#">Compare <img className='inline-block pl-4 my' src={compare} alt="" /></a></li>
                        <li><a className='font-normal text-base text-right text-[#767676] font-dm' href="#" onClick={handleraddtoCart}>Add to Cart <img className='inline-block pl-4 my' src={cartimg} alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Item