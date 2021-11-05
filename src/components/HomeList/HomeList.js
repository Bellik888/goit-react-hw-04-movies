import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import s from './HomeList.module.css';

export const HomeList = ({ moviesList, title }) => {
  return (
    <>
      {title && <h1 className={s.title}>{title}</h1>}
      <ul className={s.list}>
        {moviesList &&
          moviesList.map(({ id, original_title }) => (
            <li key={id} className={s.item}>
              <Link to={`/movies/${id}`} className={s.link}>
                <p className={s.text}>{original_title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
HomeList.propTypes = {
  moviesList: PropTypes.array,
};
