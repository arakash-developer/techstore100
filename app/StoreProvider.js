"use client"
import React from 'react'
import { Provider } from 'react-redux'
import Store from './store/Store'

const StoreProvider = ({ children }) => {
    return (
        <>
            <Provider store={Store}>
                {children}
            </Provider>
        </>

    )
}

export default StoreProvider