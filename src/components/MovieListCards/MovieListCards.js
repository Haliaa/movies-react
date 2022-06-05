import React, {useEffect} from 'react';
import css from './MovieListCards.module.css'
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {LeftBar} from "../LeftBar/LeftBar";
import {useSearchParams} from "react-router-dom";

const MovieListCards = () => {
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1', with_genres:''});
    const page = query.get('page');
    const with_genres = query.get('with_genres');

    useEffect(() => {
        // if(with_genres){
            dispatch(movieActions.getMoviesByGenre({page, with_genres}))
        // }else
        // dispatch(movieActions.getAllMovies({page}))
    }, [page, with_genres, dispatch])



    const prevPage = () => {
        const prevPage = +page - 1;

        if (prevPage >= 1) {
            if(query.has('with_genres')){
                setQuery({page: `${prevPage}`, with_genres})
            }
        }
        setQuery({page: `${prevPage}` });
    };

    const nextPage = () => {
        const nextPage = +page + 1;
        // const genres = with_genres[0]
        if(nextPage<=500){
            if(query.has('with_genres')){
                setQuery({page: `${nextPage}`, with_genres})
            }
            setQuery({page: `${nextPage}`})
        }
    }
    return (
        <div style={{display: 'flex'}}>
            <LeftBar/>
            <div>
                <div className={css.cards}>
                    {movies.map((movie) => <MovieListCard key={movie.id} movie={movie}/>)}
                </div>
                <div className={css.pages}>
                    <button onClick={prevPage}>Prev page</button>
                    <h2>{page}</h2>
                    <button onClick={nextPage}>Next Page</button>
                </div>

            </div>
        </div>
    );
};

export {MovieListCards};
