import Container from "@/app/component/layers/Container";
import Bannar4 from "@/public/banner/banner4.png";
import Image from "next/image";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const page = () => {
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
        </span>{" "}
        Everyday Use Notebooks{" "}
        <span className="text-[var(--color---3)]">
          <MdOutlineKeyboardArrowRight className="inline-block" />
        </span>{" "}
        MSI Prestige Series{" "}
        <span className="text-[var(--color---3)]">
          <MdOutlineKeyboardArrowRight className="inline-block" />
        </span>{" "}
        <span className="text-[var(--color---5)]">MSI WS Series</span>
      </div>
      <h1 className="font-semibold text-4xl text-[var(--color---7)] mb-5">
        MSI WS Series
      </h1>
      <div className="sort1 mb-10">
        <div className="flex justify-between items-center h-[50px]">
          <div className="flex items-center gap-2 h-full">
            <Link
              className="flex gap-1 justify-center items-center font-semibold text-sm text-[var(--color---7)] w-60 h-full cursor-pointer border border-[var(--color---6)] rounded-sm hover:border-[var(--color---3)]"    
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
    </Container>
  );
};

export default page;
