import { createSlice } from "@reduxjs/toolkit";

//slice is the feature of your application
const initialState = {
    redditArticles: [],
    searchTerm: "",
    subreddit: "r/pics/",
    isLoading: false,
    hasError: false,
};

//action.payload carries the data necessary to update the application state
//slices break down the store into parts
//reducers reduce the state and action into one 
//payload - whatever you provide to your function to modify the state
const redditArticleSlice = createSlice({
    name: "reddit",
    initialState,
    reducers: {
        setArticles: (state, action) => {
            console.log("hi")
            state.redditArticles = action.payload;
        },
        startGetArticles: (state) => {
            state.isLoading = false;
            state.hasError = false;
        },
        getArticlesSuccess: (state, action) => {
            state.isLoading = false;
            state.redditArticles = action.payload;
        },
        getArticlesFailed: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
        setFilter: (state, action) => {
            state.searchTerm = action.payload
        },
        clearFilter: (state, action) => {
            state.searchTerm = ""
        }
    }
});

//Displaying the state of the application
//console.log(articleSlice);
export const { setFilter, clearFilter, setArticles } = redditArticleSlice.actions;

export default redditArticleSlice.reducer;