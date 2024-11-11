import Container from '@/app/component/layers/Container';
import PreviewImage from '@/app/component/layers/PreviewImage';
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

const page = async ({ params }) => {
    const { id } = await params;
    let res = await getAllData();
    let newdata = res.filter((item) => (item.id == id))
    let Allcomments = newdata.map((item) => {
        return item.reviews
    })
    return (
        <Container>
            <PreviewImage newdata={newdata} />

            {
                Allcomments[0].map((item, index) => (
                    <div key={index} className="">
                        <h2>{item.id}</h2>
                        <h2>{item.comment}</h2>
                    </div>
                ))
            }
        </Container>
    )
}

export default page