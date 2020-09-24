import React from 'react';
import T from 'prop-types';

import s from './Message.module.css';

const Message = ({ items = [] }) => (
  <ul className={s.list}>
    {items.map(({ id, text }) => (
      <li key={id} className={s.item}>
        {text}
      </li>
    ))}
  </ul>
);

Message.propTypes = {
  items: T.arrayOf(
    T.shape({
      text: T.string.isRequired,
      id: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Message;
