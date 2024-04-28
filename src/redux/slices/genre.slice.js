import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { genreService } from "../../services";

const initialState = {
  genreList: [],
  id: null,
  page: 1,
  genre: null,
  chosenGenres: sessionStorage.getItem("chosenGenres")
    ? JSON.parse(
        JSON.parse(JSON.stringify(sessionStorage.getItem("chosenGenres")))
      )
    : [],
};

const getGenres = createAsyncThunk("getGenres", async () => {
  const { data } = await genreService.getGenreList();
  return data;
});

const genreSlice = createSlice({
  name: "genreSlice",
  initialState,
  reducers: {
    setGenreId: (state, action) => {
      state.id = action.payload;
    },
    addGenreToFilter: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.chosenGenres.find(
        (genreId) => genreId === newItem
      );
      if (existingItem) {
        state.chosenGenres = state.chosenGenres.filter(
          (genreId) => genreId !== newItem
        );
      } else {
        state.chosenGenres.push(newItem);
      }

      sessionStorage.setItem("chosenGenres", JSON.stringify(state.chosenGenres));
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      const { genres } = action.payload;
      state.genreList = genres;
    });
  },
});

const {
  reducer: genreReducer,
  actions: { setGenreId, addGenreToFilter },
} = genreSlice;

const genreActions = {
  getGenres,
  setGenreId,
  addGenreToFilter,
};

export { genreReducer, genreActions };
