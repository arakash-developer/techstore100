"use client"
import React from 'react'
import Container from '@/app/component/layers/Container'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '@/app/features/counters/CouterSlice'

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
            </Container>
        </div>
    )
}

export default Reduxx