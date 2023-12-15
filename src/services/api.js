import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '25d5768f21131594e931abf62b991011';

export const getAllMovies = async () => {
  const params = new URLSearchParams({
    api_key: KEY,
    append_to_response: 'videos, images',
  });
  const response = await axios.get(`/trending/movie/day?${params}`);
  return response.data;
};

// ПО ЗАПИТУ

export const getMoviesByQuery = async (queryParams, page) => {
  const params = new URLSearchParams({
    key: KEY,
    q: queryParams,
    page,
  });

const  response = await axios.get(`?${params}`);

  return response.data;
};
