import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { genreActions } from "../../redux";

import css from "./Genre.module.css";

const Genre = ({ genre: { id, name }, isChosen }) => {
  const dispatch = useDispatch();

  const [, setQuery] = useSearchParams();
  const { page } = useSelector((state) => state.movies);
  const { chosenGenres } = useSelector((state) => state.genres);
  const searchG = chosenGenres.join(',')

  const addGenreToFilterHandler = () => {
    dispatch(genreActions.addGenreToFilter(id));
    setQuery({ page: `${page}`, with_genres: searchG });
  };

  return (
    <div>
      <button
        onClick={() => {
          addGenreToFilterHandler();
        }}
        className={css.genre}
        style={{ backgroundColor: isChosen ? "#e71111" : "inherit" }}
      >
        {name}
      </button>
    </div>
  );
};

export { Genre };
