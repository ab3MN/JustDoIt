import React from 'react';
import T from 'prop-types';
import s from './Post.module.css';
import src from './img';

const Post = ({ items = [] }) => (
  <ul className={s.list}>
    {items.map(({ id, text, likes }) => (
      <li key={id} className={s.item}>
        <img src={src} alt="avatar" />
        <p> {text}</p>
        <span>like {likes}</span>
      </li>
    ))}
  </ul>
);

Post.propTypes = {
  items: T.arrayOf(
    T.shape({
      text: T.string.isRequired,
      id: T.number.isRequired,
      likes: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Post;
