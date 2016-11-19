import React from 'react';
import ReactGA from 'react-ga';

export default (props) => (
  <div className={props.type}>
    <ReactGA.OutboundLink
      eventLabel={props.eventLabel}
      to={props.href}
      target={props.target}
    >
      <i
        className={`fa fa-${props.type === 'email' ? 'at' : props.type}`}
        aria-hidden="true"
      />
      {props.name}
    </ReactGA.OutboundLink>
  </div>
);
