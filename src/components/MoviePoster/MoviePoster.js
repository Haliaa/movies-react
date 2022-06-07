import React from 'react';
import {urls} from "../../constants";
import {Rating} from "react-simple-star-rating";
import {useSelector} from "react-redux";

const MoviePoster = ({movie: {genre_ids,original_language,original_title, overview,title,vote_average,vote_count,poster_path,release_date}}) => {

    const {genreList} = useSelector(state => state.genres)

    const genresIdsConnection = genre_ids.map(value => genreList.find(genre => genre.id === value));
    const genresNameIdsConnection = genresIdsConnection.map(value =>value.name);
    const genresOfMovie = genresNameIdsConnection.toString().replaceAll(',', ', ')

    return (
        <div style={{display: 'flex'}}>
            <div><img style={{width: '600px', margin: '20px'}} src={`${urls.imageOriginal}/${poster_path}`}
                      alt={title}/></div>
            <div>
                <div><h1>Title: {title}</h1></div>
                <hr/>
                <div><b>Original title: </b>{original_title} <br/><br/></div>
                <div><b>Original language: </b>{original_language}<br/><br/></div>
                <div><b>Genres: </b>{genresOfMovie}</div>
                <div><h4>Overview:</h4> {overview}</div>
                <div>Release date: {release_date}</div>
                <div>
                    <Rating initialValue={vote_average / 2} iconsCount={5}/>{vote_average}/10
                </div>
                <div>Votes: {vote_count}</div>
            </div>
        </div>
    );
};

export {MoviePoster};
