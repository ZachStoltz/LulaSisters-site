import React from 'react';

export default (props) => (
  <li>
    <div className="collapsible-header">
      {props.header}
    </div>
    <div className="collapsible-body">
      {props.children || props.body}
    </div>
  </li>
);
