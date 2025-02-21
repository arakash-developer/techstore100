import Container from "@/app/component/layers/Container";
import Bannar4 from "@/public/banner/banner4.png";
import Akash from "@/public/akash.png";
import Image from "next/image";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { FaAngleDown, FaAngleLeft, FaAngleUp } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Item from "../component/layers/Item";
import getFilterProduct from "../lib/getFilterProduct";

const page = async() => {
  let response = await getFilterProduct("laptop","all");
  let allproducts = response.data;
  
  const array = Array.from({ length: 20 }, (_, i) => i + 1);
// console.log(array); // [1, 2, 3, ..., 20]

  return (
    <Container>
      <div className="w-full h-[104px] overflow-hidden">
        <Image src={Bannar4} alt={Bannar4} />
      </div>
      <div className="flex gap-x-1 items-center my-5 font-normal text-sm text-[var(--color---7)]">
        Home
        <span className="text-[var(--color---3)]">
          <MdOutlineKeyboardArrowRight className="inline-block" />
        </span>
        Laptops
        <span className="text-[var(--color---3)]">
          <MdOutlineKeyboardArrowRight className="inline-block" />
        </span>
        Everyday Use Notebooks{" "}
        <span className="text-[var(--color---3)]">
          <MdOutlineKeyboardArrowRight className="inline-block" />
        </span>
        MSI Prestige Series{" "}
        <span className="text-[var(--color---3)]">
          <MdOutlineKeyboardArrowRight className="inline-block" />
        </span>
        <span className="text-[var(--color---5)]">MSI WS Series</span>
      </div>
      <h1 className="font-semibold text-4xl text-[var(--color---7)] mb-5">
        MSI WS Series
      </h1>

      <div className="sort1">
        <div className="flex justify-between items-center h-[50px]">
          <div className="flex items-center gap-2 h-full">
            <Link
              className="flex gap-1 justify-center items-center font-semibold text-sm text-[var(--color---7)] w-[234px] h-full cursor-pointer border border-[var(--color---6)] rounded-sm hover:border-[var(--color---3)]"
              href="#"
            >
              <FaAngleLeft className="inline-block" />
              Back
            </Link>
            <p className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---5)]">
              Items 1-35 of 61
            </p>
          </div>
          <div className="flex gap-2 items-center h-full">
            <div className="flex justify-center items-center h-full border px-5 rounded-sm border-[var(--color---6)]">
              <div className="flex gap-1 items-center font-semibold text-[0.81rem] leading-[210%] text-center text-[var(--color---5)]">
                <p>Sort By:</p>
                <div className="flex gap-2 items-center">
                  <span className="text-[var(--color---7)]"> Position</span>
                  <FaAngleDown className="text-[var(--color---7)]" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center h-full border px-5 rounded-sm border-[var(--color---6)]">
              <div className="flex gap-1 items-center font-semibold text-[0.81rem] leading-[210%] text-center text-[var(--color---5)]">
                <p>Show:</p>
                <div className="flex gap-2 items-center">
                  <span className="text-[var(--color---7)]"> 35 per page</span>
                  <FaAngleDown className="text-[var(--color---7)]" />
                </div>
              </div>
            </div>
            <div className="h-full flex gap-2 items-center px-5 cursor-pointer">
              <CgMenuGridR className="text-xl" />
              <BiMenuAltLeft className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="sort2 flex items-start gap-2 mb-10">
        <div className="left w-[234px]">
          {/* Filter Section */}
          <div className="py-4 px-[17px]">
            <h3 className="font-bold text-base text-center text-[var(--color---7)]">
              Filter
            </h3>
            <Link
              href="#"
              className="mt-2 flex justify-center items-center rounded-3xl py-2 px-[59px] border-2 border-[var(--color---5)] font-semibold text-sm text-center text-[var(--color---5)]"
            >
              Clear Filter
            </Link>
          </div>
          {/* Filter Section */}

          {/* Category Section */}
          <div className="py-4 px-[17px]">
            <div className="mb-2 flex justify-between items-center">
              <h3 className="font-semibold text-sm text-[var(--color---7)]">
                Category
              </h3>
              <FaAngleUp className="text-[var(--color---7)]" />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                CUSTOM PCS
              </h3>
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                15
              </h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                MSI ALL-IN-ONE PCS
              </h3>
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                45
              </h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                HP/COMPAQ PCS
              </h3>
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                1
              </h3>
            </div>
          </div>
          {/* Category Section */}

          {/* Price Section */}
          <div className="py-4 px-[17px]">
            <div className="mb-2 flex justify-between items-center">
              <h3 className="font-semibold text-sm text-[var(--color---7)]">
                Price
              </h3>
              <FaAngleUp className="text-[var(--color---7)]" />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                $0.00 - $1,000.00
              </h3>
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                19
              </h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                $1,000.00 - $2,000.00
              </h3>
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                21
              </h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                $2,000.00 - $3,000.00
              </h3>
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                9
              </h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                $3,000.00 - $4,000.00
              </h3>
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                6
              </h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                $4,000.00 - $5,000.00
              </h3>
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                3
              </h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                $5,000.00 - $6,000.00
              </h3>
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                1
              </h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                $6,000.00 - $7,000.00
              </h3>
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                1
              </h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                $7,000.00 And Above
              </h3>
              <h3 className="font-normal text-[0.81rem] leading-[210%] text-[var(--color---7)]">
                1
              </h3>
            </div>
          </div>
          {/* Price Section */}

          {/* Color Section */}
          <div className="py-4 px-[17px]">
            <div className="mb-2 flex justify-between items-center">
              <h3 className="font-semibold text-sm text-[var(--color---7)]">
                Color
              </h3>
              <FaAngleUp className="text-[var(--color---7)]" />
            </div>
            <div className="mt-4 flex gap-2 items-center">
              <div className="rounded-full w-8 h-8 border-2 border-[var(--color---3)] flex items-center justify-center">
                <div className="rounded-full w-6 h-6 bg-black cursor-pointer"></div>
              </div>
              <div className="rounded-full w-8 h-8 border-2 border-[var(--color---3)] flex items-center justify-center">
                <div className="rounded-full w-6 h-6 bg-red-500 cursor-pointer"></div>
              </div>
              <div className="rounded-full w-8 h-8 border-2 border-[var(--color---3)] flex items-center justify-center">
                <div className="rounded-full w-6 h-6 bg-blue-500 cursor-pointer"></div>
              </div>
            </div>
          </div>
          {/* Color Section */}

          {/* Filter Name Section */}
          <div className="py-4 px-[17px]">
            <div className="mb-2 flex justify-between items-center">
              <h3 className="font-semibold text-sm text-[var(--color---7)]">
                Filter Name
              </h3>
              <FaAngleDown className="text-[var(--color---7)]" />
            </div>
            <div className="py-2 px-[45px] rounded-3xl bg-[var(--color---3)]">
              <h3 className="font-semibold text-sm text-center leading-none text-[#fff] cursor-pointer">
                Apply Filters(2)
              </h3>
            </div>
          </div>
          {/* Filter Name Section */}

          {/* Brand Section */}
          <div className="py-4 px-[17px] bg-lime-400">
            <div className="mb-2 flex justify-between items-center">
              <h3 className="font-semibold text-sm text-[var(--color---7)]">
                Brands
              </h3>
              <FaAngleDown className="text-[var(--color---7)]" />
            </div>
            <Link
              href="#"
              className="mt-3 flex justify-center items-center rounded-3xl py-2 px-[59px] border-2 border-[var(--color---5)] font-semibold text-sm text-center text-[var(--color---5)]"
            >
              Clear Filter
            </Link>
          </div>
          {/* Brand Section */}
        </div>
        <div className="right mt-1 flex-1 h-full">
        <div className="w-full h-full bg-lime-300
        grid justify-between grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {
            allproducts.map((item,index)=>(
              <div className="">
              <Item
                  key={item._id}
                  className='w-full 2xl:w-[226px]'
                  id={item._id}
                  title={item.title}
                  price={item.price}
                  discountPercentage={item.discountPercentage}
                  image={item.thumbnail}
                  />
                  </div>
            ))
          }
        </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
