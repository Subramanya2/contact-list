import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search by name, email, or phone..." // <-- UPDATED
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;