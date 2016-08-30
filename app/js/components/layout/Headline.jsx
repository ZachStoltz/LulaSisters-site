import { Link } from 'react-router';
import NavBar from './NavBar.jsx';
import React from 'react';

export default () => (
  <section id="banner">
    <div className="wrapper">
      <header>
        <Link to="/">
          <img className="logo" src={'/static/style/img/logo.png'} alt="LuLaRoe: Simply Comfortable" />
          <img className="logo-small" src={'/static/style/img/logo_small.png'} alt="LuLaRoe" />
        </Link>
        <NavBar />
      </header>
    </div>
  </section>
);
