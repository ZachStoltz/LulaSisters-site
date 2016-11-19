import React, { PropTypes } from 'react';

export const FAQ = (props) => (
  <div className="faq--item container">
    <div className="faq--question">
      {props.question}
    </div>
    <div className="faq--answer">
      {props.answer}
    </div>
    <div className="faq--img">
      {props.children}
    </div>
  </div>
);

const { string, element, object } = PropTypes;

FAQ.propTypes = {
  question: string,
  answer: PropTypes.oneOfType([string, object]),
  children: element,
};

export default FAQ;
