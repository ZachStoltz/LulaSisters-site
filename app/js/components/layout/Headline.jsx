import { Link } from 'react-router';
import React from 'react';

export default () => (
  <section id="banner">
    <div className="wrapper">
      <header>
        <Link to="/">
          <img className="logo" src={'/static/style/img/logo.png'} alt="LuLaRoe: Simply Comfortable" />
        </Link>
        <nav>
          <Link to="about-lularoe">
            About LuLaRoe
          </Link>
          <Link to="team-lula-sisters">
            Team LuLa Sisters
          </Link>
          <Link to="for-customers">
            For Customers
          </Link>
          <Link to="join-our-team" className="btn btn-small btn-secondary">
            Join Our Team
          </Link>
        </nav>
      </header>
    </div>
  </section>
);
