import Image from 'next/image'
import React from 'react'
import Msi from '@/public/brands/msi.png'
import Ad from '@/public/brands/ad.png'
import Ra from '@/public/brands/ra.png'
import Rd from '@/public/brands/rd.png'
import Ther from '@/public/brands/ther.png'
import Hp from '@/public/brands/hp.png'
import Gi from '@/public/brands/gi.png'
import Container from './Container'

const Brands = () => {
    return (
        <Container>
            <div className='flex justify-between items-center'>
                <Image src={Rd} alt={Rd} />
                <Image src={Msi} alt={Msi} />
                <Image src={Ra} alt={Ra} />
                <Image src={Ther} alt={Ther} />
                <Image src={Ad} alt={Ad} />
                <Image src={Hp} alt={Hp} />
                <Image src={Gi} alt={Gi} />
            </div>
        </Container>
    )
}

export default Brands