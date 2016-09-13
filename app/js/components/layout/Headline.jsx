import { Link } from 'react-router';
import NavBar from './NavBar.jsx';
import React from 'react';

export default (props) => (
  <section id="banner">
    <div className="wrapper">
      <header
        style={props.path &&
          props.path !== '/' ? { padding: '2rem 0' } : {}}
      >
        <Link to="/" className="brand">
          <img className="logo" src={'/static/style/img/logo.png'} alt="LuLaRoe: Simply Comfortable" />
          <img className="logo-small" src={'/static/style/img/logo_small.png'} alt="LuLaRoe" />
          <span className="cursive">Team LuLa Queens</span>
        </Link>
        <NavBar />
      </header>
    </div>
  </section>
);
