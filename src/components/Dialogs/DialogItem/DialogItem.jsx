import React from 'react';
import { NavLink } from 'react-router-dom';
import T from 'prop-types';

import s from './DialogItem.module.css';

const DialogItem = ({ items = [] }) => (
  <ul className={s.list}>
    {items.map(({ id, name }) => (
      <li key={id} className={s.items}>
        <NavLink to={`/messages/${id}`} className={s.item}>
          {name}
        </NavLink>
      </li>
    ))}
  </ul>
);

DialogItem.propTypes = {
  items: T.arrayOf(
    T.shape({
      name: T.string.isRequired,
      id: T.number.isRequired,
    }),
  ).isRequired,
};

export default DialogItem;
