import { configureStore } from "@reduxjs/toolkit";
import redditArticleReducer from "./redditSlice";
import commentReducer from "./commentsSlice";

//setting up the store to manage global state
//the reducer controls the state in our slice
//the store is an object that holds the state
export const store = configureStore({
    //reducer is where you store your state
    reducer: {
        reddit: redditArticleReducer,
        comments: commentReducer
    },
})