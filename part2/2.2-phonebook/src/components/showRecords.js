import axiosService from '../services/axios.service';

const Records = ({ records, setPeople, setSuccessMsg, setErrorMessage, queryResult }) => {
    //fn to delete a phone record
    const handleDelete = ({id, name}) => {
        console.log(`deleting ${name}`);
        //getting the records that will be kept to update the state 
        const recordsToKeep = records.filter(record => record.id !== id);
        const confirmation = window.confirm(`Are you sure you want to delete ${name}?`)
        confirmation ?
            axiosService
                .deleteRecord(id)
                .then(record => {
                    console.log('Deleting record succeeded');
                    setPeople(recordsToKeep);
                    setSuccessMsg('The record was deleted successfully from the phonebook');
                    setTimeout(() => setSuccessMsg(''), 5000);
                })
                .catch(error => {
                    console.log(error)
                    setErrorMessage('It seems that the record does not exist, please refresh the page and search it to confirm');
                    setTimeout(() => setErrorMessage(''), 5000);
                }) :
            setSuccessMsg('Nothing was deleted');
            setTimeout(() => setSuccessMsg(''), 5000);
    }

    return (
        <div className='recordsDisplay'>
            {
                queryResult
                    .map(record => {
                        return (
                            <p key={record.id}>
                                {record.name}: {record.number}
                                <button
                                    key={record.id}
                                    onClick={() => handleDelete(record)}>
                                    Delete
                                </button>
                            </p>
                        );
                    })
            }
        </div>
    );
}
export default Records;