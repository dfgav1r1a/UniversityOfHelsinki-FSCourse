import { useState, useEffect } from "react";
import axiosService from './services/axios.service';
import SearchRecord from "./components/searchRecord";
import Records from "./components/showRecords";
import Form from "./components/addRecord";
import {SuccessMsg, Error} from "./components/clientMsg";

function App() {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState('');//state for name input
  const [phoneNumber, setPhoneNumber] = useState('');//state for phoneNumber input
  const [query, setQuery] = useState('');//state for search functionality
  const [errorMessage, setErrorMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    console.log('fetching');
    axiosService
      .getRecords()
      .then(records => {
        console.log('got data from server... rendering data in app');
        setPeople(records);
      })
      .catch(error => console.log("Something went wrong, failed to fetch data from the server", error));
  }, []);

  function handleQuery({ target }) {
    setQuery(target.value);
  }

  //search functionality
  const queryResult = people.filter(record => {
    const lowerCase = record.name.toLowerCase();
    return lowerCase.includes(query);
  })

  return (
    <div>
      <h2 className="title">Phonebook</h2>
      <SearchRecord records={people} handleQuery={handleQuery} />
      <h2 className="title">Add new record</h2>
      <Form people={people}
        setPeople={setPeople}
        newName={newName}
        setNewName={setNewName}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        setSuccessMsg={setSuccessMsg}
        setErrorMessage={setErrorMessage}
      />
      {
        successMsg ? <SuccessMsg successMsg={successMsg} /> :
        errorMessage ? <Error errorMessage={errorMessage}/> :
        <></>
      }
      <h2 className="title">Records</h2>
      <Records 
        records={people} setPeople={setPeople}
        setSuccessMsg={setSuccessMsg}
        setErrorMessage={setErrorMessage}
        queryResult={queryResult} 
      />
    </div>
  );
}

export default App;
