import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './Genre.module.css'

const Genre = ({genre: {id, name}}) => {
    const [query, setQuery] = useSearchParams();
    const {page} = useSelector(state => state.movies);

    const moviesListWith_genres = () => {
        setQuery({page: `${page}`, with_genres: `${id}`});
    }

    return (
        <div>
            <button onClick={moviesListWith_genres} className={css.genre}>{name}</button>
        </div>
    );
};

export {Genre};
