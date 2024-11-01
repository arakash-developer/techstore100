import React, { useEffect, useState } from 'react'
import Container from '../layers/Container'
import Breadcumb from '../layers/Breadcumb'
import dot1 from '../../../public/dots.png'
import dot2 from '../../../public/dots2.png'
import Path from '../../../public/path.png'
import Paginate from '../layers/Paginate'


const Productss = () => {
  let [itemperpage, setItemperpage] = useState(12);
  let [catagory, setCatagory] = useState("regular");
  let manegperpage = (element) => {
    setItemperpage(element.target.value);
  }
  let catg = ["Regular", "Beauty", "Fragrances", "Furniture", "Groceries", "Electronic"];
  return (
    <>
      <Container>
        <Breadcumb className='mt-[83px] mb-[130px]' />
        <div className="grid grid-cols-4">
          <div className="pr-10 bg-red">
            <h2 className='font-bold text-xl text-[#262626] font-dm capitalize'>Shop by Category</h2>

            <div className="mt-[35px] mb-[53px] flex flex-col gap-y-5">
              {
                catg.map((item, index) => (
                  <div key={index} className="flex items-center justify-between pb-[19px] border-b">
                    <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>{item}</h3>
                    <img src={Path} alt="" />
                  </div>
                ))
              }
            </div>

            <h2 className='font-bold text-xl text-[#262626] font-dm capitalize'>Shop by Color</h2>

            <div className="mt-[35px] mb-[53px] flex flex-col gap-y-5">
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <div className="h-[11px] w-[11px] bg-[#000000] rounded-full"></div>
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Black</h3>
              </div>
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <div className="h-[11px] w-[11px] bg-[#FF8686] rounded-full"></div>
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Pink</h3>
              </div>
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <div className="h-[11px] w-[11px] bg-[#7ED321] rounded-full"></div>
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Green</h3>
              </div>
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <div className="h-[11px] w-[11px] bg-[#B6B6B6] rounded-full"></div>
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Off White</h3>
              </div>
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <div className="h-[11px] w-[11px] bg-[#ff2222] rounded-full"></div>
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Red</h3>
              </div>
            </div>
            <h2 className='font-bold text-xl text-[#262626] font-dm capitalize'>Shop by Brand</h2>

            <div className="mt-[35px] mb-[53px] flex flex-col gap-y-5">
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Chic Cosmetics</h3>
              </div>
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Nail Couture</h3>
              </div>
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Furniture Co</h3>
              </div>
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Bath Trends</h3>
              </div>
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Knoll</h3>
              </div>
            </div>
            <h2 className='font-bold text-xl text-[#262626] font-dm capitalize'>Shop by Price</h2>

            <div className="mt-[35px] mb-[53px] flex flex-col gap-y-5">
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>$0.00 - $9.99</h3>
              </div>
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>$10.00 - $19.99</h3>
              </div>
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>$20.00 - $29.99</h3>
              </div>
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>$30.00 - $39.99</h3>
              </div>
              <div className="flex items-center gap-x-[10px] pb-[19px] border-b">
                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>$40.00 - $69.99</h3>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex justify-between items-center mb-[60px]">
              <div className="icon">
                <div className="flex items-center gap-x-5">
                  <div className="w-[36px] h-[36px] bg-[#262626] flex justify-center items-center">
                    <img src={dot1} alt="" />
                  </div>
                  <div className="w-[36px] h-[36px] border border-solid border-[#F0F0F0] flex justify-center items-center">
                    <img src={dot2} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex gap-x-[40px] items-center">
                <div className="flex gap-x-[14px] items-center">
                  <p className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Sort by:</p>
                  <select onChange={(e) => { setCatagory(e.target.value); <Paginate /> }} name="" id="" className='capitalize border-none outline-none cursor-pointer px-[21px] pr-[120px] py-[3px] border border-[#F0F0F0] font-normal text-base leading-[187%] text-[#767676] font-dm'>
                    {/* <option value="regular">Regular</option>
                    <option value="beauty">beauty</option>
                    <option value="fragrances">fragrances</option>
                    <option value="furniture">furniture</option>
                    <option value="groceries">groceries</option>
                    <option value="newp">NewP</option> */}
                    {
                      catg.map((data, index) => (
                        <option key={index} value={data.toLowerCase()}>{data}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="flex gap-x-[14px] items-center">
                  <p className='font-normal text-base leading-[187%] text-[#767676] font-dm'>Show:</p>
                  <select onChange={manegperpage} name="" id="" className='capitalize border-none outline-none cursor-pointer px-[21px] pr-[72px] py-[3px] border border-[#F0F0F0] font-normal text-base leading-[187%] text-[#767676] font-dm'>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="product_gallery mb-[180px]">
              <Paginate itemsPerPage={itemperpage} catagory={catagory} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Productss