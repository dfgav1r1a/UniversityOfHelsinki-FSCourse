import axiosService from "../services/axios.service";

const Form = ({ people, setPeople, newName, setNewName, phoneNumber, setPhoneNumber }) => {

  const handleOnchange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //creating new record
    const newPerson = {
      name: newName,
      number: phoneNumber,
      // id: people.length + 1 --- not adding since json-server adds automatically an id
    };

    //checking for duplicate using the state before making a PUT req to server
    const duplicateRecord = people.find(record => record.name === newPerson.name);
    console.log(newPerson, duplicateRecord);

    if (!duplicateRecord) {
      console.log("Adding new record to phonebook");
      //POST req
      axiosService
        .createRecord(newPerson)
        .then(record => {
          setPeople(people.concat(record));
          setNewName('');
          setPhoneNumber('');
          console.log("New record successfuly added to phonebook");
        })
        .catch(error => console.log("Failed to create a new record", error));
    } else if (duplicateRecord && newPerson.number !== duplicateRecord.number) {
        const confirmation = window.confirm(`It looks like the phone number in ${newPerson.name} is different, are you sure you want to change it?`);
        confirmation ? 
        //PUT request
          axiosService
            .updateRecord(duplicateRecord.id, newPerson)
            .then(returnedRecord => {
              setPeople(people.map(record => record.id !== duplicateRecord.id ? record : returnedRecord));
              window.alert('Phone number updated');
            })
            .catch(error => console.log(error)) :
            window.alert('Got it, I won\'t change anything.');
    } else {
        window.alert(`There is already a record with ${duplicateRecord.name}.`);
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name:</label>
          <input id="name" type='text' value={newName} onChange={handleOnchange} />
        </div>
        <div>
          <label htmlFor="phone-number">phone:</label>
          <input id="phone-number" type='text' value={phoneNumber} onChange={({ target }) => setPhoneNumber(target.value)} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}

export default Form;