import Parallax from '../common/Parallax.jsx';
import React from 'react';
const parallaxStyles = {
  container: { height: '30rem' },
  img: { width: '100%' },
  description: {
    position: 'absolute',
    color: 'white',
    background: 'rgba(92, 103, 143, 0.46)',
    width: '100%',
    fontSize: '2.5rem',
    paddingLeft: '1rem',
  },
};

export default () => (
  <section id="the-clothes">
    <div className="wrapper">
      <h2 className="cursive">The Styles</h2>
      <div className="img-container">
        <img
          src="/static/style/img/dresses.jpg"
          alt="LuLaRoe Dresses"
          style={parallaxStyles.img}
        />
      </div>
      <hr className="pink" />

    </div>
  </section>
);
