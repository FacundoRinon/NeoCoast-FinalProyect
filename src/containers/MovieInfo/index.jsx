import './index.scss';
import Layout from 'Components/Layout';
import Movies from 'Data/movies';
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieInfo = () => {
  const topBarLogo = 'NeoMovies';
  const { id } = useParams();
  const indexInMovies = id - 1;
  const movie = Movies[indexInMovies];
  const topBarRoutes = [
    { route: '/', label: 'Home' },
    { route: '/all-movies', label: 'All movies' },
    { route: '/favorites', label: 'Favorites' },
  ];

  return (
    <>
      <div className="movieInfo">
        <div className="moviePresentation">
          <div className="moviePresentation__title">
            <h1>{movie.title}</h1>
          </div>
          <div className="moviePresentation__picsAndInfo">
            <div className="moviePresentation__pics">
              <img
                src={movie.image}
                alt=""
                className="moviePresentation__centralPic"
              />
              <div className="moviePresentation__miniPics">
                <img
                  src={movie.image}
                  alt=""
                  className="moviePresentation__miniPic"
                />

                <img
                  src={movie.image}
                  alt=""
                  className="moviePresentation__miniPic"
                />

                <img
                  src={movie.image}
                  alt=""
                  className="moviePresentation__miniPic"
                />
              </div>
            </div>
            <div className="moviePresentation__info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Repellendus at explicabo atque quidem similique.
                Ratione incidunt, officia modi nulla a nostrum quidem!
                Esse eaque consequatur ratione laboriosam expedita qui
                totam voluptas odit! Placeat eaque quaerat amet iure
                ipsam reprehenderit saepe possimus distinctio. Quas
                eius illo fugit officiis pariatur molestias sed.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="movieDescription">
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Labore odit reprehenderit dicta ratione, iure
              quasi error quia tenetur fugiat unde, vel perspiciatis
              velit eaque voluptate omnis numquam praesentium.
              Exercitationem ea quasi quia alias. Laborum nulla
              perspiciatis, provident unde esse aliquid quas voluptas
              eveniet molestias exercitationem aperiam placeat alias
              similique dolor ex dicta et iusto? Natus illo ducimus in
              dolores atque facere rerum ratione, sit earum odit.
              Voluptate in porro qui soluta maxime iure, animi vero,
              quam aperiam repellendus exercitationem reprehenderit
              officia perferendis alias dolorum ullam at natus
              blanditiis illum facere? Excepturi molestias minima
              laborum fugiat cumque, quo eligendi ab voluptate.
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
    </>
  );
};

export default MovieInfo;
