import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "nav",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toogleMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state) => {
            state.isMenuOpen = false;
        }
        
}})

export const { toogleMenu, closeMenu } = navSlice.actions;
export default navSlice.reducer;
