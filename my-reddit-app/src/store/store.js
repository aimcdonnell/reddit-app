import { configureStore } from "@reduxjs/toolkit";
import redditArticleReducer from "./redditSlice";

//setting up the store to manage global state
//the reducer controls the state in our slice
export const store = configureStore({
    //reducer is where you store your state
    reducer: {
        redditArticle: redditArticleReducer,
    },
})