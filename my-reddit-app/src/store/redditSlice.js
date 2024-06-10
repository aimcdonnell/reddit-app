import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    article: [],
    searchTerm: '',
    subreddit: 'r/pics/',
    isLoading: true,
    hasError: false

}