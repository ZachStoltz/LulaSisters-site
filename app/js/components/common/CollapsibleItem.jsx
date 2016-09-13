import React from 'react';

export default (props) => (
  <li>
    <div className="collapsible-header">
      {props.header}
    </div>
    <div className="collapsible-body">
      <p>{props.body}</p>
    </div>
  </li>
);
