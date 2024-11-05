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
        }
     }
})

export default MakersSlice.reducer;
export const { increment,decrement,reset} = MakersSlice.actions;