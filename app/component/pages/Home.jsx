import React, { useEffect, useState } from 'react'
import Db from '../../db.json'
//Component
import Container from '../layers/Container'
import Item from '../layers/Item';
import Slider from "react-slick";
import Bannar from "../layers/Bannar";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
//Adds
import Add1 from '../../../public/Adds/add1.jpg';
import Add2 from '../../../public/Adds/add2.png';
import Add3 from '../../../public/Adds/add3.png';
//Gallery Adds
import gladd1 from '../../../public/galleryadd/gladd1.jpg';
import gladd2 from '../../../public/galleryadd/galadd2.jpg';
import gladd3 from '../../../public/galleryadd/galadd3.png';
import New from '../layers/New';

const Home = () => {
  // const navigate = useNavigate();
  let [bestseller, setBestseller] = useState([]);
  let [specials, setSpecials] = useState([]);
  const add = [
    {
      id: 1,
      add: Add1,
      status: true,
    },
    {
      id: 2,
      add: Add2,
      status: true,
    },
    {
      id: 3,
      add: Add3,
      status: true,
    },
  ]

  useEffect(
    () => {
      Db.reverse();
      let bs = Db.filter((b) => (b.best == true));
      let sp = Db.filter((s) => (s.special == true))
      // console.log(bs)
      setBestseller(bs)
      setSpecials(sp)
    }, [Db]);

  useEffect(
    () => {
      Db.reverse();
    }, []);


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='absolute right-5  top-[153px] z-10 h-[64px] w-[64px] rounded-full justify-center items-center bg-[#00000038] text-[#fff] cursor-pointer'
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      >
        <FaLongArrowAltRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='absolute left-5 top-[153px] z-10 h-[64px] w-[64px] rounded-full justify-center items-center bg-[#00000038] text-[#fff] cursor-pointer'
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      >
        <FaLongArrowAltLeft />
      </div>
    );
  }

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const settings2 = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const settings3 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  let [allproducts, setAllProducts] = useState([]);
  useEffect(() => {
    let getData = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      let newdata = await data.products;
      setAllProducts(newdata);
    }
    getData();
  }, [])

  return (
    <>
      <Bannar />
      <div className="shipping py-[22px] border-b border-[#F0F0F0]">
        <Container className='flex justify-between items-center'>
          <div className="flex md:gap-x-[18px] items-center">
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.44043 20V17.396C1.6351 16.4066 2.79709 15.4266 3.92643 14.456C5.05577 13.4853 6.06376 12.524 6.95043 11.572C7.8371 10.62 8.54643 9.6913 9.07843 8.78596C9.61043 7.88063 9.87643 6.99864 9.87643 6.13997C9.87643 5.33729 9.6571 4.62797 9.21843 4.01196C8.77976 3.39596 8.05643 3.08796 7.04843 3.08796C6.02176 3.08796 5.2471 3.42396 4.72443 4.09596C4.20176 4.76797 3.94043 5.57996 3.94043 6.53196H0.46843C0.505763 5.09462 0.823093 3.8953 1.42043 2.93396C2.01777 1.97263 2.81109 1.25397 3.80043 0.777965C4.78977 0.301962 5.90042 0.0639648 7.13243 0.0639648C9.12977 0.0639648 10.6838 0.609959 11.7944 1.70196C12.9051 2.79397 13.4604 4.20796 13.4604 5.94396C13.4604 7.02664 13.2131 8.08129 12.7184 9.10796C12.2238 10.1346 11.5751 11.124 10.7724 12.076C9.96976 13.028 9.10177 13.9193 8.16843 14.75C7.23509 15.5806 6.32977 16.3506 5.45243 17.06H13.9364V20H0.44043Z" fill="#262626" />
            </svg>
            <p className="font-normal md:text-base text-[12px] text-center text-[#6d6d6d] font-dm">Two years warranty</p>
          </div>
          <div className="flex gap-x-[18px] items-center">
            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M23.75 13.75H24.375C24.7188 13.75 25 14.0312 25 14.375V15.625C25 15.9688 24.7188 16.25 24.375 16.25H22.5C22.5 18.3203 20.8203 20 18.75 20C16.6797 20 15 18.3203 15 16.25H10C10 18.3203 8.32031 20 6.25 20C4.17969 20 2.5 18.3203 2.5 16.25H1.875C0.839844 16.25 0 15.4102 0 14.375V1.875C0 0.839844 0.839844 0 1.875 0H14.375C15.4102 0 16.25 0.839844 16.25 1.875V3.75H17.9727C18.4688 3.75 18.9453 3.94922 19.2969 4.30078L23.1992 8.20312C23.5508 8.55469 23.75 9.03125 23.75 9.52734V13.75ZM4.375 16.25C4.375 17.2852 5.21484 18.125 6.25 18.125C7.28516 18.125 8.125 17.2852 8.125 16.25C8.125 15.2148 7.28516 14.375 6.25 14.375C5.21484 14.375 4.375 15.2148 4.375 16.25ZM18.75 18.125C17.7148 18.125 16.875 17.2852 16.875 16.25C16.875 15.2148 17.7148 14.375 18.75 14.375C19.7852 14.375 20.625 15.2148 20.625 16.25C20.625 17.2852 19.7852 18.125 18.75 18.125ZM16.25 10H21.875V9.52734L17.9727 5.625H16.25V10Z" fill="#262626" />
            </svg>
            <p className="font-normal md:text-base text-[12px] text-center text-[#6d6d6d] font-dm">Free shipping</p>
          </div>
          <div className="flex gap-x-[18px] items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.98165 1.62584e-05C7.30952 0.00481465 4.88335 1.0578 3.09214 2.76957L1.65206 1.32949C1.04238 0.719815 0 1.15159 0 2.01377V7.41937C0 7.95385 0.433266 8.38711 0.967742 8.38711H6.37335C7.23552 8.38711 7.6673 7.34473 7.05766 6.73506L5.37419 5.05159C6.61871 3.88631 8.22907 3.24082 9.93992 3.22606C13.6656 3.19389 16.8062 6.20901 16.774 10.0584C16.7434 13.7101 13.7829 16.7742 10 16.7742C8.34165 16.7742 6.77431 16.1824 5.53911 15.0986C5.34786 14.9308 5.05903 14.941 4.87911 15.1209L3.27984 16.7201C3.08339 16.9166 3.0931 17.2369 3.29927 17.4231C5.0725 19.0247 7.42234 20 10 20C15.5228 20 20 15.5229 20 10.0001C20 4.48361 15.4981 -0.00986277 9.98165 1.62584e-05Z" fill="#262626" />
            </svg>
            <p className="font-normal md:text-base text-[12px] text-center text-[#6d6d6d] font-dm">Return policy in 30 days</p>
          </div>
        </Container>
      </div>

      <Container className=''>
        <div className="gallery md:mt-[174px] mt-4 grid grid-cols-2 grid-rows-2 md:gap-[40px] gap-5 cursor-pointer">
          <div className="row-span-2">
            <img className='h-full w-full object-cover' src={gladd1} alt="" />
          </div>
          <div className="">
            <img className='h-full w-full object-cover' src={gladd2} alt="" />
          </div>
          <div className="">
            <img className='h-full w-full object-cover' src={gladd3} alt="" />
          </div>
        </div>
      </Container>

      <div className="arrivals md:mt-[128px]">
        <Container>
          <h1 className='md:py-[48px] py-4 font-bold md:text-[2.44rem] text-[20px] leading-none text-[#262626] font-dm'>New Arrivals</h1>
        </Container>
        <div className="itembox md:mb-[217px] mb-4">
          <Container className='max-w-[1616px]'>
            <Slider {...settings}>
              {
                allproducts?.map((item) => (
                  item ?
                    <Item key={item.id} className='w-full 2xl:px-[20px] xl:px-2 px-2'
                      productid={item.id}
                      productTitle={item.title}
                      productImg={item.thumbnail}
                      productPrice={item.price}
                      productTag={item.discountPercentage}
                      productColor={item.brand}
                    /> : null
                ))
              }
            </Slider>
          </Container>
        </div>
      </div>


      <div className="bestSeller">
        <Container>
          <h1 className='md:pb-[48px] pb-4 w-full font-bold text-[20px] md:text-[2.44rem] leading-none text-[#262626] font-dm'>Our Bestsellers</h1>
        </Container>
        <div className="itembox md:mb-[217px] mb-4">
          <Container className='max-w-[1616px]'>
            <Slider {...settings2}>
              {
                allproducts?.map((item) => (
                  item ?
                    <Item key={item.id} className='w-full 2xl:px-[20px] xl:px-2 px-2'
                      productid={item.id}
                      productTitle={item.title}
                      productImg={item.thumbnail}
                      productPrice={item.price}
                      productTag={item.discountPercentage}
                      productColor={item.brand}
                    /> : null
                ))
              }
            </Slider>
          </Container>
        </div>
      </div>


      <Container>
        <div className="newslatter w-full md:mt-[130px] md:mb-[128px] mb-5 cursor-pointer">
          <Slider {...settings3}>
            {
              add?.map((item) => (
                item.status ?
                  <img key={item.id} className="h-full w-full" src={item.add} alt="" />
                  : null
              ))
            }
          </Slider>
        </div>
      </Container>

      <div className="special">
        <Container>
          <h1 className='md:pb-[48px] pb-4 w-full font-bold text-[20px] md:text-[2.44rem] leading-none text-[#262626] font-dm'>Special Product</h1>
        </Container>
        <div className="itembox md:mb-[217px] mb-4">
          <Container className='max-w-[1616px]'>
            <Slider {...settings2}>
              {
                allproducts?.map((item) => (
                  item ?
                    <Item key={item.id} className='w-full 2xl:px-[20px] xl:px-2 px-2'
                      productid={item.id}
                      productTitle={item.title}
                      productImg={item.thumbnail}
                      productPrice={item.price}
                      productTag={item.discountPercentage}
                      productColor={item.brand}
                    /> : null
                ))
              }
            </Slider>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Home
