import Container from '@/app/component/layers/Container';
import getAllData from '@/app/lib/getAllData';
import React from 'react'

const page = async({params}) => {
    const { id } = params;
    let res = await getAllData();
    let result = await res.data.products
    let newdata = result.filter((item)=>(item.id == id))

    return (
        <Container>
            <div className='my-52'>
                {
                    newdata.map((item) => (
                        <div className="" key={item.id}>
                            <h1>{item.title}</h1>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}

export default page