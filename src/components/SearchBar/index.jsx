import React, { useRef, useState } from 'react';
import './index.scss';

const SearchBar = ({ searchValue, setSearchValue }) => {
  const [inputValue, setInputValue] = useState('');
  const searchInput = useRef(null);

  const startSearch = () => {
    if (inputValue !== '') {
      setSearchValue(inputValue);
    } else {
      searchInput.current.focus();
    }
  };

  return (
    <>
      <div className="searchBar">
        <input
          className="searchBar__input"
          placeholder="Search your movie"
          type="text"
          ref={searchInput}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="searchBar__button" onClick={startSearch}>
          🔎
        </button>
      </div>
    </>
  );
};

export default SearchBar;
