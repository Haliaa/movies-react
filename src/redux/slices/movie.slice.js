import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies: [],
    id: null,
    page: 1,
    next: null,
    prev: null,
    with_genres: null,
    search: '',
    theme: JSON.parse(localStorage.getItem('theme')) || false
};

const getAllMovies = createAsyncThunk(
    'getAllMovies',
    async ({page}) => {
        const {data} = await movieService.getAllMovies(page);
        return data
    }
);

const getMovie = createAsyncThunk(
    'getMovieById',
    async ({id}) => {
        const {data} = await movieService.getMovieById(id);
        return data
    }

);

const getMoviesByGenre = createAsyncThunk(
    'getMoviesByGenre',
    async ({page, with_genres}) => {
        const {data} = await movieService.getMoviesWithGenre(page, with_genres);
        return data
    }
)

const searchMovie = createAsyncThunk(
    'searchMovie',
    async ({ page, search}) => {
        const {data} = await movieService.searchMovieByTitle(page, search);
        return data
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMoviePage: (state, action) => {
            state.page = action.payload
        },
        setMovieSearch: (state, action) => {
            state.search = action.payload
            state.page = action.payload
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action)=> {
                const {page, next, prev, results} = action.payload;
                state.prev = prev
                state.next = next
                state.page = page
                state.movies = results

            })
            .addCase(getMovie.fulfilled, (state, action) => {
                const {id} = action.payload
                state.id = id
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                const {page, genres, with_genres, results} = action.payload
                state.page = page
                state.movies = results
                state.genres = genres
                state.with_genres = with_genres
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                const {page, search, results} = action.payload
                state.page = page
                state.search = search
                state.movies = results
            })
    }
});
const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
    toggleTheme:(state)=> {
        state.theme = !state.theme
    }}
});
const {reducer: movieReducer, actions:{setMoviePage,setMovieSearch}} = movieSlice;
const {reducer: themeReducer, actions:{toggleTheme}} = themeSlice;
const themeActions = {
    toggleTheme
};

const movieActions ={
    getAllMovies,
    getMovie,
    getMoviesByGenre,
    setMoviePage,
    setMovieSearch,
    searchMovie
};

export{
    movieReducer,
    movieActions,
    themeReducer,
    themeActions
}
