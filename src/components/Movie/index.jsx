import './index.scss';
import Button from 'Components/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie, favorites, setFavorites }) => {
  const [disabled, setDisabled] = useState(false);

  console.log(movie)

  const addToFavorites = () => {
    setFavorites([...favorites, movie]);
    setDisabled(true);
  };

  return (
    <>
      <div className="movie">
        <Link to={`/movie/${movie.id}`}>
          <img className="movie__pic" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
        </Link>
        <div className="movie__adder">
          <Button
            name={'➕ Add'}
            movie={movie}
            onClick={addToFavorites}
            isDisabled={disabled}
          />
          <p>{movie.title}</p>
        </div>
      </div>
    </>
  );
};

export default Movie;
