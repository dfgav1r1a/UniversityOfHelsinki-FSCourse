import axios from "axios";

const URL = 'http://localhost:3001/people';

//GET records
const getRecords = () =>{
    const request = axios.get(URL);
    return request.then(response => response.data);
}

const createRecord = (newRecord) =>{
    const request = axios.post(URL, newRecord);
    return request.then(response => response.data);
}

const updateRecord = (id, updatedRecord) => {
    const request = axios.put(`${URL}/${id}`, updatedRecord);
    return request.then(response => response.data);
        // .catch(error => console.log("Failed to update the record", error));
}

const deleteRecord = (id) => {
    const request = axios.delete(`${URL}/${id}`);
    return request.then(response => response.data);
}

export default {
    getRecords,
    createRecord,
    updateRecord,
    deleteRecord
};