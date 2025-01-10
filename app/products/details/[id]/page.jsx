import Breadcumb from "@/app/component/layers/Breadcumb";
import Container from "@/app/component/layers/Container";
import PreviewImage from "@/app/component/layers/PreviewImage";
import getAllData from "@/app/lib/getAllData";
import getSingleData from "@/app/lib/getSingleData";
// import Paypal from "@/public/pay.png";
import Image from "next/image";
import Link from "next/link";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa";

// export async function generateMetadata({ params }) {
//   const { id } = await params;
//   let res = await getAllData();
//   let newdata = res.find((item) => item.id == id);
//   let brand = "TechStore- ";
//   let weburl = "https://techstore100.vercel.app";
//   let mainurl = `${weburl}/${id}`;
//   return {
//     title: brand + newdata.title,
//     description: newdata.description,
//     keywords: newdata.tags,
//     openGraph: {
//       type: "website",
//       url: mainurl,
//       title: brand + newdata.title,
//       description: newdata.description,
//       images: newdata.images,
//       site_name: "TechStore",
//       locale: "en_US",
//     },
//   };
// }

// export async function generateStaticParams() {
//   let response = await getAllData();
//   let res = response.data
//   return res
//     .map((item) => ({
//       id: item.id,
//     }))
//     .slice(0, 8);
// }

const page = async ({ params }) => {
  const { id } = await params;
  let res = await getSingleData(id);
  
  // let newdata = res.filter((item) => (item.id == id))
  // let Allcomments = res.map((item) => {
  // return item.reviews
  // })
  console.log(res);

  return (
    <>
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
                <div className="w-8 h-8 cursor-pointer rounded-full bg-[#4B4D4F] border-2 border-[#0156FF]"></div>
                <div className="w-8 h-8 cursor-pointer rounded-full bg-[#F2E9DC] border-2 border-[#0156FF]"></div>
                <div className="w-8 h-8 cursor-pointer rounded-full bg-[#EAE8EB] border-2 border-[#0156FF]"></div>
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
    </>
  );
};

export default page;
