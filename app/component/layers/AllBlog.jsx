import Container from './Container'
import BlogItem from './BlogItem'
import blogData from '@/app/lib/blogData'


const AllBlog = async() => {
  let res = await blogData()
  return (
    <>
      <Container>
        <h2 className='font-semibold text-[1.38rem] leading-7 mb-6 text-[var(--color---7)]'>Follow us on Instagram for News, Offers & More</h2>
        <div className="grid grid-cols-12 gap-x-2 gap-y-5 w-full ">
          {
            res.map((item)=>(
              <BlogItem key={item.id} img={item.img} date={`0${item.id}.0${item.userId}.2024`} body={item.title+item.body} className='' />
            ))
          }
        
        </div>
      </Container>
    </>
  )
}

export default AllBlog