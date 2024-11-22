function SearchBar({ onSearch }) {
    const handleSearch = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
            <input
                type="text"
                placeholder="Search movies..."
                onChange={handleSearch}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    width: '200px', 
                }}
            />
        </div>
    );
}

export default SearchBar;
