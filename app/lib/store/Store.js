import { configureStore } from "@reduxjs/toolkit"
import counterSlice from '../features/counters/CouterSlice'
import MakersSlice from '../features/makers/MakersSlice'
import cartSlice from "../features/cart/CartSlice"

const Store = configureStore({
    reducer:{
        counters: counterSlice,
        cart: cartSlice,
        makers:MakersSlice,
    },
})
export default Store