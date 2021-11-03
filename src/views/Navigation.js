import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" className="" activeClassName="">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className="" activeClassName="">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
