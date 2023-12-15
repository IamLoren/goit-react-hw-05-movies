import {useState, useEffect} from 'react';
import Header from '../components/Header/Header.jsx';
import SearchForm from 'components/SearchForm/SearchForm.jsx';
import MovieGallery from 'components/MovieGallery/MovieGallery.jsx';
import { getAllMovies } from 'services/api.js';

 const Movies = () => {

const [query, setQuery] = useState('');
const [moviesByQuery, setMoviesByQuery] = useState([]);

const handleFormSubmit = (event) => {
  event.preventDefault();
  setQuery(event.target.query.value);
}

useEffect(() => {
  if(query) {
     const getMovies = async () => {
    try {
      const res = await getAllMovies('/search/movie', query);
      setMoviesByQuery(res.results);
      console.log(res.results)
    } catch (error) {
      console.log(error)
    }
  }
  getMovies();
  } 
},[query])

console.log(query)
  return (
    <>
    <Header />
    <main>
      <SearchForm query={query} handleFormSubmit={handleFormSubmit}/>
      <MovieGallery title='movies found by query' movies={moviesByQuery}/>
    </main>
    </>
  );
};

export default Movies;
