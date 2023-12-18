import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home.jsx';
import { lazy, Suspense  } from 'react';

const Movies = lazy(() => import('../pages/Movies.jsx'))
const MovieDetails = lazy(() => import('../pages/MovieDetails.jsx'))
const Cast = lazy(() => import('../components/Cast/Cast.jsx'))
const Reviews = lazy(() => import('../components/Reviews/Reviews.jsx'))
const NotFound = lazy(() => import('../components/NotFound/NotFound.jsx'))


export const App = () => {

  return (
  <Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='movies' element={<Movies />} />
    <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
  </Suspense>
  );
};
