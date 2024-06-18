import { createSlice } from "@reduxjs/toolkit";
import { getSubredditPosts, getSubredditPostComments } from "../components/api/api";

//slice is the feature of your application
const initialState = {
    redditArticle: [],
    searchTerm: "",
    subreddit: "r/pics/",
    isLoading: false,
    hasError: false,
};

//action.payload carries the data necessary to update the application state
const redditArticleSlice = createSlice({
    name: "redditArticle",
    initialState,
    reducers: {
        setArticles(action) {
            state.redditArticle = action.payload;
        },
        startGetArticles(state) {
            state.isLoading = false;
            state.hasError = false;
        },
        getArticlesSuccess(action){
            state.isLoading = false;
            state.redditArticle = action.payload;
        },
        getArticlesFailed() {
            state.isLoading = false;
            state.hasError = true;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSubreddit() {
            state.setSubreddit = action.payload;
            state.searchTerm = "";
        },

    }
});

//Displaying the state of the application
//console.log(articleSlice);

export default redditArticleSlice.reducer;