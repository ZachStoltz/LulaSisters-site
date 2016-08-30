import EmailForm from './EmailForm.jsx';
import React from 'react';


export default () => (
  <footer>
    <div className="wrapper">
      {/* <div className="insta-feed">
        PHOTOS FROM INSTAGRAM
      </div> */}
      <div className="content">
        <h5>Getting Started</h5>
        <ul>
          <a><li>How to shop</li></a>
          <a><li>How to shop</li></a>
          <a><li>How to shop</li></a>
          <a><li>How to shop</li></a>
          <a><li>FAQ</li></a>
        </ul>
      </div>
      <div className="content">
        <h5>Wanna Talk?</h5>
        <p>
          Pug synth paleo vinyl messenger bag,
          heirloom gochujang retro vice meggings
          photo booth flexitarian. Thundercats before they sold out
          lumbersexual distillery. Retro gluten-free irony, meh
          farm-to-table quinoa cliche drinking vinegar brunch cold-pressed.
        </p>
        <div className="email">
          <i className="fa fa-at" aria-hidden="true" />
          <a href="mailto:erica@stoltz.io?cc=dicia@marguccio.com&amp;subject=Heyo%20Lets%20talk%20Lularoe">
            lulasistersdiciaanderica@gmail.com
          </a>
        </div>
        <div className="fb">
          <i className="fa fa-facebook" aria-hidden="true" />
          <a href="#">LuLaSisters: Dicia & Erica</a>
        </div>
      </div>
      <EmailForm className="content email-form" />
    </div>
    <div className="wrapper copy">
      <hr />
      <div className="copy">
        <span>&copy; Two and a Half Girls, LLC</span>
      </div>
    </div>
  </footer>
);
