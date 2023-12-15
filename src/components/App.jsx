import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Movies from '../pages/Movies.jsx';
import MovieDetails from '../pages/MovieDetails.jsx';
import  Cast  from '../components/Cast/Cast.jsx';
import Reviews  from '../components/Reviews/Reviews.jsx';
import NotFound from '../components/NotFound/NotFound.jsx';

export const App = () => {
  return (
  <Routes>
    <Route path='./index.html' element={<Home />} />
    <Route path='/movies' element={<Movies />} />
    <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
  );
};
