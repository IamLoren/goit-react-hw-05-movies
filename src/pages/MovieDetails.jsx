import React from 'react';
import { Outlet, useParams} from 'react-router-dom';
import Header from '../components/Header/Header.jsx';

const MovieDetails = () => {

const {movieId} = useParams();


  return (
    <>
      <Header />
      <button>Go back</button>

      <Outlet />
    </>
  );
};
export default MovieDetails;
