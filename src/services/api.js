import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '25d5768f21131594e931abf62b991011';

export const getAllMovies = async (endpoint, query) => {
  const params = new URLSearchParams({
    api_key: KEY,
    append_to_response: 'videos',
    query,
  });
  const response = await axios.get(`${endpoint}?${params}`);
  return response.data;
};

