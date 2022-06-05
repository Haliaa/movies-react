import React from 'react';
import {urls} from "../../constants";

const MoviePoster = ({movie}) => {
const {original_title, overview, title, vote_average, poster_path, release_date} = movie;



    return (
        <div style={{display: 'flex'}}>
            <div><img style={{width: '600px', margin:'20px'}} src={`${urls.imageOriginal}/${poster_path}`} alt=""/></div>
            <div>
                <h1>{title}</h1>
                <h4>Original title: {original_title}</h4>
                <div>{overview}</div>
                <p>{release_date}</p>
                <p>{vote_average}</p>
            </div>
        </div>
    );
};

export {MoviePoster};
