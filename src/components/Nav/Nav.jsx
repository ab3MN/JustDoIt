import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => (
  <aside className={s.aside}>
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <NavLink className={s.link} to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/messages" activeClassName={s.active}>
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/news" activeClassName={s.active}>
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/music" activeClassName={s.active}>
            Music
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Nav;
