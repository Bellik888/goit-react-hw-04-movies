import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6aab34192b7a363d622c25c364ff9e4e';

// ========HomePage==========
export const fetchTrendMovie = () => {
  return (
    axios
      .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
      .then(result => result.data.results)
      // .then(res=>console.log(res.data.results))
      .catch(err => console.log(err))
  );
};
// =========SearchQuery=========
export const fetchSearchMovie = searchQuery => {
  return (
    axios
      .get(
        `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US`,
      )
      // .then(res => console.log(res.data.results))
      .then(result => result.data.results)
      .catch(err => console.log(err))
  );
};

// =======Details===========
export const fetchDetailsMovie = id => {
  return axios
    .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.data)
    .catch(err => console.log(err));
};

// ======Cast========
export const fetchCastMovie = id => {
  return (
    axios
      .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
      // .then(res=>console.log(res.data))
      .then(res => res.data)
      .catch(err => console.log(err))
  );
};

// ========reviews========
export const fetchReviewsMovie = movie_id => {
  return (
    axios
      .get(
        `${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
      )
      // .then(res => console.log(res.data))
      .then(res => res.data)
      .catch(err => console.log(err))
  );
};
