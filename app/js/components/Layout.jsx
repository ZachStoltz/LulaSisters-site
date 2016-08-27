import Headline from './Headline.jsx';
import React from 'react';

const Layout = (props) => (
  <div className="app-container">
    <Headline />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.element,
};

export default Layout;
