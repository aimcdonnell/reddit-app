import { createSlice } from "@reduxjs/toolkit";

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
        setArticles(state, action) {
            state.redditArticle = action.payload;
        },
        startGetArticles(state) {
            state.isLoading = false;
            state.hasError = false;
        },
        getArticlesSuccess(state, action){
            state.isLoading = false;
            state.redditArticle = action.payload;
        },
        getArticlesFailed(state) {
            state.isLoading = false;
            state.hasError = true;
        },
        setFilter(state, action) {
            state.redditArticle.filter(i => i !== action.payload) 
        },
        clearFilter(state, action) {
            state.searchTerm = ""
        }
    }
});

//Displaying the state of the application
//console.log(articleSlice);
export const { setFilter } = redditArticleSlice.actions;

export default redditArticleSlice.reducer;