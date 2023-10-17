import './index.scss';
import Movie from 'Components/Movie';
import React from 'react';

const FavoriteMovies = ({ favorites }) => {
  return (
    <>
      {favorites.length > 0 ? (
        favorites.map((movie) => {
          return (
            <Movie
              key={movie.id}
              movie={movie}
              favorites={favorites}
            />
          );
        })
      ) : (
        <p>No movies found</p>
      )}
    </>
  );
};

export default FavoriteMovies;
