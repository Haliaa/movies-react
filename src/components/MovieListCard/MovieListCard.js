import React from 'react';
import {urls} from "../../constants";
import css from './MovieListCard.module.css'
import {Link} from "react-router-dom";

const MovieListCard = ({movie}) => {

    const {id, title, original_title, backdrop_path} = movie

    return (
        <div className={css.card}>
            <Link to={`/movie/${id}`} state={movie}>
                <img src={`${urls.imageW200}/${backdrop_path}`} alt={title}/>
                <div className={css.txt_center}>
                    <h4>{original_title}</h4>
                </div>
            </Link>
        </div>
    );
};

export {MovieListCard};
