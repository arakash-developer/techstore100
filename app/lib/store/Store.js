import { configureStore } from "@reduxjs/toolkit"
import counterSlice from '../features/counters/CouterSlice'
import MakersSlice from '../features/makers/MakersSlice'
import cartSlice from "../features/cart/CartSlice"
import PreventSlice from "../features/prevent/PreventSlice"

const Store = configureStore({
    reducer:{
        counters: counterSlice,
        cart: cartSlice,
        makers:MakersSlice,
        prevent:PreventSlice,
    },
})
export default Store