import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Components/Search.css';

function Search() {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Where do you go"
        className="search-input"
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
}

export default Search;
