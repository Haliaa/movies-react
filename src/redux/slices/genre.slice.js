import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {
    genreList: [],
    id: null,
    page: 1,
    genre: null
};

const getGenres = createAsyncThunk(
    'getGenres',
    async () => {
        const {data} = await genreService.getGenreList();
        return data
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenreId: (state, action) => {
            state.id = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                const {genres} = action.payload;
                state.genreList = genres
            })
    }
});

const {reducer: genreReducer, actions: {setGenreId}} = genreSlice;

const genreActions = {
    getGenres,
    setGenreId
};

export {
    genreReducer,
    genreActions
}
