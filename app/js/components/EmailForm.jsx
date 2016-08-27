import React from 'react';

export default (props) => (
  <form className={props.className}>
    <label htmlFor="name-input">Name</label>
    <input type="text" name="name-input" placeholder="name" required />
    <label htmlFor="email-input">Email</label>
    <input type="email" name="email-input" placeholder="email" required />
    <label htmlFor="textarea">Message</label>
    <textarea name="textarea" rows="5" placeholder="message" required />
    <button className="btn btn-submit btn-small">Submit</button>
  </form>
);
