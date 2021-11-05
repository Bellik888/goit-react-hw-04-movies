import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';

import { fetchCastMovie } from '../../service/FetchMovieDB';
import s from './Cast.module.css';

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
  //   console.log(castList);

  return (
    <ul className={s.list}>
      {castList &&
        castList.cast.map(el => (
          <li key={el.id} className={s.item}>
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSz5UULZ_ymiZ1Ig1F6QmZd2KB3nAwqHhD7A&usqp=CAU'
              }
              alt={el.name}
              width={150}
              className={s.img}
            />
            <h4 className={s.name}>{el.name}</h4>
            {el.character && (
              <p className={s.character}>Character: {el.character}</p>
            )}
          </li>
        ))}
    </ul>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};
