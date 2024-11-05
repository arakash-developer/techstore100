import { configureStore } from "@reduxjs/toolkit"
import counterSlice from '../features/counters/CouterSlice'
import cartSlice from "../features/cart/CartSlice"

const Store = configureStore({
    reducer:{
        counters: counterSlice,
        cart: cartSlice,
    },
})
export default Store