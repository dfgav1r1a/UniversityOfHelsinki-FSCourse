import axiosService from '../services/axios.service';

const Records = ({ records, setPeople, queryResult }) => {
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
                })
                .catch(error => console.log(error)):
                window.alert('Thank you, Nothing was deleted');
    } 

    return (
        <div>
            {
                queryResult
                    .map(record => {
                        return (
                                <p key={record.id}>
                                    {record.name}: {record.number}    
                                    <button 
                                        key={record.id} 
                                        onClick={()=>handleDelete(record)}>
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