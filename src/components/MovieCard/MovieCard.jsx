import React from 'react';
import StyledLi from './MovieCard.styled.js';

const MovieCard = ({title, id, poster}) => {
  return (
    <StyledLi>
       <img src={`https://image.tmdb.org/t/p/original${poster}`} alt="poster" width='300' loading='lazy'/>
        <p className="title">{title}</p>
        </StyledLi>
  )
}

export default MovieCard