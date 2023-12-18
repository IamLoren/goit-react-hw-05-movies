import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import { StyledUl, StyledTitle, StyledSection } from './MovieGallery.styled';

const MovieGallery = ({ movies, title }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const queryWord = searchParams.get('queryWord');

    function handleClickOnMovie (movieId) {
      const { state, pathname } = location;
      if (location.pathname === '/') {
        navigate(`movies/${movieId}`, { state: { ...state, from: pathname } });
      } else {
        navigate(`${movieId}`, { state: { ...state, from: `${pathname}?queryWord=${queryWord}` } });
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
