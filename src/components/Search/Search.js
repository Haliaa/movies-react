import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import css from './Search.module.css'

const Search = () => {
    const {search, page} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const inputName = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search) {
            dispatch(movieActions.setMovieSearch(search, page));
            dispatch(movieActions.searchMovie({search, page}));
            inputName.current.value = ''
            return false
            }};

    const handleOnChange = () => {
        dispatch(movieActions.setMovieSearch(inputName.current.value));

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text" placeholder=" Search movie" className={css.search_movie}
                ref={inputName} onChange={handleOnChange}
            />
        </form>
    );
};

export {Search};
