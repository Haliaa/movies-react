import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux";
import {Genre} from "../Genre/Genre";

const GenreList = () => {
    const {genreList} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenres());
    },[])

    return (
        <div>
            {genreList.map(genre=> <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenreList};
