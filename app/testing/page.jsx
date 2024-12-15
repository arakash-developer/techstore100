import React from 'react'
import Container from '@/app/component/layers/Container'
import A from './A'
import {Ar as Arc} from './A'

let cal = (b,c) => {
    let a = b + c;
    return a
}

const page = () => {
    let person = {
        name:"Rimjim",
        theme:{
            color:"red",
            fontSize:"30px",
            backgroundColor:"yellow"
        },
    }
    return (
    <div className='my-52'>
        <Container>
        <h1 style={person.theme}
        >Testing...{person.name}</h1>
        <A />
        <Arc />
        <h1>Cal-{cal(2,101)}</h1>
        </Container>
    </div>
  )
}

export default page