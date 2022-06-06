import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux";
import {Genre} from "../Genre/Genre";

const GenreList = () => {
    const dispatch = useDispatch();
    const {genreList} = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreActions.getGenres());
    },[dispatch])

    return (
        <div>
            {genreList.map(genre=> <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenreList};
