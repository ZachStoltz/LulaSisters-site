import EmailForm from './EmailForm.jsx';
import MediaLink from '../common/MediaLink.jsx';
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
        <MediaLink
          type="email"
          href="mailto:LuLaSistersDiciaErica@gmail.com&amp;subject=Heyo%20Lets%20talk%20Lularoe"
          name="LuLaSistersDiciaErica@gmail.com"
        />
        <MediaLink
          type="facebook"
          href="https://www.facebook.com/groups/LuLaRoeSistersDiciaErica/"
          name="LuLaSisters: Dicia & Erica"
        />
        <MediaLink
          type="instagram"
          href="https://www.instagram.com/lulasistersdiciaerica/"
          name="LuLaSistersDiciaErica"
        />
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
