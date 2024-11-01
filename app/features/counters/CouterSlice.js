import { createSlice } from "@reduxjs/toolkit"
const initialState = [
    {
        id: 1,
        value:10,
    },
    {
        id: 2,
        value:30,
    }
]
const counterSlice = createSlice({
    name :"counterslice",
    initialState : initialState,
    reducers: {
        increment : (state,action)=>{
            let counterIndex = state.findIndex((c) => c.id === action.payload)
            state[counterIndex].value++ 
        },
        decrement : (state,action)=>{
            let counterIndex = state.findIndex((c) => c.id === action.payload)
            state[counterIndex].value--
        }
    }
})
export default counterSlice.reducer;
export const {increment,decrement} = counterSlice.actions;