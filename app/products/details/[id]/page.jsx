import Container from '@/app/component/layers/Container';
import PreviewImage from '@/app/component/layers/PreviewImage';
import getAllData from '@/app/lib/getAllData';
import Image from 'next/image';
import React from 'react'

export async function generateMetadata({ params }) {
    const { id } = await params;
    let res = await getAllData();
    let result = await res.data.products
    let newdata = result.find((item) => (item.id == id))
    let brand = "TechStore- "
    return {
        title: brand + newdata.title,
        description: newdata.description,
    }
}

const page = async ({ params }) => {
    const { id } = await params;
    let res = await getAllData();
    let result = await res.data.products
    let newdata = result.filter((item) => (item.id == id))

    return (
        <Container>
            <PreviewImage newdata={newdata} />
        </Container>
    )
}

export default page