import React, { useEffect, useState, useContext, useRef } from 'react'
import Container from '../layers/Container'
import Cata from '../../../public/cata.png'
import Searchi from '../../../public/search.png'
import Cart from '../../../public/cart.png'
import Down from '../../../public/down.png'
import Prof from '../../../public/prof.png'
import { useNavigate } from 'react-router-dom'
import SignLog from './SignLog'
import { useDispatch, useSelector } from 'react-redux'
import SearchCartItem from './SearchCartItem'

const Search = () => {
  let [layer1, setLayer1] = useState(true);
  let [active, setActive] = useState(false);
  let [profileStatus, setProfileStatus] = useState(false);
  let [CartStatus, setCartStatus] = useState(false);
  let [accesories, setAccesories] = useState(false);
  let [electronics, setElectronics] = useState(false);
  let [furniture, setFurniture] = useState(false);
  let [clothes, setClothes] = useState(false);
  let [bags, setBags] = useState(false);
  let [appliances, setappliances] = useState(false);
  let navigate = useNavigate();

  let cart = useRef(null);
  const carts = useSelector(state => state.cart.items);
  let dispatch = useDispatch();
  let [totalquantity, setTotalquantity] = useState(0)
  useEffect(() => {
    let total = 0
    carts.forEach((item) => {
      total += item.quantity
    });
    setTotalquantity(total)
  }, [carts])




  let handlerAct2 = (id) => {

  }




  let handlerAct = () => {
    setActive(!active);
  }
  let electronicsfn = () => {
    setElectronics(!electronics);
  }
  let electronicsfn2 = () => {
    setElectronics(!electronics);
  }
  let furniturefn = () => {
    setFurniture(!furniture);
  }
  let furniturefn2 = () => {
    setFurniture(!furniture);
  }
  let Accesoriesfn = () => {
    setAccesories(!accesories);
  }
  let Accesoriesfn2 = () => {
    setAccesories(!accesories);
  }
  let Clothesfn = () => {
    setClothes(!clothes);
  }
  let Clothesfn2 = () => {
    setClothes(!clothes);
  }
  let bagsfn = () => {
    setBags(!bags);
  }
  let bagsfn2 = () => {
    setBags(!bags);
  }
  let appliancesfn = () => {
    setappliances(!appliances);
  }
  let appliancesfn2 = () => {
    setappliances(!appliances);
  }

  let [allproducts, setAllProducts] = useState([]);
  let [fileterProduct, setFilteProduct] = useState([]);
  let [search, setSearch] = useState("");

  let handlerSearch = (e) => {
    let sr = e.target.value;
    setSearch(sr);
  }


  useEffect(() => {
    let getData = async () => {
      let response = await fetch("https://dummyjson.com/products")
      let data = await response.json()
      let newdata = data.products
      setAllProducts(newdata)
    }
    getData();

  }, [])

  useEffect(() => {
    if (search === "") {
      setFilteProduct("");
    } else {
      let filteData = allproducts.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      setFilteProduct(filteData);
    }
    // console.log(fileterProduct);
  }, [allproducts, search])

  // console.log(carts);

  let totalAm = carts.reduce((prev, curr) => {
    return prev + curr.price * curr.quantity
  }, 0)



  let Menubar = useRef(null)
  let ProfileBtn = useRef(null)
  let CartBtn = useRef(null)
  useEffect(() => {
    document.addEventListener("click", (event) => {
      setActive(!active)
      setProfileStatus(!profileStatus)
      setCartStatus(!CartStatus)
      
      if (ProfileBtn.current.contains(event.target)) {
        setProfileStatus(!profileStatus)
      } else {
        setProfileStatus(false)
      }
      
      if (Menubar.current.contains(event.target)) {
        setActive(!active)
      } else {
        setActive(false)
      }
      
      if (CartBtn.current.contains(event.target)) {
        setCartStatus(!CartStatus)
      } else {
        setCartStatus(false)
      }
    })
  }, [active, profileStatus,CartStatus])

  return (
    <>
      <div className="bg-[#f5f5f3]  md:block sticky left-0 top-0 z-[9999]">
        {/* py-6 defaul */}
        <Container className="flex justify-between items-center py-2 relative">
          {
            active ?
              <div className="megamenu  absolute h-[343px] top-[102px] z-10 flex ">
                <ul className="w-[263px] bg-[#262626] text-white">
                  <li onMouseEnter={Accesoriesfn} onMouseLeave={Accesoriesfn2} className='pl-[21px] py-3 border-b border-[#2D2D2D] hover:pl-[31px] group cursor-pointer'><a className='font-normal text-sm text-white/[0.7] font-dm group-hover:font-bold group-hover:text-sm group-hover:text-[#fff]' href="#">Accesories</a></li>
                  <li onMouseEnter={furniturefn} onMouseLeave={furniturefn2} className='pl-[21px] py-3 border-b border-[#2D2D2D] hover:pl-[31px] group cursor-pointer'><a className='font-normal text-sm text-white/[0.7] font-dm group-hover:font-bold group-hover:text-sm group-hover:text-[#fff]' href="#">Furniture</a></li>
                  <li onMouseEnter={electronicsfn} onMouseLeave={electronicsfn2} className='pl-[21px] py-3 border-b border-[#2D2D2D] hover:pl-[31px] group cursor-pointer'><a className='font-normal text-sm text-white/[0.7] font-dm group-hover:font-bold group-hover:text-sm group-hover:text-[#fff]' href="#">Electronics</a></li>
                  <li onMouseEnter={Clothesfn} onMouseLeave={Clothesfn2} className='pl-[21px] py-3 border-b border-[#2D2D2D] hover:pl-[31px] group cursor-pointer'><a className='font-normal text-sm text-white/[0.7] font-dm group-hover:font-bold group-hover:text-sm group-hover:text-[#fff]' href="#">Clothes</a></li>
                  <li onMouseEnter={bagsfn} onMouseLeave={bagsfn2} className='pl-[21px] py-3 border-b border-[#2D2D2D] hover:pl-[31px] group cursor-pointer'><a className='font-normal text-sm text-white/[0.7] font-dm group-hover:font-bold group-hover:text-sm group-hover:text-[#fff]' href="#">Bags</a></li>
                  <li onMouseEnter={appliancesfn} onMouseLeave={appliancesfn2} className='pl-[21px] py-3 border-b border-[#2D2D2D] hover:pl-[31px] group cursor-pointer'><a className='font-normal text-sm text-white/[0.7] font-dm group-hover:font-bold group-hover:text-sm group-hover:text-[#fff]' href="#">Home appliances</a></li>
                </ul>
                {
                  accesories ?
                    <div className="bg-[#FFFFFF]  flex px-[40px] py-[28px] gap-x-[50px] flex-wrap">
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Sunglasses</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sunglasses 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sunglasses 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sunglasses 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sunglasses 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sunglasses 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sunglasses 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sunglasses 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Necklace</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Necklace 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Necklace 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Necklace 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Necklace 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Necklace 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Necklace 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Necklace 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Socks</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sock 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sock 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sock 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sock 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sock 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sock 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sock 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Ring</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Ring 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Ring 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Ring 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Ring 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Ring 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Ring 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Ring 7</a></li>
                        </ul>
                      </div>
                    </div>
                    : ""
                }
                {
                  electronics ?
                    <div className="bg-[#FFFFFF]  flex px-[40px] py-[28px] gap-x-[50px] flex-wrap">
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Phones</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Phone 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Phone 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Phone 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Phone 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Phone 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Phone 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Phone 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Computers</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Computers 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Computers 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Computers 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Computers 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Computers 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Computers 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Computers 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Smart watches</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Smart watches 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Smart watches 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Smart watches 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Smart watches 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Smart watches 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Smart watches 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Smart watches 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Cameras</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Cameras 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Cameras 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Cameras 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Cameras 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Cameras 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Cameras 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Cameras 7</a></li>
                        </ul>
                      </div>
                    </div>
                    : ""
                }



                {
                  furniture ?
                    <div className="bg-[#FFFFFF]  flex px-[40px] py-[28px] gap-x-[50px] flex-wrap">
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Sofas</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sofa 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sofa 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sofa 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sofa 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sofa 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sofa 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Sofa 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Tables</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Table 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Table 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Table 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Table 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Table 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Table 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Table 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Beds</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Bed 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Bed 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Bed 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Bed 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Bed 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Bed 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Bed 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Chairs</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Chair 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Chair 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Chair 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Chair 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Chair 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Chair 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Chair 7</a></li>
                        </ul>
                      </div>
                    </div>
                    : ""
                }

                {
                  clothes ?
                    <div className="bg-[#FFFFFF]  flex px-[40px] py-[28px] gap-x-[50px] flex-wrap">
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Jackets</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Jacket 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Jacket 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Jacket 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Jacket 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Jacket 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Jacket 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Jacket 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>scarves</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">scarve 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">scarve 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">scarve 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">scarve 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">scarve 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">scarve 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">scarve 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Blejers</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Blejer 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Blejer 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Blejer 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Blejer 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Blejer 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Blejer 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Blejer 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Tops</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Top 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Top 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Top 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Top 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Top 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Top 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Top 7</a></li>
                        </ul>
                      </div>
                    </div>
                    : ""
                }

                {
                  bags ?
                    <div className="bg-[#FFFFFF]  flex px-[40px] py-[28px] gap-x-[50px] flex-wrap">
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Hand bag
                        </h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hand bag 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hand bag 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hand bag 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hand bag 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hand bag 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hand bag 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hand bag 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Hobo bag
                        </h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hobo bag 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hobo bag 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hobo bag 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hobo bag 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hobo bag 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hobo bag 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Hobo bag 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Duffle bag
                        </h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Duffle bag 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Duffle bag 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Duffle bag 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Duffle bag 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Duffle bag 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Duffle bag 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Duffle bag 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Backpack</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Backpack 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Backpack 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Backpack 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Backpack 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Backpack 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Backpack 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Backpack 7</a></li>
                        </ul>
                      </div>
                    </div>
                    : ""
                }

                {
                  appliances ?
                    <div className="bg-[#FFFFFF]  flex px-[40px] py-[28px] gap-x-[50px] flex-wrap">
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Freezers</h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Freezer 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Freezer 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Freezer 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Freezer 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Freezer 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Freezer 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Freezer 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Kitchen Stoves
                        </h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Kitchen Stoves 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Kitchen Stoves 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Kitchen Stoves 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Kitchen Stoves 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Kitchen Stoves 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Kitchen Stoves 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Kitchen Stoves 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Rice Cookers
                        </h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Rice Cooker 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Rice Cooker 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Rice Cooker 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Rice Cooker 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Rice Cooker 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Rice Cooker 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Rice Cooker 7</a></li>
                        </ul>
                      </div>
                      <div className="list_item">
                        <h3 className='pb-[21px] font-bold text-base text-[#262626] font-dm'>Roti Makers
                        </h3>
                        <ul className='flex flex-col gap-y-[12px]'>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Roti Maker 1</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Roti Maker 2</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Roti Maker 3</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Roti Maker 4</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Roti Maker 5</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Roti Maker 6</a></li>
                          <li><a className='font-normal text-sm text-[#767676] font-dm' href="#">Roti Maker 7</a></li>
                        </ul>
                      </div>
                    </div>
                    : ""
                }



              </div>
              : ""
          }
          <div className="flex gap-x-3 items-center cursor-pointer" type='button'>
            <button className='flex gap-x-3 items-center outline-none focus:outline-none' ref={Menubar}>
              <span className='md:pr-0 pr-1'><img src={Cata} alt="" /></span>
              <h4 className='font-normal text-sm text-[#262626] font-dm md:block hidden'>Shop by Category</h4>
            </button>
          </div>
          <div className="flex bg-[#fff] md:py-5 py-3 px-[21px] mx-1 md:mx-0 gap-x-2 items-center sm:w-[500px]  md:w-[500px] lg:w-[600px]">
            <input value={search} onChange={handlerSearch} className='font-normal text-sm w-full text-[#c4c4c4] font-dm outline-none' type="text" placeholder='Search Product' />
            <img className='cursor-pointer' src={Searchi} alt="a" />
          </div>

          <div className="flex items-center gap-x-10">
            <div className="relative cursor-pointer">
              <button type='button' className="flex items-center gap-x-[10px] focus:outline-none cursor-pointer" ref={ProfileBtn}>
                <img src={Prof} alt="" />
                <img className='down' src={Down} alt="" />
              </button>

              {
                profileStatus &&
                <div className="border w-[200px] flex-col items-center absolute right-0 top-8 z-[999999] profile">
                  <SignLog />
                </div>
              }

            </div>
            <div>
              <div className="wrap">
                <button className='focus:outline-none relative' ref={CartBtn}>
                  <img src={Cart} alt="" />
              <div className="absolute -left-[10px] top-[11px] bg-[#262626] font-dm center text-[12px] h-5 w-5 rounded-full text-[#fff]">{totalquantity}</div>
                </button>
              </div>


              {
                CartStatus &&
                <div className={`absolute bg-[#fff] right-0  top-8 w-96  border box-border border-[#979797] z-[99]`}>
                  <div className={`${totalAm > 0 ? "max-h-72" : "h-0"} overflow-y-scroll w-full cursor-pointer`}>
                    {
                      carts.map((item, index) =>
                      (
                        <SearchCartItem key={index} data={item} />
                      ))
                    }
                  </div>
                  <div className={`pt-[14px] pl-[21px] pb-4`}>
                    {
                      totalAm > 0 ?
                        <>
                          <div>
                            <h3 className='pb-[13px] font-normal text-base leading-[144%] text-[#767676] font-dm'>Subtotal: <span className='font-bold text-[#262626]'>{totalAm.toFixed(2)}$</span></h3>
                            <button onClick={() => { navigate('/cart') }} className='w-36 h-12 border-2 border-[#2B2B2B] hover:bg-[#262626] hover:text-[#fff] font-dm font-bold text-sm text-[#262626]'>View Cart</button>
                            <button className='w-36 h-12 ml-[21px] border-2 border-[#2B2B2B] hover:bg-[#262626] hover:text-[#fff] font-bold text-sm text-[#262626] font-dm'>Checkout</button>
                          </div>
                        </>
                        :
                        <>
                          <div>
                            <h3 className='pb-[13px] font-normal text-base leading-[144%] text-[#767676] capitalize font-dm'> Please Shopping... <span className='font-bold text-[#262626]'>0 items in your cart</span></h3>
                            <h3 className='pb-[13px] text-base leading-[144%] capitalize font-dm font-bold text-[#262626]'> Happy Shopping...</h3>
                          </div>
                        </>
                    }
                  </div>
                </div>
              }


            </div>
          </div>

          <div className="searchdata absolute left-0 top-full w-full z-[999999]">
            {
              fileterProduct &&
              (
                <div className="main h-[600px] bg-[#f5f5f3] overflow-scroll">
                  {
                    fileterProduct.map((item, index) => (
                      <div key={index} className="inner cursor-pointer p-3 bg-[#fff] mb-2 grid gap-x-2 grid-cols-12 items-center">
                        <div className="col-span-1">
                          <img className='h-24' src={item.thumbnail} alt="" />
                        </div>
                        <div className='col-span-3'>
                          <h2 className='font-dm font-bold text-xl xl:text-md text-[#262626] capitalize'>{item.title.slice(0, 33)}..</h2>
                          <h2 className='font-bold text-lg text-[#767676] font-dm'>Price : {item.price}$</h2>
                        </div>
                        <div className="col-span-4">
                          <p className='max-w-[600px] font-normal text-base leading-[187%] text-[#767676] font-dm capitalize'>{item.description.slice(0, 177)}</p>
                        </div>
                        <div className="col-span-4 flex gap-x-[20px] items-center">
                          <button className='px-12 py-4 border-[1px] border-[#262626] font-bold text-sm text-center text-[#262626] font-dm'>Add to Wish List</button>
                          <button className='px-12 py-4 border-[1px] bg-[#262626] text-[#fff] font-bold text-sm text-center font-dm' onClick={() => navigate(`/cart/${item.id}`)}>Add to Cart List</button>
                        </div>
                      </div>
                    ))
                  }
                </div>
              )
            }

          </div>

        </Container>
      </div>
    </>
  )
}

export default Search