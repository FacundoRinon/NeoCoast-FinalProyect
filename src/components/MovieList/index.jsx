import './index.scss';
import FavoriteMovies from 'Components/FavoriteMovies';
import Filter from 'Components/Filter';
import Movie from 'Components/Movie';
import React, { useEffect, useState } from 'react';

const MovieList = ({
  movies,
  selectedYear,
  onYearChange,
  searchValue,
  apiPage,
  setApiPage,
}) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [favorites, setFavorites] = useState([]);

  const [show, setShow] = useState('all');

  // useEffect(() => {
  //   if (selectedYear && selectedYear !== '0') {
  //     const filtered = movies.filter(
  //       (movie) => movie.releaseYear === selectedYear,
  //     );
  //     setFilteredMovies(filtered);
  //   } else {
  //     setFilteredMovies(movies);
  //   }
  // }, [selectedYear]);

  useEffect(() => {
    const filteredByYear =
      selectedYear !== '0'
        ? movies.filter((movie) =>
            movie.release_date.includes(selectedYear),
          )
        : movies;

    const normalizedSearchValue = searchValue.toLowerCase();

    const filteredBySearch =
      searchValue !== ''
        ? filteredByYear.filter((movie) =>
            movie.title.toLowerCase().includes(normalizedSearchValue),
          )
        : filteredByYear;

    setFilteredMovies(filteredBySearch);
  }, [selectedYear, searchValue, movies]);

  return (
    <>
      <div className="allMoviesRow">
        <div className="allMoviesRow__description">
          <h1 className="h3" onClick={() => setShow('all')}>
            All movies
          </h1>

          <button onClick={() => setShow('favorites')}>
            Favorites
          </button>
        </div>
        <div className="allMoviesRow__filter">
          <Filter className="filter" onYearChange={onYearChange} />
        </div>
      </div>
      {show === 'all' ? (
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
          <div className="movies__buttonRow">
            <button
              className="movies__button"
              onClick={() => setApiPage(apiPage + 1)}>
              Load more
            </button>
          </div>
        </div>
      ) : (
        <div className="movies">
          <FavoriteMovies favorites={favorites} />
        </div>
      )}
    </>
  );
};

export default MovieList;
