import React from 'react';
import { NavLink } from 'react-router-dom';

 const Home = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
};
export default Home;