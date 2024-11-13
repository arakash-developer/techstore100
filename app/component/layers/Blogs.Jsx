import React from 'react'
import BlogItem from './BlogItem'
import Container from './Container'

const Blogs = () => {
    return (
        <>
            <Container>
                <div className="flex justify-between bg-yellow-200">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </div>
            </Container>
        </>
    )
}

export default Blogs