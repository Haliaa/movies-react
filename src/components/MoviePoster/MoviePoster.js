import React from 'react';
import {urls} from "../../constants";
import {Rating} from "react-simple-star-rating";

const MoviePoster = ({movie:{original_title, overview, title, vote_average, vote_count, poster_path, release_date}}) => {

    return (
        <div style={{display: 'flex'}}>
            <div><img style={{width: '600px', margin:'20px'}} src={`${urls.imageOriginal}/${poster_path}`} alt={title}/></div>
            <div>
                <div><h1>title: {title}</h1></div>
                <hr/>
                <div><h3>Original title: {original_title}</h3></div>
                <div><h4>Overview:</h4> {overview}</div>
                <div>Release date: {release_date}</div>
                <div>
                    <Rating initialValue={vote_average/2} iconsCount={5}/>{vote_average}/10
                </div>
                <div>Votes: {vote_count}</div>
            </div>
        </div>
    );
};

export {MoviePoster};
