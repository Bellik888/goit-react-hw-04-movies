import { useState, useEffect } from 'react';

import { fetchCastMovie } from '../service/FetchMovieDB';

export const Cast = ({ movieId }) => {
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    fetchResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchResult = async () => {
    const result = await fetchCastMovie(movieId);
    setCastList(result);
  };
  console.log(castList);

  return (
    <ul>
      {castList &&
        castList.cast.map(el => (
          <li key={el.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
              alt={el.name}
            />
            <p>{el.name}</p>
            <p>Character: {el.character}</p>
          </li>
        ))}
    </ul>
  );
};
