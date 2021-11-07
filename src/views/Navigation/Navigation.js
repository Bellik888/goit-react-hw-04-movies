import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            exact
            to="/"
            className={s.link}
            activeClassName={s.activeLink}
          >
            <span>Home</span>
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            exact
            to="/movies"
            className={s.link}
            activeClassName={s.activeLink}
          >
            <span>Movies</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
