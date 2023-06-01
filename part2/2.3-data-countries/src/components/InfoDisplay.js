import { useState, useEffect } from 'react';
import axiosService from '../services/axios.service';
import { ErrorMsg } from './Messages';

const SingleCountry = ({ btnText, country, handleShow }) => {
    return (
        <>
            <p className='countryQuery'>{country.name.common}
                <button key={country.name.common}
                    onClick={() => handleShow()}>
                    {
                        btnText ? 'Show Info' : 'Hide Info'
                    }
                </button>
            </p>
            {
                !btnText &&
                <>
                    <h2>{country.name.common}</h2>
                    <ul>
                        <li key='continent'><em>Part of:</em> {country.continents[0]}</li>
                        <li key='official'><em>Official name:</em> {country.name.official}</li>
                        <li key='capital'><em>Capital:</em> {country.capital[0]}</li>
                        <li key='area'><em>Area:</em> {country.area}</li>
                        <li key='currency'><em>Currency: </em>
                            {
                                Object.keys(country.currencies)
                            }
                        </li>
                    </ul>
                    <h3>Flag:</h3>
                    <img src={country.flags.png} alt={country.flag.alt} />
                </>
            }
        </>
    );
}

const InfoDisplay = ({ search, errorMsg }) => {
    const [btnText, setBtnText] = useState(true);
    const [weatherData, setWeatherData] = useState(null);

    //for the weather functionality
    const coordinates = [];
    if (search.length === 1) {
        search.map(c => {
            const lat = c.capitalInfo.latlng[0];
            const lon = c.capitalInfo.latlng[1]
            return coordinates.push(lat, lon);
        });
    }

    useEffect(() => {
        //controlling execution of request
        if (search.length === 1) {
            axiosService.getWeather(coordinates[0], coordinates[1])
                .then(data => setWeatherData(data))
        }
    });

    const weatherIcon = weatherData.weather[0].icon;
    const weatherImg = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`

    const handleShow = () => {
        setBtnText(!btnText)
    }

    return (
        <div className="display">
            {
                errorMsg && <ErrorMsg />
            }
            {
                search.length < 10 && search.length > 1 ?
                    search.map(country => {
                        return (
                            <>
                                <SingleCountry
                                    key={country.name.common}
                                    country={country}
                                    btnText={btnText}
                                    handleShow={handleShow}
                                />
                                <hr />
                            </>
                        )
                    }) :
                    search.length === 1 ?
                        search.map(country => {
                            return (
                                <>
                                    <h2>{country.name.common}</h2>
                                    <ul>
                                        <li key='continent'><em>Part of:</em> {country.continents[0]}</li>
                                        <li key='official'><em>Official name:</em> {country.name.official}</li>
                                        <li key='capital'><em>Capital:</em> {country.capital[0]}</li>
                                        <li key='area'><em>Area:</em> {country.area}</li>
                                        <li key='currency'><em>Currency: </em>
                                            {
                                                Object.keys(country.currencies)
                                            }
                                        </li>
                                    </ul>
                                    <h3>Flag:</h3>
                                    <img src={country.flags.png} alt={country.flag.alt} />
                                    <h3>Current weather for {country.capital}:</h3>
                                    {weatherData &&
                                        <>
                                            <p> The temperature is {weatherData.main.temp} Celsius</p>
                                            <img src={weatherImg} />
                                        </>
                                    }
                                </>
                            )
                        }) :
                        search.length > 10 && search.length < 220 ?
                            <p className='error'>Too many results, please be more specific.</p> :
                            <p className='instruction'>Please type the name of the country to show you information.</p>

            }
        </div>
    );
}

export default InfoDisplay;