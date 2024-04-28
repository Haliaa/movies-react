import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieActions } from "../../redux";
import css from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();
  const inputName = useRef();

  const { search, page } = useSelector((state) => state.movies);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      console.log("search, page 2", search, page);
      dispatch(movieActions.setMovieSearch(search, page));
      dispatch(movieActions.searchMovie({ search, page }));
      return false;
    }
  };

  const handleOnChange = () => {
    console.log("value", inputName.current.value);
    dispatch(movieActions.setMovieSearch({search:inputName.current.value, page}));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder=" Search movie"
        className={css.search_movie}
        ref={inputName}
        onChange={handleOnChange}
      />
    </form>
  );
};

export { Search };
