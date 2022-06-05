import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import {movieActions} from "../../redux";
import {MoviePoster} from "../../components";

const MovieInfoPage = () => {

    const {id} = useParams();
    const {state} = useLocation();
    const dispatch = useDispatch();

    const [movie, setMovie] = useState(state)

    useEffect(() => {
        if(!state){
            dispatch(movieActions.getMovie({id}))
        } else {
            setMovie(state)
        }
    }, [state, id])
    return (
        <div>
            {movie && <MoviePoster movie={movie}/>}
        </div>
    );
};

export {MovieInfoPage};
