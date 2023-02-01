import axios from 'axios';
let ApiKey = '97d70a3173ca56d5850cad3599f6b1e5';

export const fetchTrending = async () => {
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}&page=1`;
  try {
    const response = await axios.get(`${URL}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDetails = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&page=1`;
  try {
    const response = await axios.get(`${URL}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCast = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${ApiKey}&page=1`;
  try {
    const response = await axios.get(`${URL}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchReviews = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${ApiKey}&page=1`;
  try {
    const response = await axios.get(`${URL}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearch = async query => {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${query}`;
  try {
    const response = await axios.get(`${URL}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};