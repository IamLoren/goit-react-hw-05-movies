import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, Link, useNavigate, useLocation} from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import { getAllMovies } from 'services/api.js';
import styled from 'styled-components';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [result, setResult] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/')

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await getAllMovies(`/movie/${movieId}`);
        setResult(res);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [movieId]);

  const {
    original_title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  } = result;

  const handleGoBack = () => {
    console.log(goBackRef.current)
    navigate(goBackRef.current);
  };

  return (
    <>
      <Header />

      <StyledSection>
        <div className="container">
          <button  onClick={handleGoBack}>Go back</button>
          <div className="generalInformation">
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original${poster_path}`
                  : 'https://img.freepik.com/free-vector/shot-concept-illustration_114360-7065.jpg?w=826&t=st=1702759958~exp=1702760558~hmac=ac147e6f1032e40ad076c4ad24885e18d2ca16dddb473b0fbb77c6911c57f43e'
              }
              alt="poster"
              width="300"
              height="470"
              loading="lazy"
              className="poster"
            />
            <div className="description">
              <h1 className="title">
                {original_title} (
                {release_date ? release_date.slice(0, 4) : null})
              </h1>
              <p className="score">
                User Score: {`${Math.round(vote_average * 10)}%`}
              </p>
              <h2 className="overwiew">Overwiew</h2>
              <p>{overview}</p>
              <h2 className="genres">Genres</h2>
              <p className="genresList">
                {genres
                  ? genres.map((genre, index) => {
                      return <span key={index}>{genre.name} </span>;
                    })
                  : null}
              </p>
            </div>
          </div>
        </div>
      </StyledSection>
      <StyledSection className="additional">
        <div className="container">
          <h3>Additional information</h3>
          <StyledLink to="cast">Cast</StyledLink>
          <StyledLink to="reviews">Reviews</StyledLink>
          <Suspense fallback={<h2>Loading...</h2>}>
             <Outlet /> 
          </Suspense>
        </div>
        
      </StyledSection>
    </>
  );
};
export default MovieDetails;


const StyledSection = styled.section `
& .container {
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
}

& .generalInformation {
  display: flex;
  gap: 30px;
}

& .description {
  width: 50%;
}

& button {
  width: 100px;
  height: 30px;
  background-colot: transparent;
  border: 1px solid gray;
  color: gray;
  font-weight: 700;
  margin: 20px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: red;
    color: red
  }
}
`

const StyledLink = styled(Link)`
  display: block;
  font-size: 25px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  margin-bottom: 20px;
  cursor: pointer;
`