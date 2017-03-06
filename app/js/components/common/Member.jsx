import MediaLink from './MediaLink.jsx';
import React, { PropTypes } from 'react';

export const Member = props => {
  const {
    img,
    name,
    location,
    info = [],
  } = props;
  return (
    <div className="member">
      <img src={img} alt={name} />
      <div className="member--header">
        <div className="member--header-title">{name}</div>
        <div className="member--header-title">
          {Array.isArray(location)
            ? location.map(city => <div>{city}</div>)
            : location
          }
        </div>
      </div>
      <div className="member-info content">
        {info.map(link => (
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
};
Member.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  info: PropTypes.array.isRequired,
  bio: PropTypes.string,
};
export default Member;
