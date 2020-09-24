import React from 'react';
import { Route, Switch } from 'react-router-dom';

import s from './App.module.css';

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Dialogs from './Dialogs/Dialogs';

function App() {
  return (
    <div className={s.app__wrapper}>
      <Header />
      <Nav />

      <div className={s.content}>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/messages" exact component={Dialogs} />
          <Route path="/music" component={Dialogs} />
          <Route path="/news" component={Dialogs} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
