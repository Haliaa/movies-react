import {axiosService} from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getAllMovies:(page=1) => axiosService.get(urls.moviesUrl, {params: {page}}),
    getMovieById:(id) => axiosService.get(`${urls.movieById}/${id}`),
    getMoviesWithGenre:(page=1, with_genres) => axiosService.get(urls.moviesUrl, {params: {page, with_genres}}),
    searchMovieByTitle: (query, page = 1) => axiosService.get(urls.searchMovie, {params: {page, query}})
}

export {
    movieService
}
