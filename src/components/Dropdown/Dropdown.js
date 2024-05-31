import { useState, useEffect } from "react";
import Chosen from "chosen-js";
import { useDispatch, useSelector } from "react-redux";
import { genreActions } from "../../redux";
import store from "../../redux/store";

// Import chosen.css or include it in your project to apply styling

const Dropdown = () => {
  const dispatch = useDispatch();

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const { genreList, chosenGenres } = useSelector((state) => state.genres);

  //   // Simulated data
  //   const genres = [
  //     { value: "29", label: "Драма" },
  //     { value: "30", label: "Комедія" },
  //     { value: "31", label: "Мелодрама" },
  //     // Add other genres here
  //   ];

  const countries = [
    "США",
    "Велика Британія",
    "Австралія",
    // Add other countries here
  ];

  // Event handler for selecting genres
  const handleGenreChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    dispatch(genreActions.addGenreToFilter(selectedOptions));
    const {
      genres: { chosenGenres },
    } = store.getState();
    setSelectedGenres(chosenGenres);
  };

  // Event handler for selecting countries
  const handleCountryChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setSelectedCountries(selectedOptions);
  };

  // Initialize Chosen plugin after component mounts
  useEffect(() => {
    const genreSelect = document.getElementById("genre-select");
    const countrySelect = document.getElementById("country-select");

    // Initialize Chosen for genre select
    Chosen(genreSelect, {
      width: "100%",
      placeholder_text_multiple: "Жанр",
      search_contains: true,
    });

    // Initialize Chosen for country select
    Chosen(countrySelect, {
      width: "100%",
      placeholder_text_multiple: "Країна",
      search_contains: true,
    });

    // Destroy Chosen instances when component unmounts
    return () => {
      Chosen.destroy(genreSelect);
      Chosen.destroy(countrySelect);
    };
  }, []);

  useEffect(() => {
    dispatch(genreActions.getGenres());
  }, [dispatch]);

  return (
    <div className="fb-sect">
      <select
        id="genre-select"
        name="cat"
        multiple
        onChange={handleGenreChange}
      >
        {genreList.map((genre) => (
          <option key={genre.value} value={genre.value}>
            {genre.label}
          </option>
        ))}
      </select>

      <select
        id="country-select"
        name="country"
        multiple
        onChange={handleCountryChange}
      >
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Dropdown };
