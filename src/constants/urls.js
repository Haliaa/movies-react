const baseURL = process.env.REACT_APP_API

const urls = {
    moviesUrl: '/discover/movie',
    movieById: '/movie',
    imageOriginal: 'https://image.tmdb.org/t/p/original',
    imageW200: 'https://image.tmdb.org/t/p/w200',
    getGenreList: '/genre/movie/list'
}

export {
    baseURL,
    urls
}
