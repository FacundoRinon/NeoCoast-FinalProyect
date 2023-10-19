import instance from './config';

const getMovies = (pageNumber) => {
  return instance.get('discover/movie', { params: { page: pageNumber } });
};

const getMovieById = (movieId) => {
  return instance.get(`movie/${movieId}`);
};

export { getMovies, getMovieById };