import { useLocation, useSearchParams, Link } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import { StyledUl, StyledTitle, StyledSection} from './MovieGallery.styled';
import styled from 'styled-components';

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
            <StyledLink
            key={id}
            to={location.pathname === '/' ? `movies/${id}` : `${id}`}
            state={
              location.pathname === '/'
                ? { ...state, from: pathname }
                : { ...state, from: `${pathname}?queryWord=${queryWord}` }
            }
          >
            <MovieCard title={title} poster={poster_path} />
          </StyledLink>  
          ))
        ) : (
          <p>No movies available</p>
        )}
      </StyledUl>
    </StyledSection>
  );
};

export default MovieGallery;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`