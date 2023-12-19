import { useLocation, useSearchParams, Link } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import { StyledUl, StyledTitle, StyledSection } from './MovieGallery.styled';

const MovieGallery = ({ movies, title }) => {

    const location = useLocation(); 
    const { state, pathname } = location;
    const [searchParams] = useSearchParams();
    const queryWord = searchParams.get('queryWord');

  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      <StyledUl>
        {movies && movies.length > 0 ? (
          movies.map(({ title, id, poster_path }) => (
            <Link
            key={id}
            to={location.pathname === '/' ? `movies/${id}` : `${id}`}
            state={
              location.pathname === '/'
                ? { ...state, from: pathname }
                : { ...state, from: `${pathname}?queryWord=${queryWord}` }
            }
          >
            <MovieCard title={title} poster={poster_path} />
          </Link>  
          ))
        ) : (
          <p>No movies available</p>
        )}
      </StyledUl>
    </StyledSection>
  );
};

export default MovieGallery;
