// Movie.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CustomButton from 'Components/CustomButton';
import movieType from 'Data/shapes';

import './styles.scss';

const Movie = ({
  movie,
  favorites,
  removeFromFavorites,
  addToFavorites,
}) => {
  const {
    id,
    poster_path,
    release_date,
    title,
  } = movie;

  const favoriteIndex = favorites?.findIndex((fav) => fav.id === id);
  const isFavorite = Number.isInteger(favoriteIndex) && favoriteIndex !== -1;

  return (
    <Link className="movie" to={`/movies/${id}`}>
      <img src={`https://image.tmdb.org/t/p/original${poster_path}`}  alt={title} />
      <h3 className="movie__title">{movie.title}</h3>
      <p className="movie__year">{release_date}</p>
      <CustomButton
        name={`${isFavorite ? '- Remove' : '+ Add'}`}
        type={isFavorite ? 'secondary' : 'primary'}
        onClick={() => isFavorite
          ? removeFromFavorites(favoriteIndex)
          : addToFavorites(movie)}
      />
    </Link>
  );
};

Movie.propTypes = {
  addToFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(movieType).isRequired,
  movie: movieType.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};

export default Movie;
