import React, { PropTypes } from 'react';

const buildDateComponent = occurences => (
  occurences.map(day => (
    <div key={`${day.when} - ${day.title}`}>
      <span>{day.when} </span>
      <a href={day.link}>{day.title}</a>
    </div>
  ))
);

export const Event = (props) => {
  const {
    id,
    host,
    location,
    date,
    time,
    comments,
    className,
  } = props;

  return (
    <div className={className}>
      <h5>{host}</h5>
      <div>{comments}</div>
      {location ? <div>Where: <strong>{location}</strong></div> : null}
      {Array.isArray(date) ?
        buildDateComponent(date)
        : <div>When: {date}</div>
      }
      {time ? <div>Time: {time}</div> : null}
    </div>
  );
};

const { string, oneOfType, array } = PropTypes;
Event.propTypes = {
  id: string.isRequired,
  host: string.isRequired,
  location: string,
  date: oneOfType([string, array]),
  time: string.isRequired,
  comments: string,
};
export default Event;
