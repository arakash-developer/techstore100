import React from 'react'
import BlogItem from './BlogItem'
import Container from './Container'

const Blogs = () => {
    return (
        <>
            <Container>
                <div className="grid grid-cols-12 gap-y-5 w-full bg-yellow-200">
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                    <BlogItem className='col-span-2' />
                </div>
            </Container>
        </>
    )
}

export default Blogs