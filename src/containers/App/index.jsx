import './index.scss';
import Layout from 'Components/Layout';
import Home from 'Containers/Home';
import MovieInfo from 'Containers/MovieInfo';
import Practico4 from 'Containers/Practico4';
import { ROUTES } from 'Data/constants';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// const topBarLogo = 'NeoMovies';
// const topBarRoutes = [
//   { route: '/all-movies', label: 'All movies' },
//   { route: '/favorites', label: 'Favorites' },
// ];

const App = () => {
  return (
    // <Layout topBarLogo={topBarLogo} topBarRoutes={topBarRoutes}>
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route /* path={ROUTES.home} */ index element={<Home />} />
        <Route path={ROUTES.movieInfo} element={<MovieInfo />} />
        <Route path={ROUTES.practico4} element={<Practico4 />} />
      </Route>
    </Routes>
    // </Layout>
  );
};

export default App;
