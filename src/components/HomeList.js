import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrendMovie } from '../service/FetchMovieDB';

export const HomeList = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetchResult();
  }, []);
  const fetchResult = async () => {
    const result = await fetchTrendMovie();
    setMoviesList(result);
  };
  // console.log(moviesList);
  return (
    <ul>
      {moviesList &&
        moviesList.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <p>{original_title}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
};
