import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import searchSlice from "./searchSlice";
import searchVideoSlice from "./searchVideoSlice";

const store = configureStore({
    reducer : {
        nav: navSlice,
        search:searchSlice,
        searchVideo:searchVideoSlice,
    }
});

export default store;