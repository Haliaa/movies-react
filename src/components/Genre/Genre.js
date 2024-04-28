import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { genreActions } from "../../redux";
import store from "../../redux/store.js";

import css from "./Genre.module.css";

const Genre = ({ genre: { id, name }, isChosen }) => {
  const dispatch = useDispatch();

  const [, setQuery] = useSearchParams();

  const addGenreToFilterHandler = () => {
    dispatch(genreActions.addGenreToFilter(id));
    const {
      genres: { chosenGenres },
    } = store.getState();

    setQuery({ page: "1", with_genres: chosenGenres.join(",") });
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
