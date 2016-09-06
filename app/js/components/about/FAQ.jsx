import React, { PropTypes } from 'react';

export const FAQ = (props) => (
  <div className="faq--item">
    <div className="faq--question">
      {props.question}
    </div>
    <div className="faq--answer">
      {props.answer}
    </div>
  </div>
);

const { string } = PropTypes;

FAQ.propTypes = {
  question: string,
  answer: string,
};

export default FAQ;
