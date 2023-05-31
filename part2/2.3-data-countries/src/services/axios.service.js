import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'
//get countries
const getCountries = () => {
    const request = axios(`${baseUrl}/api/all`)
    return request.then(response => response.data);
}

//get a single country
const getSingleCountry = (name) => {
    const request = axios(`${baseUrl}/api/name/${name}`)
    return request.then(response => response.data);
}

 export default {
    getCountries,
    getSingleCountry
 }