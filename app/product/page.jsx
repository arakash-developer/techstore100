import React from 'react'
import getAllData from '../lib/getAllData';
import Container from '../component/layers/Container';

const page = async () => {
    let res = await getAllData();
    let result = await res.data.products

    return (
        <Container>
            <div className='my-52'>
                {
                    result.map((item) => (
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