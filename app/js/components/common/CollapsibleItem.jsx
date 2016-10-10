import React from 'react';

export default (props) => (
  <li>
    <div className="collapsible-header">
      {props.header}
    </div>
    <div
      className="collapsible-body"
      style={{ background: 'white', padding: '.5rem' }}
    >
      {props.children || props.body}
    </div>
  </li>
);
