import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from './Header.styled.js';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </StyledHeader>
  );
};

export default Header;
