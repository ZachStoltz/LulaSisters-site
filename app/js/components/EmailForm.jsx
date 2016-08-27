import React from 'react';

export default (props) => (
  <div className={props.className}>
    <h4>Quick Response to Dicia & Erica</h4>
    <form>
      <div className="input-group">
        <label htmlFor="name-input">name:</label>
        <input type="text" name="name-input" placeholder="name" required />
      </div>
      <div className="input-group">
        <label htmlFor="email-input">email:</label>
        <input type="email" name="email-input" placeholder="email" required />
      </div>
      <div className="input-group textarea">
        <label htmlFor="textarea">message:</label>
        <textarea name="textarea" rows="5" placeholder="message" required />
      </div>
      <button className="btn btn-submit btn-small">Submit</button>
    </form>
  </div>
);
