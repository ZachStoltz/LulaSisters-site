import MediaLink from './MediaLink.jsx';
import React from 'react';

export default (props) => (
  <div className="member">
    <img src={props.img} alt={props.name} />
    <div className="member-info content">
      <span><strong>Name:</strong> {props.name}</span>
      <span><strong>Location:</strong> {props.location}</span>
      <strong>Social Links:</strong>
      {props.info.map(link => (
        <MediaLink
          key={`${link.type}-${link.name}`}
          type={link.type}
          href={link.href}
          name={link.name}
        />
      ))}
    </div>
  </div>
);
