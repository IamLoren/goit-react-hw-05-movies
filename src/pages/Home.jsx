
import {useState, useEffect} from 'react'
import Header from '../components/Header/Header.jsx';
import {getAllMovies} from '../services/api.js';
import MovieGallery from 'components/MovieGallery/MovieGallery.jsx';

 const Home = () => {

  const [movies, setMovies] = useState([]);

useEffect(() => {
const getMovies = async () => {
  try {
    const res = await getAllMovies();
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
    <MovieGallery movies={movies} />
    </>
  );
};
export default Home;