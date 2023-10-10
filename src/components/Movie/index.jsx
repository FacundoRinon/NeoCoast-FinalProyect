import './index.scss';
import Button from 'Components/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie, favorites, setFavorites }) => {
  const addToFavorites = () => {
    setFavorites([...favorites, movie]);
  };

  console.log(favorites);

  return (
    <>
      <div className="movie">
        <Link to={`/movie/${movie.id}`}>
          <img className="movie__pic" src={movie.image} alt="" />
        </Link>
        <div className="movie__adder">
          <Button
            name={'➕ Add'}
            movie={movie}
            onClick={addToFavorites}
            // isDisabled={true}
          />
          <p>{movie.title}</p>
        </div>
      </div>
    </>
  );
};

export default Movie;
