import axios from 'axios';
const API_KEY = '97d70a3173ca56d5850cad3599f6b1e5';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;

export const fetchTrending = async () => {
  try {
    const response = await axios.get(
      `/trending/movie/day?api_key=${API_KEY}&page=1`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDetails = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${API_KEY}&page=1`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCast = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&page=1`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearch = async query => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};