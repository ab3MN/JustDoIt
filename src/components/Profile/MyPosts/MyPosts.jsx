import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { posts } from '../../../db/data';

const MyPosts = () => (
  <div className={s.postsBlock}>
    <h3> My posts</h3>
    <div className={s.areaBlock}>
      <textarea className={s.area} />
      <button type="button" className={s.areaBtn}>
        Add post
      </button>
    </div>
    <div className={s.posts}>
      <Post items={posts} />
    </div>
  </div>
);

export default MyPosts;
