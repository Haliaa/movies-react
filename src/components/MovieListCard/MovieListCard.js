import React from 'react';
import {urls} from "../../constants";
import css from './MovieListCard.module.css'
import {Link} from "react-router-dom";

const MovieListCard = ({movie, movie:{id, title, original_title, backdrop_path}}) => {

    return (
        <div className={css.card}>
            <Link to={`/movie/${id}`} state={movie}>
                <img src={`${urls.imageSmall}/${backdrop_path}`} alt={title}/>
                <div className={css.txt_center}>
                    <h4>{original_title}</h4>
                </div>
            </Link>
        </div>
    );
};

export {MovieListCard};
