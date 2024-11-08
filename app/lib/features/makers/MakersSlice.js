const { createSlice } = require("@reduxjs/toolkit");

let initialState = {
    maker:0
}

const MakersSlice =  createSlice({
    name:"makers",
    initialState ,
     reducers:{
        increment : (state) =>{
            state.maker = state.maker + 1
        },
        decrement : (state) =>{
            state.maker = state.maker -1
        },
        reset : (state) =>{
            state.maker = 0
        },
        increasebyNumber : (state,action)=>{
            state.maker = state.maker + action.payload
        }
     }
})

export default MakersSlice.reducer;
export const { increment,decrement,reset,increasebyNumber} = MakersSlice.actions;