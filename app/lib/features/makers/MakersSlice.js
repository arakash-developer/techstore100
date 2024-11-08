const { createSlice } = require("@reduxjs/toolkit");
let initialState = [
    {
        id: 1,
        maker: 0
    },
    {
        id: 2,
        maker: 0
    }
]

const MakersSlice = createSlice({
    name: "makers",
    initialState,
    reducers: {
        increment: (state) => {
            state.maker = state.maker + 1
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

export default MakersSlice.reducer;
export const { increment, decrement, reset, increasebyNumber } = MakersSlice.actions;