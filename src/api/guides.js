import axios from "axios";

export default class GuidesApi {
    static getByFilters(filters) {
        let queryParams = Object.keys(filters).map(key => key + "=" + filters[key]).join("&");
        return axios.get(process.env.REACT_APP_API_BASE_URL + "/guides?" + queryParams);
    }

    static getAll() {
        return axios.get(process.env.REACT_APP_API_BASE_URL + "/guides");
    }
}