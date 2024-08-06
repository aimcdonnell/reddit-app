import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'reddit/fetchPosts',
    async (thunkAPI) => {
        try {
            const url = "https://www.reddit.com/r/pics?limit=10"
            const result = await axios(url)
            const data = await result.data//result.data reflects all the post data coming from the link above
            const posts = data.data.children
            console.log("posts",posts)
            return posts
        }
        catch (error) {
            console.log(error)
        }
    },
)

//slice is the feature of your application
const initialState = {
    redditArticles: [],
    status: "idle",
    searchTerm: "",
    subreddit: "r/pics/",
    error: ""
    /*isLoading: false,
    hasError: false,*/
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
        // startGetArticles: (state) => {
        //     state.isLoading = false;
        //     state.hasError = false;
        // },
        // getArticlesSuccess: (state, action) => {
        //     state.isLoading = false;
        //     state.redditArticles = action.payload;
        // },
        // getArticlesFailed: (state) => {
        //     state.isLoading = false;
        //     state.hasError = true;
        // },
        // setFilter: (state, action) => {
        //     state.searchTerm = action.payload
        // },
        // clearFilter: (state, action) => {
        //     state.searchTerm = ""
        // }
    },
    //used in relation to createAsyncThunk
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "loading"

                // action is inferred correctly here if using TS
            })
            
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.redditArticles = action.payload.map((post)=> post)

                // action is inferred correctly here if using TS
            })
            // You can chain calls, or have separate `builder.addCase()` lines each time
            
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed"
                // state.error = action.error.message
            })
        },


});


export const getPosts = (state) => state.reddit.redditArticles
export const getPostsStatus = (state) => state.reddit.status

//Displaying the state of the application
//console.log(articleSlice);
export const { setArticles } = redditArticleSlice.actions;

export default redditArticleSlice.reducer;