import React from 'react';
import s from './ProfileInfo.module.css';
import img from './img';

const ProfileInfo = () => (
  <div>
    <div>
      <img className={s.img} src={img} alt="" />
    </div>
    <div className={s.descriptionBlock}>ava+description</div>
  </div>
);

export default ProfileInfo;
