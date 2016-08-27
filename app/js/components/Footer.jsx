import EmailForm from './EmailForm.jsx';
import React from 'react';


export default () => (
  <footer>
    <div className="wrapper footer-content">
      <div className="insta-feed">
        PHOTOS FROM INSTAGRAM
      </div>
      <div>
        <h5>Getting Started</h5>
        <ul>
          <a><li>How to shop</li></a>
          <a><li>How to shop</li></a>
        </ul>
      </div>
      <div>
        <h5>Wanna Talk?</h5>
        <p>
          Pug synth paleo vinyl messenger bag,
          heirloom gochujang retro vice meggings
          photo booth flexitarian. Thundercats before they sold out
          lumbersexual distillery. Retro gluten-free irony, meh
          farm-to-table quinoa cliche drinking vinegar brunch cold-pressed.
        </p>
        <span>@</span><a href="mailto:erica@stoltz.io?cc=dicia@marguccio.com&amp;subject=Heyo%20Lets%20talk%20Lularoe">lulasistersdiciaanderica@gmail.com</a>
      </div>
      <EmailForm className="email-form" />
    </div>
    <div className="wrapper">
      <hr />
      <div className="copy">
        <span>&copy; Two and a Half Girls, LLC</span>
      </div>
    </div>
  </footer>
);
