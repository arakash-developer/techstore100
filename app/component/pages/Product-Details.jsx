import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Container from '../layers/Container';
import Down from '../../../public/down3.png'
import Star from '../../../public/Star.png'
import Breadcumb from '../layers/Breadcumb';
import { Contex } from '../../context/Quantity'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/CartSlice';

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [opens, setOpens] = useState(false);
  let [items, setItems] = useState([]);
  let [singleproduct, setSingleProduct] = useState([]);
  let [review, setReview] = useState([]);
  let { id } = useParams();
  const carts = useSelector(state => state.cart.items);
  useEffect(() => {
    let getdata = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      let newdata = data.products;
      // console.log(newdata);
      let customProduct = newdata.filter((data) => {
        return data.id == id
      })
      setSingleProduct(customProduct)

    }
    getdata();
  }, [])

  
  // let mew = carts.filter((item)=>{
  //   return item.productId == id;
  // }) 
  // console.log(mew);
  
  
  
  const [count, setCount] = useState(1);
  let [insize, setInsize] = useState("S");
  let { setSize } = useContext(Contex);

  let handlerDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  let handlerIncrement = () => {
    setCount(count + 1);
  }

  let addtocartlist = (e) => {
    e.preventDefault();
    dispatch(addToCart({
      productId : Number(id),
      quantity: count ,
      price : singleproduct[0].price,
    }))
    setSize(insize);
    navigate(`/cart`);
  }
  let handlersize = () => {
    setOpens(!opens);
  }

  return (
    <>
      <Container>
        <Breadcumb className='mt-[83px] mb-[130px]' three='hidden' />
        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          <div className="">

            {
              singleproduct.map((data, index) => (
                <img key={index} className='w-[780px] h-[780px] object-contain' src={data.images[0] ? data.images[0] : data.thumbnail} alt="aa" />
              ))
            }
          </div>
          <div className="">
            {
              singleproduct.map((data, index) => (
                <img key={index} className='w-[780px] h-[780px] object-contain' src={data.images[1] ? data.images[1] : data.thumbnail} alt="" />
              ))
            }
          </div>
          <div className="">
            {
              singleproduct.map((data, index) => (
                <img key={index} className='w-[780px] h-[780px] object-contain' src={data.images[2] ? data.images[2] : data.thumbnail} alt="" />
              ))
            }

          </div>
          <div className="">
            {
              singleproduct.map((data, index) => (
                <img key={index} className='w-[780px] h-[780px] object-contain' src={data.images[3] ? data.images[3] : data.thumbnail} alt="" />
              ))
            }

          </div>
        </div>

        <div className="productdetails mt-[66px]">
          <h1 className='font-bold text-[2.44rem] leading-none text-[#262626] font-dm capitalize'>
            {
              singleproduct.map((data) => (
                data.title
              ))
            }
          </h1>

          <div className="mt-[15px] mb-[24px] flex gap-x-[25px] items-center">
            <div className="flex gap-x-[2px] items-center">
              <img className='w-[13px] h-[12px]' src={Star} alt="" />
              <img className='w-[13px] h-[12px]' src={Star} alt="" />
              <img className='w-[13px] h-[12px]' src={Star} alt="" />
              <img className='w-[13px] h-[12px]' src={Star} alt="" />
              <img className='w-[13px] h-[12px]' src={Star} alt="" />
            </div>
            <p className='font-normal text-sm text-[#767676] font-dm capitalize'>{review.length} Review</p>
          </div>
          <div className="flex gap-x-[22px] mb-[26px] items-center">
            <del className='font-normal flex items-center text-base text-[#767676] font-dm'>$

              {
                singleproduct.map((data) => (
                  data.price * 2
                ))
              }

            </del>
            <h1 className='font-bold text-xl flex text-[#262626] font-dm '>$
              {
                singleproduct.map((data) => (
                  data.price
                ))
              }
            </h1>
          </div>

          <div className="max-w-[780px]">
            <hr className='mb-[29px] ' />
            <div className="flex gap-x-[53px] items-center mb-[30px]">
              <h3 className='font-dm uppercase font-bold text-base leading-[144%] text-[#262626]'>color:</h3>
              <div className="flex gap-x-[15px] items-center relative">
                <div className="w-5 h-5 absolute left-0 hover:translate-x-[-5px] top-1/2 -translate-y-1/2 bg-[#979797] rounded-[50%] hover:h-[28px] hover:w-[28px] cursor-pointer"></div>
                <div className="w-5 h-5 absolute left-[30px] hover:translate-x-[-5px] top-1/2 -translate-y-1/2 bg-[#FF8686] rounded-[50%] hover:h-[28px] hover:w-[28px] cursor-pointer"></div>
                <div className="w-5 h-5 absolute left-[60px] hover:translate-x-[-5px] top-1/2 -translate-y-1/2 bg-[#7ED321] rounded-[50%] hover:h-[28px] hover:w-[28px] cursor-pointer"></div>
                <div className="w-5 h-5 absolute left-[90px] hover:translate-x-[-5px] top-1/2 -translate-y-1/2 bg-[#B6B6B6] rounded-[50%] hover:h-[28px] hover:w-[28px] cursor-pointer"></div>
                <div className="w-5 h-5 absolute left-[120px] hover:translate-x-[-5px] top-1/2 -translate-y-1/2 bg-[#15CBA5] rounded-[50%] hover:h-[28px] hover:w-[28px] cursor-pointer"></div>
              </div>
            </div>

            <div className="mb-[30px] flex gap-x-[76px] items-center">
              <h3 className='font-dm uppercase font-bold text-base leading-[144%] text-[#262626]'>SIZE:</h3>
              <button onClick={handlersize} className="flex focus:outline-none relative items-center justify-center border-[1px] border-[#f0f0f0] w-36 h-9 gap-x-[76px] px-5">
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>{insize}</h3>
                <img src={Down} alt="" />
                <div className={`absolute bg-[#fff] top-full left-0 w-full ${opens ? "visible opacity-1" : "invisible opacity-0"}`}>
                  <button onClick={(e) => { setInsize(e.target.value) }} value='S' className='border hover:bg-teal-400 hover:border-teal-400 focus:outline-none py-1 w-full'>S</button>
                  <button onClick={(e) => { setInsize(e.target.value) }} value='M' className='border hover:bg-teal-400 hover:border-teal-400 focus:outline-none py-1 w-full'>M</button>
                  <button onClick={(e) => { setInsize(e.target.value) }} value='L' className='border hover:bg-teal-400 hover:border-teal-400 focus:outline-none py-1 w-full'>L</button>
                  <button onClick={(e) => { setInsize(e.target.value) }} value='XL' className='border hover:bg-teal-400 hover:border-teal-400 focus:outline-none py-1 w-full'>XL</button>
                </div>
              </button>
            </div>
            <div className="mb-[30px] flex gap-x-[28px] items-center">
              <h3 className='font-dm uppercase font-bold text-base leading-[144%] text-[#262626]'>count:</h3>
              <div className="border-[1px] border-[#f0f0f0] w-36 h-9 grid grid-cols-3 items-center">
                <button onClick={handlerDecrement} className='font-normal text-base leading-[187%] text-[#767676] font-dm'>-</button>
                <h3 className='font-normal text-center text-base leading-[187%] text-[#767676] font-dm'>{count}</h3>
                <button onClick={handlerIncrement} className='font-normal border-none text-base leading-[187%] text-[#767676] font-dm'>+</button>
              </div>
            </div>
            <hr className='bg-[#f0f0f0] mb-5' />
            <div className="flex gap-x-[27px] items-center">
              <h3 className='font-bold text-base leading-[144%] text-[#262626] font-dm'>STATUS:</h3>
              <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>In Stock</h3>
            </div>
            <hr className='bg-[#f0f0f0] mt-5 mb-7' />
            <div className="flex gap-x-[20px] items-center">
              <button className='px-12 py-4 border-[1px] border-[#262626] font-bold text-sm text-center text-[#262626] font-dm'>Add to Wish List</button>
              <button className='px-12 py-4 border-[1px] bg-[#262626] text-[#fff] font-bold text-sm text-center font-dm' onClick={addtocartlist}>Add to Cart List</button>
            </div>
            <hr className='bg-[#f0f0f0] my-6' />
            <h3 className='font-bold text-base leading-[144%] text-[#262626] font-dm'>FEATURES  & DETAILS</h3>
            <hr className='bg-[#f0f0f0] my-6' />
            <h3 className='font-bold text-base leading-[144%] text-[#262626] font-dm'>SHIPPING & RETURNS</h3>
            <hr className='bg-[#f0f0f0] my-6' />
            <p className='mt-5 mb-[123px] font-normal text-base leading-[187%] text-[#767676] font-dm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="description">
            <div className="flex items-center gap-x-16">
              <h3 className='font-normal text-xl leading-[145%] text-center text-[#767676] font-dm'>Description</h3>
              <h3 className='font-bold text-xl text-[#262626] font-dm'>Reviews ({review.length})</h3>
            </div>
            <p className='mt-5 mb-4 font-normal text-sm leading-[214%] capitalize text-[#767676] font-dm'>{review.length} review for Product</p>

            <div className="reviews">
              {
                review.map((data, index) => {
                  return <div key={index}>
                    <hr className='bg-[#f0f0f0] mb-6' />
                    <div className="flex items-center gap-x-9">
                      <h3 className='font-normal text-base leading-[187%] text-[#262626] font-dm'>{data.reviewerName}</h3>
                      <div className="flex gap-x-[2px] items-center">
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                      </div>
                    </div>
                    <p className='py-4 font-normal text-base leading-[187%] text-[#767676] font-dm'>{data.comment}</p>
                    <hr className='bg-[#f0f0f0] mb-6' />
                  </div>
                })
              }
            </div>

            <div className="mt-[53px] max-w-[780px]">
              <h3 className='mb-[48px] font-bold text-xl text-[#262626] font-dm capitalize'>Add a Review</h3>
              <div className="w-full">
                <label className='w-full mb-[10px] font-bold text-base leading-[144%] text-[#262626] font-dm'>Name</label>
                <input className='w-full border-b-[1px] font-normal text-sm text-[#767676] font-dm  border-[#F0F0F0] pb-4 outline-none' type="text" placeholder='Your name here' />
              </div>
              <div className="w-full mt-6">
                <label className='w-full mb-[10px] font-bold text-base leading-[144%] text-[#262626] font-dm'>Email</label>
                <input className='w-full border-b-[1px] font-normal text-sm text-[#767676] font-dm  border-[#F0F0F0] pb-4 outline-none' type="text" placeholder='Your email here' />
              </div>
              <div className="w-full mt-6">
                <label className='w-full mb-[10px] font-bold text-base leading-[144%] text-[#262626] font-dm'>Review</label>
                <input className='w-full border-b-[1px] font-normal text-sm text-[#767676] font-dm  border-[#F0F0F0] pb-20 outline-none' type="text" placeholder='Your review here' />
              </div>
              <div className="flex items-center mt-7 gap-x-4 mb-5">
                <button onClick={() => navigate(`/shop`)} className='px-12 py-4 w-[200px] border-[1px] text-[#262626] border-[#262626] hover:bg-[#262626] hover:text-[#fff] font-bold text-sm text-center font-dm'>Back</button>
                <button className='px-12 py-4 w-[200px] border-[1px] bg-[#262626] text-[#fff] font-bold text-sm text-center font-dm'>Post</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Product