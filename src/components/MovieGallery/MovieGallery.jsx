import React from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import {StyledUl, StyledTitle, StyledSection} from './MovieGallery.styled'

const MovieGallery = ({movies}) => {
  return ( 
    <StyledSection>
        <StyledTitle>The best films chosen by the audience</StyledTitle>
         <StyledUl>
      {movies && movies.length > 0 ? (
        movies.map(({ title, id, poster_path }) => (
          <MovieCard key={id} title={title} poster={poster_path} />
        ))
      ) : (
        <p>No movies available</p>
      )}
    </StyledUl>
    </StyledSection>
   
  )
}

export default MovieGallery