import {axiosService} from "./axios.service";
import {urls} from "../constants";

const genreService = {
    getGenreList:() => axiosService.get(urls.getGenreList),
};

export {
    genreService
}
