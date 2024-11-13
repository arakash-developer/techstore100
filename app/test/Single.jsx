import React from 'react'

const Single = async () => {
    const blops = await fetch("https://akashtechstore.onrender.com/products")
    let res = await blops.json()
    return (
        <div>
            <div className="">Single</div>
            <div className="">
                {
                    res.map((item) => (
                        <h1 key={item.id}>{item.title}</h1>
                    ))
                }
            </div>
        </div>
    )
}

export default Single