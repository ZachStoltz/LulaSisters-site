import React from 'react';

export default (props) => (
  <div className={props.type}>
    <a href={props.href} target={props.target}>
      <i
        className={`fa fa-${props.type === 'email' ? 'at' : props.type}`}
        aria-hidden="true"
      />
      {props.name}
    </a>
  </div>
);
