import React from 'react';
import StyledLi from './MovieCard.styled.js';

const MovieCard = ({title, id, poster, handleClickOnMovie}) => {

  return (
    <StyledLi onClick={()=>handleClickOnMovie(id)}>
       <img src={poster ? `https://image.tmdb.org/t/p/original${poster}` : 'https://img.freepik.com/free-vector/shot-concept-illustration_114360-7065.jpg?w=826&t=st=1702759958~exp=1702760558~hmac=ac147e6f1032e40ad076c4ad24885e18d2ca16dddb473b0fbb77c6911c57f43e'} alt="poster" width='300' height='470' loading='lazy'/>
        <p className="title">{title}</p>
        </StyledLi>
  )
}

export default MovieCard