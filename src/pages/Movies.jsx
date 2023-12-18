import {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import SearchForm from 'components/SearchForm/SearchForm.jsx';
import MovieGallery from 'components/MovieGallery/MovieGallery.jsx';
import { getAllMovies } from 'services/api.js';
import styled from 'styled-components';

 const Movies = () => {

const [query, setQuery] = useState('');
const [moviesByQuery, setMoviesByQuery] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();
const queryWord = searchParams.get('queryWord') || '';

const handleFormSubmit = (event) => {
  event.preventDefault();
   const queryParam = event.target.queryInput.value;
     setQuery(queryParam); 
  setSearchParams(queryParam ? {queryWord: queryParam} : {});

}

useEffect(() => {
  if(queryWord.trim()) {
     const getMovies = async () => {
    try {
      const res = await getAllMovies('/search/movie', queryWord);
      setMoviesByQuery(res.results);
    } catch (error) {
      console.log(error)
    }
  }
  getMovies();
  } 
},[queryWord])

  return (
    <>
    <Header />
    <StyledMain>
      <SearchForm handleFormSubmit={handleFormSubmit}/>
      {queryWord && <MovieGallery title='movies found by query' movies={moviesByQuery}/>} 
    </StyledMain>
    </>
  );
};

export default Movies;

const StyledMain = styled.main`
  padding-top: 40px;
`