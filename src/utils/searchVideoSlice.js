import { createSlice } from "@reduxjs/toolkit";
const searchVideoSlice = createSlice({
    name : "searchVideo",
    initialState:[],
    reducers: {
        addData : (state, action) => {
            const data = [...action.payload];
            return state = data;
            
        }
    }
})

export const { addData } = searchVideoSlice.actions;
export default searchVideoSlice.reducer;
