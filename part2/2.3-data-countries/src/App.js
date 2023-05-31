import { useState, useEffect } from 'react';
import axiosService from './services/axios.service';
import Form from './components/Form';
import InfoDisplay from './components/InfoDisplay';


function App() {
  const [countriesData, setCountriesData] = useState(null);
  const [countryQuery, setCountryQuery] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  //loading all countries and saving that into state 
  useEffect(() => {
    console.log('fetching resource and rendering');
    axiosService.
      getCountries()
      .then(data => {
        setCountriesData(data);
      })
      .catch(e => {
        console.log(e.message, 'Something went wrong fetching the resource, please try again');
        setErrorMsg('Something went wrong fetching the resource, please try again')
        setTimeout(() => {setErrorMsg('')}, 5000) ;
      });
    console.log('data fetched and app terminated rendering');
  }, []);

  if (!countriesData) return null;

  //search functionality
  const search = countriesData.filter(country => {
    const name = country.name.common.toLowerCase();
    // return name === countryQuery; this line shows the exact match
    return name.includes(countryQuery);//this line shows several options
  });

  return (
    <>
      <Form countries={countriesData} setCountryQuery={setCountryQuery} />
      <InfoDisplay
        countriesData={countriesData}
        search={search}
        countryQuery={countryQuery}
        errorMsg={errorMsg}
      />

    </>
  );
}

export default App;
