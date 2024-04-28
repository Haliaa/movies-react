import axios from "axios";
import {baseURL} from "../constants";

const token = process.env.API_KEY
const axiosService = axios.create({
    baseURL,
    headers: {
        'Authorization': `Bearer ${token}`
    }
})

export {
    axiosService
}
