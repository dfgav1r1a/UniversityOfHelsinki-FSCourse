const SearchRecord = ({ records, handleQuery }) => {
    return (
        <div>
            search: <input type="text" onChange={handleQuery} />
        </div>
    )
}

export default SearchRecord;