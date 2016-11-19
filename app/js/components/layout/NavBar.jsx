import Divider from '../common/Divider.jsx';
import Dropdown from '../common/Dropdown.jsx';
import { Link } from 'react-router';
import React from 'react';
import ReactGA from 'react-ga';
import SideNav from '../common/SideNav.jsx';

export default () => (
  <nav>
    <SideNav
      id="side-nav"
      className="button-collapse"
    />
    <div className="main-nav">
      <Dropdown
        id="about-dropdown"
        beloworigin
        alignment="right"
        className="nav-item"
        title="About LuLaRoe"
      >
        <li>
          <Link to="about-lularoe">
            About LuLaRoe
          </Link>
        </li>
        <Divider />
        <li>
          <Link to="frequently-asked">
            FAQ
          </Link>
        </li>
      </Dropdown>
      <Dropdown
        id="shop"
        className="nav-item"
        alignment="right"
        beloworigin
        title="Shop"
      >
        <li>
          <ReactGA.OutboundLink
            eventLabel="Facebook Shopping Group"
            to="https://www.facebook.com/groups/LuLaRoeSistersDiciaErica/"
            target="_blank"
          >
            Shop Our FB Page
          </ReactGA.OutboundLink>
        </li>
        <Divider />
        <li><Link to="events">Host/Shop A Popup!</Link></li>
      </Dropdown>
      <Link to="team-lula-queens" className="nav-item">Team LuLa Queens</Link>
      <Link to="join-our-team" className="btn btn-small btn-secondary">
        Join Our Team
      </Link>
    </div>
  </nav>
);
