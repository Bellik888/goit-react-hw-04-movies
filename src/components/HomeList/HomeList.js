import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export const HomeList = ({ moviesList }) => {
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
HomeList.propTypes = {
  moviesList: PropTypes.array,
};
