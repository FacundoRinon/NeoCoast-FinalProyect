import './index.scss';
import Layout from 'Components/Layout';
import MovieList from 'Components/MovieList';
import SearchBar from 'Components/SearchBar';
import Movies from 'Data/movies';
import React from 'react';
import { useState } from 'react';

const Home = () => {
  const [selectedYear, setSelectedYear] = useState('0');
  const [searchValue, setSearchValue] = useState('');

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
  };

  return (
    <div className="home">
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MovieList
        movies={Movies}
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
        searchValue={searchValue}
      />
    </div>
  );
};

export default Home;
