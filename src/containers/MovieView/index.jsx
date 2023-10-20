import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import noMovie from 'Assets/noMovie.jpg';
import {getMovieById} from '../../api/movies';

import './styles.scss';

const MovieView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]) 
  const [movieToDisplay, setMovieToDisplay] = useState(null);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const initHome = async () => {
      try {
        const response = await getMovieById(id);
        setMovie(response.data);
        setMovieToDisplay(response.data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };

    if (id) {
      initHome();
    } else {
      setError(true);
    }
  }, [id]);


  if (error) {
    return (
      <div className="movie-view movie-view--error">
        <h1>
          No movie found :(
        </h1>
        <img src={noMovie} alt="not found" />
      </div>
    );
  }

  const {
    overview,
    poster_path,
    release_date,
    title,
    genres,
  } = movieToDisplay || {};

  

  return (
    <div className="movie-view">
      <div className="movie-view__image">
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
      </div>
      <div className="movie-view__details">
        <h2 className="movie-view__title">
          {title}
        </h2>
        {movieToDisplay ? (
        <small className='movie-view__genre'>
          Genres:
        <ul className='movie-view__genreList'>
          {genres.map((genre)=>(
            <li>{genre.name}</li>
          ))}
        </ul>
        </small>
        ):(
        <p>Loading</p>
        )}
        <p className="movie-view__release-year">
          {`Published in ${release_date}`}
        </p>
        <p className="movie-view__description">
          {overview}
        </p>
      </div>
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieView;
