import { NavLink } from 'react-router-dom';
export const AddInfoDetails = ({ movieId }) => {
  return (
    <ul>
      <li>
        <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
      </li>
      <li>
        <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
      </li>
    </ul>
  );
};
