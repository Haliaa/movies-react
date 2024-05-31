import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { genreActions } from "../../redux";
import store from "../../redux/store.js";

const CustomSelect = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [, setQuery] = useSearchParams();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionToggle = (id) => {
    const selectedIndex = selectedOptions.indexOf(id);
    if (selectedIndex === -1) {
      setSelectedOptions([...selectedOptions, id]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== id));
    }
    onChange([...selectedOptions, id]);
  };

  const addGenreToFilterHandler = (id) => {
    dispatch(genreActions.addGenreToFilter(id));
    const {
      genres: { chosenGenres },
    } = store.getState();

    setQuery({ page: "1", with_genres: chosenGenres.join(",") });
  };

  return (
    <div className="custom-select">
      <h3>{placeholder}</h3>
      <div
        className={`selected-options ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length === 0 ? (
          <span className="placeholder">{placeholder}</span>
        ) : (
          selectedOptions.map((id) => (
            <span
              key={id}
              className="selected-option"
              onClick={() => {
                handleOptionToggle(id);
                addGenreToFilterHandler(id);
              }}
            >
              {id}
              <span className="remove-option">x</span>
            </span>
          ))
        )}
      </div>

      {isOpen && (
        <div className="options">
          {options.map(({ id, name }) => (
            <label key={id} className="option">
              <input
                type="checkbox"
                value={id}
                checked={selectedOptions.includes(id)}
                onChange={() => {
                  dispatch(genreActions.addGenreToFilter(id));
                  const {
                    genres: { chosenGenres },
                  } = store.getState();
  
                  setQuery({ page: "1", with_genres: chosenGenres.join(",") });
  
                  return handleOptionToggle(id);
                }}              />
              {name}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const DropdownSimple = () => {
  const dispatch = useDispatch();
  const { genreList, chosenGenres } = useSelector((state) => state.genres);

  const handleGenreChange = (selectedGenres) => {
    console.log("Selected genres:", selectedGenres);
    // Handle selected genres
  };

  useEffect(() => {
    dispatch(genreActions.getGenres());
  }, [dispatch]);

  return (
    <div>
      <CustomSelect
        options={genreList}
        placeholder="Жанр"
        onChange={handleGenreChange}
      />
    </div>
  );
};

export { DropdownSimple };
