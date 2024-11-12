const { createSlice } = require("@reduxjs/toolkit");
let initialState = [
    {
        id: 1,
    
    },
    {
        id: 2,
      
    }
]

const PreventSlice = createSlice({
    name: "prevent",
    initialState,
    reducers: {
        increment: (state,action) => {
            // let counterIndex = state.findIndex((c) => c.id === Number(action.payload.id))
            // state[counterIndex].loading = true
            state.loading = true
        },
        decrement: (state) => {
            state.maker = state.maker - 1
        },
        reset: (state) => {
            state.maker = 0
        },
        increasebyNumber: (state, action) => {
            let counterIndex = state.findIndex((c) => c.id === Number(action.payload.id))
            state[counterIndex].maker = state[counterIndex].maker + Number(action.payload.val)
        }
    }
})

export default PreventSlice.reducer;
export const { increment, decrement, reset, increasebyNumber } = PreventSlice.actions;