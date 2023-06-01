import axios from 'axios';


const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'
const api_key = process.env.REACT_APP_WEATHER_API;

console.log(process.env.REACT_APP_WEATHER_APP);
//get countries
const getCountries = () => {
    const request = axios.get(`${baseUrl}/api/all`)
    return request.then(response => response.data);
}

//get a single country
const getSingleCountry = (name) => {
    const request = axios.get(`${baseUrl}/api/name/${name}`)
    return request.then(response => response.data);
}

//weather
const getWeather = (lat, lon) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`);
    return request.then(response => response.data);
}

 export default {
    getCountries,
    getSingleCountry,
    getWeather
 }