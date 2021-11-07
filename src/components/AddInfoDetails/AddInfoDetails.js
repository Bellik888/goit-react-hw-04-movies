import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import s from './AddInfoDetais.module.css';
export const AddInfoDetails = ({ movieId, title, location, url }) => {
  return (
    <div className={s.wrapper}>
      <p>{title}</p>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            // to={`/movies/${movieId}/cast`}
            to={{
              pathname: `${url}/cast`,
              state: { ...location.state },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            // to={`/movies/${movieId}/reviews`}
            to={{
              pathname: `${url}/reviews`,
              state: { ...location.state },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
AddInfoDetails.propTypes = {
  movieId: PropTypes.string,
};
