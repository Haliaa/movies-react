import axios from "axios";
import {baseURL} from "../constants";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2QxNWM5ODBjODY4NmU0MGM2YTg2ZTdiM2I0ZDE0ZSIsInN1YiI6IjYwYzNjNmQzYTc2YWM1MDA1ODAwOTkwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OebMhuJQINmFUs-UFAxdpo_zGh7ZJ_3ZSCW7myYYTEA'
const axiosService = axios.create({
    baseURL,
    headers: {
        'Authorization': `Bearer ${token}`
    }
})

export {
    axiosService
}
