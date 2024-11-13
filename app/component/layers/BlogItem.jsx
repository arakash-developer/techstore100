import React from 'react'

const BlogItem = ({className}) => {
    return (
        <>
            <div className={`w-full h-80 bg-red-300 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 ${className}`}>BlogItem</div>
        </>
    )
}

export default BlogItem