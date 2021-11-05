import { useEffect, useState } from 'react';

import { HomeList } from '../../components/HomeList/HomeList';
import { fetchTrendMovie } from '../../service/FetchMovieDB';

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetchResult();
  }, []);
  const fetchResult = async () => {
    const result = await fetchTrendMovie();
    setMoviesList(result);
  };

  return <HomeList moviesList={moviesList} title={'TOP 20 MOVIES'} />;
};
export default HomePage;
