import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, themeReducer} from "./slices";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    theme: themeReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
