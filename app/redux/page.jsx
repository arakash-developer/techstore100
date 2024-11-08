"use client"
import React, { useRef } from 'react'
import Container from '@/app/component/layers/Container'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '@/app/lib/features/counters/CouterSlice'
import { increasebyNumber } from '@/app/lib/features/makers/MakersSlice'

const Reduxx = () => {
    const dispatch = useDispatch()
    const counters = useSelector((state) => {
        return state.counters
    })


    let totalCount = counters.reduce((prevvalue, currentvalue) => (prevvalue + currentvalue.value), 0)
    
    
    let handlerIncrement = (id) => {
        dispatch(increment(id))
    }
    let handlerDecrement = (id) => {
        dispatch(decrement(id))
        
    }
    
    let handlerIncByNum = (id) => {
        let val = document.getElementById(`val${id}`);
        dispatch(
            increasebyNumber(
                {
                    id,
                    val: val.value,
                }
            ))
        }
        
        const Makerss = useSelector((state) => {
            return state.makers
        })
    
        console.log(Makerss);
        const totalCount2 = Makerss.reduce((prevvalue, currentvalue) => (prevvalue + currentvalue.maker), 0)
        console.log(totalCount2);
        return (
        <div>
            <Container className='py-10'>
                {
                    counters.map((item) => (<h1 key={item.id}>Counter:{item.id} -- {item.value}</h1>))
                }
                <br />
                <h1>
                    Total: {totalCount}
                </h1>

                {
                    counters.map((counter) => (
                        <div key={counter.id} className='mt-3'>
                            <button className='px-5 py-3 bg-red-300' onClick={() => handlerIncrement(counter.id)}>Increment</button>
                            <button className='ml-2 px-5 py-3 bg-red-300' onClick={() => handlerDecrement(counter.id)}>Decrement</button>
                        </div>
                    ))
                }
                {/* <div className="mt-5">
                    <h1>{Makers}</h1>
                    <input id='val' type="text" placeholder='Number' className='border border-red-300 mr-5 px-2 py-3' />
                    <button onClick={handlerIncByNum} type='button' className='px-5 py-3 bg-red-300 mt-5'>Increase By Number</button>
                </div> */}

                {
                    Makerss.map((item) => (
                        <div key={item.id} className='my-4'>
                            <h1>{item.maker}</h1>
                            {/* <h1>Id = {item.id}</h1> */}
                            <input id={`val${item.id}`} type="text" placeholder='Number' className='border border-red-300 mr-5 px-2 py-3' />
                            <button onClick={() => handlerIncByNum(item.id)} type='button' className='px-5 py-3 bg-red-300 mt-5'>Increase By Number</button>
                        </div>
                    ))
                }
                <h1>
                    Total: {totalCount2}
                </h1>

            </Container>
        </div>
    )
}

export default Reduxx