import { useNavigate, useLocation } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import { StyledUl, StyledTitle, StyledSection } from './MovieGallery.styled';

const MovieGallery = ({ movies, title }) => {

    const navigate = useNavigate();
    const location = useLocation();

    function handleClickOnMovie (movieId) {
      if (location.pathname === '/') {
        navigate(`movies/${movieId}`);
      } else {
        navigate(`${movieId}`);
      }
    }
  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      <StyledUl>
        {movies && movies.length > 0 ? (
          movies.map(({ title, id, poster_path }) => (
            <MovieCard key={id} id={id} title={title} poster={poster_path} handleClickOnMovie={handleClickOnMovie}/>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </StyledUl>
    </StyledSection>
  );
};

export default MovieGallery;
