import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://universities.hipolabs.com/search?name=middle&country=',
})

export const universityAPI = {
    getUniversity(country) {
        return instance.get("http://universities.hipolabs.com/search?name=middle&country="+country)
            .then(response => response.data);
    }
}