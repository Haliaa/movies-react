import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer} from "./slices";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
