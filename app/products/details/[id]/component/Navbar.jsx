"use client";
import Container from "@/app/component/layers/Container";
import Paypal from "@/public/pay.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Navbar = ({ id }) => {
  const router = useRouter();
  let nav = [
    {
      id: 1,
      title: "About Product",
      url: `/products/details/${id}/`,
    },
    {
      id: 2,
      title: "Details",
      url: `/products/details/${id}/details`,
    },
    {
      id: 3,
      title: "Specs",
      url: `/products/details/${id}/specs`,
    },
  ];
  return (
    <div className="top py-[26px] border-b border-[var(--color---21)]">
      <Container className="flex justify-between items-center">
        <div className="flex gap-x-8 items-center">
          {/* <Link className="un_active" href={`/products/details/${id}/`}>
            About Product
          </Link>
          <Link href={`/products/details/${id}/details`}>Details</Link>
          <Link href={`/products/details/${id}/specs`}>Specs</Link> */}
          {nav.map(({ url, id, title }) => (
            <Link
              className={`${router.pathname == url ? "un_active" : ""}`}
              key={id}
              href={url}
            >
              {title}
            </Link>
          ))}
        </div>
        <div className="flex gap-x-4 items-center">
          <p className="font-normal text-sm text-center text-[var(--color---7)]">
            On Sale from<span className="font-semibold"> $3,299.00</span>
          </p>
          <div className="rounded-md w-16 h-12 bg-[var(--color---1)] flex justify-center items-center">
            <h4 className="font-semibold text-[0.81rem] w-[45%] leading-[210%] text-center text-[var(--color---7)]">
              1
            </h4>
            <div className="flex flex-col gap-y-1 justify-center text-[14px] w-[45%] cursor-pointer">
              <FaAngleUp className="w-full hover:bg-[var(--color---3)] hover:text-[var(--color---12)]" />
              <FaAngleDown className="w-full hover:bg-[var(--color---3)] hover:text-[var(--color---12)]" />
            </div>
          </div>
          <Link
            href="#"
            className="font-semibold text-sm text-center text-[#fff] inline-block py-5 px-10 bg-[var(--color---3)] rounded-full"
          >
            Add to Cart
          </Link>
          <Link
            className="inline-block py-5 px-10 bg-[var(--color---13)] rounded-full"
            href="#"
          >
            <Image src={Paypal} alt={Paypal} />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
