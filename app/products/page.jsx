import React from 'react'
import getAllData from '../lib/getAllData';
import Container from '../component/layers/Container';
import Link from 'next/link';

export async function generateMetadata() {
    let res = await getAllData();
    let result = await res.data.products
    let brand = "TechStore- "
    return {
        title: brand + "All Products " + result.map((item) => (
            item.title
        )),
        description: result.map((item) => (
            item.description
        )),
    }
}

const page = async () => {
    let res = await getAllData();
    return (
        <Container>
            <div className='my-52'>
                {
                    res.map((item) => (
                        <div className="" key={item.id}>
                            <Link href={`/product/details/${item.id}`}>
                                <h1>{item.title}</h1>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}

export default page