import Footer from './Footer.jsx';
import Headline from './Headline.jsx';
import React from 'react';

const Layout = (props) => (
  <div className="app-container">
    <Headline path={props.routes[1].path} />
    {props.children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.element,
};

export default Layout;
