import React from 'react';

export default (props) => (
  <ul
    className={`collapsible ${props.popout ? 'popout' : ''}`}
    data-collapsible={props.type}
  >
    {props.children}
  </ul>
);
