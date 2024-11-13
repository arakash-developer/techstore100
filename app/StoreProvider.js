"use client"
import React from 'react'
import { Provider } from 'react-redux'
import Store from '@/app/lib/store/Store'
import TechContex from './lib/context/TechContex'

const StoreProvider = ({ children }) => {
    return (
        <>
            <Provider store={Store}>
                <TechContex>
                    {children}
                </TechContex>
            </Provider>
        </>

    )
}

export default StoreProvider