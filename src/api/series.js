import axios from "axios";

export default class Series {
    static getAll() {
        return axios.get(process.env.REACT_APP_API_BASE_URL + "/series");
    }

    static getByFilters(filters) {
        let queryParams = Object.keys(filters).map(key => key + "=" + filters[key]).join("&");
        return axios.get(process.env.REACT_APP_API_BASE_URL + "/series?" + queryParams);
    }
}