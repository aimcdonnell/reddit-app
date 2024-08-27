import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (thunkAPI) => {

        try { 
            const url = "https://www.reddit.com/r/pics/comments.json"
            const result = await axios(url)
            const data = result.data//result.data reflects all the comment data coming from the reddit json link above
            const comments = data.data.children
            console.log("commentSlice.js comments", comments)
            return comments
        }
        catch (error) {
            console.log(error)

        }
        

    },
)

//slice is the feature of your application
const initialState = {
    redditComments: [],
    status: "idle",
    error: ""
};

//action.payload carries the data necessary to update the application state
//slices break down the store into parts
//reducers reduce the state and action into one 
//payload - whatever you provide to your function to modify the state
const redditCommentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.status = "loading"

            })
            
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.status = "succeeded"
               
                state.redditComments = action.payload.map((comment) => comment)

            })
            // You can chain calls, or have separate `builder.addCase()` lines each time
            
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
        }

});


export const getComments = (state) => state.comments.redditComments
export const getCommentsStatus = (state) => state.comments.status

//Displaying the state of the application
//console.log(articleSlice);


export default redditCommentsSlice.reducer;