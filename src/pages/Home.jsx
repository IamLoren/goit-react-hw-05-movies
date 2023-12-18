
import {useState, useEffect} from 'react'
import Header from '../components/Header/Header.jsx';
import {getAllMovies} from '../services/api.js';
import MovieGallery from 'components/MovieGallery/MovieGallery.jsx';

 const Home = () => {

  const [movies, setMovies] = useState([]);

useEffect(() => {
const getMovies = async () => {
  try {
    const res = await getAllMovies('/trending/movie/day');
    setMovies(res.results)
  } catch (error) {
    console.log(error)
  }
}
getMovies();
}, [])


  return (
    <>
    <Header />
      <MovieGallery title='Trending today' movies={movies}/>
    </>
  );
};
export default Home;