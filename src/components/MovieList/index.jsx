import './index.scss';
import Filter from 'Components/Filter';
import Movie from 'Components/Movie';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, selectedYear, onYearChange }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (selectedYear && selectedYear !== '0') {
      const filtered = movies.filter(
        (movie) => movie.releaseYear === selectedYear,
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  }, [selectedYear]);

  return (
    <>
      <div className="allMoviesRow">
        <div className="allMoviesRow__description">
          <Link to={'/practico4'}>
            <h1 className="h3">All movies</h1>
          </Link>
        </div>
        <div className="allMoviesRow__filter">
          <Filter className="filter" onYearChange={onYearChange} />
        </div>
      </div>
      <div className="movies">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                movie={movie}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            );
          })
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </>
  );
};

export default MovieList;
