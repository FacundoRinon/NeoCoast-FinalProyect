import './index.scss';
import Layout from 'Components/Layout';
import MovieList from 'Components/MovieList';
import Movies from 'Data/movies';
import React from 'react';
import { useState } from 'react';

const Home = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
  };

  return (
    <div className="home">
      <MovieList
        movies={Movies}
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
      />
    </div>
  );
};

export default Home;
