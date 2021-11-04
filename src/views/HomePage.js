import { useEffect, useState } from 'react';

import { HomeList } from '../components/HomeList';
import { fetchTrendMovie } from '../service/FetchMovieDB';

export const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetchResult();
  }, []);
  const fetchResult = async () => {
    const result = await fetchTrendMovie();
    setMoviesList(result);
  };

  return <HomeList moviesList={moviesList} />;
};
