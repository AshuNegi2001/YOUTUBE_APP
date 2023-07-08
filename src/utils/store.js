import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import searchSlice from "./searchSlice";
import searchVideoSlice from "./searchVideoSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer : {
        nav: navSlice,
        search:searchSlice,
        searchVideo:searchVideoSlice,
        chat:chatSlice,
    }
});

export default store;