import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';

const MovieDetails = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default MovieDetails;
