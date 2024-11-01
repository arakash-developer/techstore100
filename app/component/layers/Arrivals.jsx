import React from 'react'

const Arrivals = () => {
    return (
        <>
            <div className="arrivals">
                <h1 className='py-[48px] font-bold text-[2.44rem] leading-none text-[#262626] font-dm'>New Arrivals</h1>
                <div className="itembox mb-[217px]">
                    <div className="main_product">
                        <Slider {...settings}>
                            {
                                products?.map((item) => (
                                    item ?
                                        <Item
                                            productTitle={item.title}
                                            productImg={item.image}
                                            productPrice={item.price}
                                            productTag={item.tag}
                                            productColor={item.color}
                                        /> : null

                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Arrivals