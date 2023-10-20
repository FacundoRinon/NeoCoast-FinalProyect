import './index.scss';
import Layout from 'Components/Layout';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../api/movies';

const MovieInfo = () => {
  const topBarLogo = 'NeoMovies';
  const { id } = useParams();
  // const indexInMovies = id - 1;
  // const movie = Movies[indexInMovies];
  const topBarRoutes = [
    { route: '/', label: 'Home' },
    { route: '/all-movies', label: 'All movies' },
    { route: '/favorites', label: 'Favorites' },
  ];

  // console.log(id)
  const [movie, setMovie] = useState(null)

  const getMovie = async () => {
    try {

      const response = await getMovieById(id);
      setMovie(response.data)
    } catch (error) {
      console.log("Error in MovieInfo/index.jsx - getMovie()")
    }
  };

  useEffect(()=> {
    getMovie();
  }, [])

  console.log(movie)

  const {
    title,
    poster_path,
    backdrop_path,
    tagline,
    vote_average,
    overview, 
    genres,
    release_date,
    production_companies,
  } = movie || {}


  return (
    <>
        {movie ? (
      <div className="movieInfo">
          
        <div className="moviePresentation">
          <div className="moviePresentation__title">
            <h1>{title}</h1>
          </div>
          <div className="moviePresentation__picsAndInfo">
            <div className="moviePresentation__pics">
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt=""
                className="moviePresentation__centralPic"
                />
              <div className="moviePresentation__miniPics">
                <img
                  src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                  alt=""
                  className="moviePresentation__miniPic"
                  />

                <img
                  src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                  alt=""
                  className="moviePresentation__miniPic"
                />

                <img
                  src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                  alt=""
                  className="moviePresentation__miniPic"
                />
              </div>
            </div>
            <div className="moviePresentation__info">
              <p className='moviePresentation__infoElement'>
                {tagline}
              </p>
              <p>Release date: {release_date}</p>
              <p>Score: {vote_average}</p>
              <div className="moviePresentation__genresAndProductors">

              <p className='moviePresentation__list'>Genres:
                <ul >
                  {movie && genres.map((genre)=> (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </p>
              <p className='moviePresentation__list'>Production Companies:
                <ul>
                  {movie && production_companies.map((productor)=> (
                    <li key={productor.id}>{productor.name}</li>
                  ))}
                </ul>
              </p>
                </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="movieDescription">
            <h3>Description</h3>
            <p>
              {overview}
            </p>
          </div>
          <div className="movieCast">
            <table className="movieCast__table">
              <tbody>
                <tr>
                  <th className="movieCast__header">Actor</th>
                  <th className="movieCast__header">Character</th>
                </tr>
                <tr>
                  <td className="movieCast__data">Actor 1</td>
                  <td className="movieCast__data">Personaje 1</td>
                </tr>
                <tr>
                  <td className="movieCast__data">Actor 2</td>
                  <td className="movieCast__data">Personaje 2</td>
                </tr>
                <tr>
                  <td className="movieCast__data">Actor 3</td>
                  <td className="movieCast__data">Personaje 3</td>
                </tr>
                <tr>
                  <td className="movieCast__data">Actor 4</td>
                  <td className="movieCast__data">Personaje 4</td>
                </tr>
                <tr>
                  <td className="movieCast__data">Actor 5</td>
                  <td className="movieCast__data">Personaje 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ):(
      <h1>Loading...</h1>
    )}
    </>
  );
};

export default MovieInfo;
