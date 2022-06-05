import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    page: 1,
    next: null,
    prev: null,
    movies: [],
    id: null,
    with_genres: null
};

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({page}) => {
        const {data} = await movieService.getAllMovies(page);
        return data
    }
);

const getMovie = createAsyncThunk(
    'movieSlice/getMovieById',
    async ({id}) => {
        const {data} = await movieService.getMovieById(id);
        return data
    }

);

const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMoviesByGenre',
    async ({page, with_genres}) => {
        const {data} = await movieService.getMoviesWithGenre(page, with_genres);
        return data
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMoviePage: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action)=> {
                const {page, next, prev, results} = action.payload;

                state.page = page;
                state.next = next;
                state.prev = prev;
                state.movies = results;

            })
            .addCase(getMovie.fulfilled, (state, action) => {
                const {id} = action.payload;
                state.id = id;
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                const {page, genres, with_genres, results} = action.payload;
                state.page = page;
                state.with_genres = with_genres
                state.genres = genres
                state.movies = results;
            })
    }
});

const {reducer: movieReducer, actions:{setMoviePage}} = movieSlice;

const movieActions ={
    getAllMovies,
    getMovie,
    getMoviesByGenre,
    setMoviePage
};

export{
    movieReducer,
    movieActions
}
