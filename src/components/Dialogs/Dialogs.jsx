import React from 'react';

import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { messages, users } from '../../db/data';

const Dialogs = () => (
  <section className={s.dialogs}>
    <article className={s.items}>
      <DialogItem items={users} />
    </article>

    <article className={s.messages}>
      <Message items={messages} />
    </article>
  </section>
);

export default Dialogs;
