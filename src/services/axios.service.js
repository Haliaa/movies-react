import axios from "axios";
import {baseURL, token} from "../constants";

const axiosService = axios.create({
    baseURL,
    headers: {
        'Authorization': `Bearer ${token}`
    }
})

export {
    axiosService
}
