const baseURL = process.env.REACT_APP_API

const urls = {
    moviesUrl: '/discover/movie',
    movieById: '/movie',
    imageSmall: 'https://image.tmdb.org/t/p/w200',
    imageOriginal: 'https://image.tmdb.org/t/p/original',
    getGenreList: '/genre/movie/list',
    searchMovie: '/search/movie'
}
const theme = {
    dark: {
        background: 'rgba(63,28,28,0.83)',
    },

    light: {
        background: 'rgba(215,198,198,0.83)',
    },

    white: '#fff',
    black: '#000',
    blue: '#2d2d7e',
    lightBlue: '#9494f5'
}
export {
    baseURL,
    urls,
    theme
}
