import { createSlice } from '@reduxjs/toolkit';

//slice is the feature of your application
const initialState = {
    redditArticle: [],
    searchTerm: '',
    subreddit: 'r/pics/',
    isLoading: true,
    hasError: false,
};

const redditArticleSlice = createSlice({
    name: 'redditArticle',
    initialState,
});

//Displaying the state of the application
//console.log(articleSlice);

export default redditArticleSlice.reducer;