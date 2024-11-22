import React from 'react';

// SearchBar Component: This component displays an input field for searching movies.
function SearchBar({ onSearch }) {

    // Handle the search input change and pass the value to the parent component via the onSearch callback
    const handleSearch = (event) => {
        onSearch(event.target.value); // Sends the input value to the parent component
    };

    return (
        // Container for the search input, aligned to the right with padding
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
            {/* Search input field */}
            <input
                type="text"  // Specifies that this is a text input field
                placeholder="Search movies..."  // Placeholder text shown when input is empty
                onChange={handleSearch}  // Calls handleSearch whenever the input changes
                style={{
                    padding: '10px',  // Padding inside the input field for spacing
                    fontSize: '16px',  // Font size of the text inside the input
                    borderRadius: '5px',  // Rounded corners for the input field
                    border: '1px solid #ccc',  // Light border color for the input field
                    width: '200px',  // Fixed width for the input field
                }}
            />
        </div>
    );
}

export default SearchBar;
