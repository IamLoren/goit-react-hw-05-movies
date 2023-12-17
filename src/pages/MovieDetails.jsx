import {useState, useEffect} from 'react';
import { Outlet, useParams} from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import { getAllMovies } from 'services/api.js';

const MovieDetails = () => {

const {movieId} = useParams();
const [result, setResult] = useState({});

useEffect(()=> {
  const getMovies = async () => {
    try {
      const res = await getAllMovies(`/movie/${movieId}`);
      console.log(res)
      setResult(res)
    } catch (error) {
      console.log(error)
    }
  }
  getMovies()
}, [movieId])

const {original_title, release_date, poster_path,  overview} = result;

  return (
    <>
      <Header />
      
      <section>
        <button>Go back</button>
        <div className="generalInformation">
          <img src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : 'https://img.freepik.com/free-vector/shot-concept-illustration_114360-7065.jpg?w=826&t=st=1702759958~exp=1702760558~hmac=ac147e6f1032e40ad076c4ad24885e18d2ca16dddb473b0fbb77c6911c57f43e'} alt="poster" width='300' height='470' loading='lazy' className="poster" />
          <div className="description">
            <h1 className="title">{original_title}</h1>
            <p>{overview}</p>
            <p className="release">Release date: {release_date}</p>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};
export default MovieDetails;
