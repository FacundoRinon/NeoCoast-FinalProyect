import React, { useEffect, useRef, useState } from 'react';

import MovieList from 'Components/MovieList';
import { getMovies } from '../../api/movies';

import './styles.scss';

const Home = () => {
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

  return (
    <div className="home">
      <MovieList
        movies={movies}
        apiPage={apiPage}
        setApiPage={setApiPage}
      />
    </div>
  );
};
export default Home;
