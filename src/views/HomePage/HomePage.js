import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { HomeList } from '../../components/HomeList/HomeList';
import { fetchTrendMovie } from '../../service/FetchMovieDB';

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchResult();
  }, []);
  const fetchResult = async () => {
    const result = await fetchTrendMovie();
    setMoviesList(result);
  };
  console.log(moviesList);

  return (
    <HomeList
      moviesList={moviesList}
      title={'TOP 20 MOVIES'}
      location={location}
    />
  );
};
export default HomePage;
