import { configureStore } from "@reduxjs/toolkit";
import { redditArticleReducer } from "./redditSlice";

//setting up the store to manage global state
//the reducer controls the state in our slice
export const store = configureStore({
    reducer: {
        redditArticle: redditArticleReducer,
    },
});