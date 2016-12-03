import React from 'react';
import { sendOutboundEvent } from '../helpers';

export default (props) => (
  <div className={props.type}>
    <a
      href={props.href}
      target={props.target}
      data-event-label={props.eventLabel}
      onTouchTap={sendOutboundEvent}
    >
      <i
        className={`fa fa-${props.type === 'email' ? 'at' : props.type}`}
        aria-hidden="true"
      />
      {props.name}
    </a>
  </div>
);
