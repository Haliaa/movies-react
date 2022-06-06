const baseURL = process.env.REACT_APP_API

const urls = {
    moviesUrl: '/discover/movie',
    movieById: '/movie',
    imageSmall: 'https://image.tmdb.org/t/p/w200',
    imageOriginal: 'https://image.tmdb.org/t/p/original',
    getGenreList: '/genre/movie/list',
    searchMovie: '/search/movie'
}

export {
    baseURL,
    urls
}
