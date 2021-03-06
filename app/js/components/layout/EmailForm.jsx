import React from 'react';

export default (props) => (
  <div className={props.className}>
    <h5>Send A Quick Message To Dicia & Erica</h5>
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
      <button className="btn pink btn-small">Submit</button>
    </form>
  </div>
);
