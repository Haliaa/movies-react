import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import css from "./MovieListCards.module.css";
import { movieActions } from "../../redux";
import { MovieListCard } from "../MovieListCard/MovieListCard";
import { Sidebar } from "../Sidebar/Sidebar";

const MovieListCards = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const [query, setQuery] = useSearchParams({ page: "1" });
  const page = query.get("page");
  const with_genres = query.get("with_genres");

  useEffect(() => {
    dispatch(movieActions.getMoviesByGenre({ page, with_genres }));
  }, [page, with_genres, dispatch]);

  const prevPage = () => {
    const prevPage = +page - 1;
    if (prevPage >= 1) {
      if (query.has("with_genres")) {
        setQuery({ page: `${prevPage}`, with_genres });
      } else {
        setQuery({ page: `${prevPage}`, with_genres: "" });
      }
    }
  };

  const nextPage = () => {
    const nextPage = +page + 1;
    if (nextPage <= 500) {
      if (query.has("with_genres")) {
        setQuery({ page: `${nextPage}`, with_genres });
      } else {
        setQuery({ page: `${nextPage}`, with_genres: "" });
      }
    }
  };
  return (
    <div>
      <div style={{ display: "inline-flex" }}>
        <Sidebar />
        <div className={css.cards}>
          {movies.map((movie) => (
            <MovieListCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <div className={css.pages}>
        <button onClick={prevPage}>Prev</button>
        <h2>{page}</h2>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export { MovieListCards };
