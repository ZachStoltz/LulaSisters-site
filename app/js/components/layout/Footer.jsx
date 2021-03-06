import Link from 'react-router/lib/Link';
import MediaLink from '../common/MediaLink.jsx';
import React from 'react';


export default () => (
  <footer>
    <div className="wrapper">
      {/* <div className="insta-feed">
        PHOTOS FROM INSTAGRAM
      </div> */}
      <div className="content">
        <h5>Quick Links</h5>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="about-lularoe"><li>About LuLaRoe</li></Link>
          <Link to="frequently-asked"><li>FAQ</li></Link>
          <Link to="events"><li>Host A Popup</li></Link>
          <Link to="team-lula-queens"><li>Team LuLa Queen's members</li></Link>
          <Link to="join-our-team"><li>Join Team LuLa Queens</li></Link>
        </ul>
      </div>
      <div className="content">
        <h5>Wanna Talk?</h5>
        <MediaLink
          type="email"
          eventLabel="Email CTA"
          href="mailto:LuLaSistersDiciaErica@gmail.com"
          name="LuLaSistersDiciaErica"
        />
        <MediaLink
          type="facebook"
          eventLabel="Facebook Group CTA"
          href="https://www.facebook.com/groups/LuLaRoeSistersDiciaErica/"
          target="_blank"
          name="LuLaSisters: Dicia & Erica"
        />
        <MediaLink
          type="instagram"
          eventLabel="Instagram CTA"
          href="https://www.instagram.com/lulasistersdiciaerica/"
          target="_blank"
          name="LuLaSistersDiciaErica"
        />
      </div>
      <div className="content instagram">
        <h5>Instagram Feed</h5>
        <p style={{ color: 'white' }}>Feature coming soon!</p>
      </div>
    </div>
    <div className="wrapper copy">
      <hr />
      <div className="copy">
        <span>&copy; Two and a Half Girls, LLC</span>
      </div>
    </div>
  </footer>
);
