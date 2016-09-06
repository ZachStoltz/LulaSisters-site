import Divider from '../common/Divider.jsx';
import Dropdown from '../common/Dropdown.jsx';
import { Link } from 'react-router';
import React from 'react';
import SideNav from '../common/SideNav.jsx';

export default () => (
  <nav>
    <SideNav
      id="side-nav"
      className="button-collapse"
    />
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
      {/* <li>
        <Link to="clothes">
          The Clothes
        </Link>
      </li>
      <Divider /> */}
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
      <li><a href="https://www.facebook.com/groups/LuLaRoeSistersDiciaErica/">Shop Our FB Page</a></li>
      <Divider />
      <li><Link to="events">Host/Shop A Popup!</Link></li>
    </Dropdown>
    <Link to="team-lula-sisterhood" className="nav-item">Team LuLa Sisterhood</Link>
    <Link to="join-our-team" className="btn btn-small btn-secondary">
      Join Our Team
    </Link>
  </nav>
);
