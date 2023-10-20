import './index.scss';
import MovieList from 'Components/MovieList';
import SearchBar from 'Components/SearchBar';
import React from 'react';
import { useState, useEffect } from 'react';
import { getMovies } from '../../api/movies';

const Home = () => {
  const [selectedYear, setSelectedYear] = useState('0');
  const [searchValue, setSearchValue] = useState('');

  const [movies, setMovies] = useState([]);
  const [apiPage, setApiPage] = useState(1);

  const initHome = async () => {
    const response = await getMovies(apiPage);
    setMovies((prevMovies) => [
      ...prevMovies,
      ...response.data.results,
    ]);
  };

  useEffect(() => {
    initHome();
  }, [apiPage]);

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
        movies={movies}
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
        searchValue={searchValue}
        apiPage={apiPage}
        setApiPage={setApiPage}
      />
    </div>
  );
};

export default Home;
