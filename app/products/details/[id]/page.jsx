import Breadcumb from "@/app/component/layers/Breadcumb";
import Container from "@/app/component/layers/Container";
import PreviewImage from "@/app/component/layers/PreviewImage";
import getAllData from "@/app/lib/getAllData";
import singleData from "@/app/lib/singleData";
import Paypal from "@/public/pay.png";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { id } = await params;
  let res = await getAllData();
  let newdata = res.find((item) => item.id == id);
  let brand = "TechStore- ";
  let weburl = "https://techstore100.vercel.app";
  let mainurl = `${weburl}/${id}`;
  return {
    title: brand + newdata.title,
    description: newdata.description,
    keywords: newdata.tags,
    openGraph: {
      type: "website",
      url: mainurl,
      title: brand + newdata.title,
      description: newdata.description,
      images: newdata.images,
      site_name: "TechStore",
      locale: "en_US",
    },
  };
}

export async function generateStaticParams() {
  let res = await getAllData();
  return res
    .map((item) => ({
      id: item.id,
    }))
    .slice(0, 8);
}

const page = async ({ params }) => {
  const { id } = await params;
  let res = await singleData(id);
  // let newdata = res.filter((item) => (item.id == id))
  // let Allcomments = res.map((item) => {
  // return item.reviews
  // })
  console.log(res);

  return (
    <>
      <div className="top py-[26px] border-b border-[var(--color---21)]">
        <Container className="flex justify-between items-center">
          <div className="flex gap-x-8 items-center">
            <Link className="un_active" href="#">
              About Product
            </Link>
            <Link href="#">Details</Link>
            <Link href="#">Specs</Link>
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
      <section className="details bg-details bg-cover bg-no-repeat bg-center py-[60px]">
        <Container>
          <div className="flex justify-between items-start">
            <div className="pl-[100px]">
              <Breadcumb />
              <h1 className="font-medium text-4xl text-[var(--color---7)] mt-6 capitalize">
                {res.brand}
              </h1>
              <p className="font-normal text-xs text-[var(--color---3)] mt-4 mb-6">
                Be the first to review this product
              </p>
              <h2 className="font-light text-lg leading-[167%] text-[var(--color---7)] max-w-[557px]">
                {res.title}
              </h2>
              <div className="flex items-center gap-4 mt-11 mb-8 ">
                <div className="w-8 h-8 rounded-full bg-[#4B4D4F] border-2 border-[#0156FF]"></div>
                <div className="w-8 h-8 rounded-full bg-[#F2E9DC] border-2 border-[#0156FF]"></div>
                <div className="w-8 h-8 rounded-full bg-[#EAE8EB] border-2 border-[#0156FF]"></div>
              </div>
              <p className="mb-[166px] font-semibold text-xs text-[var(--color---7)]">
                Have a Question?
                <a
                  href="/"
                  className="ml-1 cursor-pointer font-normal text-[var(--color---3)]"
                >
                  Contact Us
                </a>
              </p>
            </div>
            <div className="">
              <PreviewImage newdata={res} />
            </div>
          </div>
          <p className="font-semibold text-xs text-[var(--color---7)]">
            +<span className="font-bold uppercase"> More information</span>
          </p>
        </Container>
      </section>

      {/*             
            <Container className="flex">
                <div className="w-1/2 pt-[67px] pb-[58px] bg-[var(--color---1)]">
                    <p>Home  ›  Laptops  ›  MSI WS Series</p>
                    <h1>MSI MPG Trident 3</h1>
                    <h3>Be the first to review this product</h3>
                    <p>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p>
                </div>
                <div className="w-1/2 pt-[67px] pb-[58px] bg-lime-300">b</div>
            </Container> */}

      {/* {
                Allcomments[0].map((item, index) => (
                    <div key={index} className="">
                    <h2>{item.id}</h2>
                    <h2>{item.comment}</h2>
                    </div>
                    ))
                    } */}
      {/* <h1>{res.title}</h1> */}
    </>
  );
};

export default page;
