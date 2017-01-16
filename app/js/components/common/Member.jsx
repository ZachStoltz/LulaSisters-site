import MediaLink from './MediaLink.jsx';
import React, { PropTypes } from 'react';

export const Member = props => {
  const {
    img,
    name,
    location,
    info = [],
    bio,
  } = props;
  return (
    <div className="member">
      <div className="img--wrapper">
        <img src={img} alt={name} />
      </div>
      <div className="member-info content">
        <span><strong>Name:</strong> {name}</span>
        <span><strong>Location:</strong> {location}</span>
        <strong>Social Links:</strong>
        {info.map(link => (
          <MediaLink
            key={`${link.type}-${link.name}`}
            type={link.type}
            href={link.href}
            name={link.name}
          />
        ))}
        <p>{bio}</p>
      </div>
    </div>
  );
};
Member.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  info: PropTypes.array.isRequired,
  bio: PropTypes.string,
};
export default Member;
