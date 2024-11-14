import Container from '@/app/component/layers/Container';
import PreviewImage from '@/app/component/layers/PreviewImage';
import singleData from '@/app/lib/singleData';
import getAllData from '@/app/lib/getAllData';
import Image from 'next/image';
import React from 'react'

export async function generateMetadata({ params }) {
    const { id } = await params;
    let res = await getAllData();
    let newdata = res.find((item) => (item.id == id))
    let brand = "TechStore- "
    let weburl = "https://techstore100.vercel.app"
    let mainurl = `${weburl}/${id}`
    return {
        title: brand + newdata.title,
        description: newdata.description,
        keywords: newdata.tags,
        openGraph: {
            type: 'website',
            url: mainurl,
            title: brand + newdata.title,
            description: newdata.description,
            images: newdata.images,
            site_name: 'TechStore',
            locale: 'en_US',
        }
    }
}

export async function generateStaticParams() {
    let res = await getAllData();
    return res.map((item) => ({
        id: item.id
    })).slice(0, 8)
}

const page = async ({ params }) => {
    const { id } = await params;
    let res = await singleData(id);
    // let newdata = res.filter((item) => (item.id == id))
    // let Allcomments = res.map((item) => {
    //     return item.reviews
    // })
    // console.log(res);

    return (
        <Container>
            {/* <PreviewImage newdata={res} /> */}

            {/* {
                Allcomments[0].map((item, index) => (
                    <div key={index} className="">
                        <h2>{item.id}</h2>
                        <h2>{item.comment}</h2>
                    </div>
                ))
            } */}
            <h1>{res.title}</h1>
        </Container>
    )
}

export default page