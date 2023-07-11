import { createSlice } from "@reduxjs/toolkit";
const searchVideoSlice = createSlice({
    name : "searchVideo",
    initialState: [null],
    reducers: {
        addData : (state, action) => {
            return state = [...action.payload];
            
            
        }
    }
})

export const { addData } = searchVideoSlice.actions;
export default searchVideoSlice.reducer;
