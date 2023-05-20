const SearchRecord = ({ records, handleQuery }) => {
    return (
        <div className="search">
            <label>search:</label>
            <input type="text" onChange={handleQuery} />
        </div>
    )
}

export default SearchRecord;