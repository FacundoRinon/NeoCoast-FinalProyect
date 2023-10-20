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

  const restartSearch = () => {
    setSearchValue('');
  };

  return (
    <>
      <div className="searchBar">
        <button className="searchBar__button" onClick={restartSearch}>
          ❌
        </button>
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
