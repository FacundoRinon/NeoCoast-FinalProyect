import axiosInstance from '../../api';
import Movie from 'Components/Movie';
import React, { useEffect, useState } from 'react';

const Practico4 = () => {
  const apiKey = 'a13868fb191bef7dcceff08678dde5f1';
  const api = axiosInstance(apiKey);

  const [movies, setMovies] = useState([]);

  const getPopularMovies = async () => {
    try {
      const response = await api.get('');
      setMovies(response.data.results);
      // Haz algo con la lista de películas obtenida
      console.log(movies);
    } catch (error) {
      // Maneja errores de la solicitud
      console.error(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  console.log('movies', movies);
  return (
    <>
      <h1>Hola</h1>
      {/* <Movie /> */}
    </>
  );
};

export default Practico4;
