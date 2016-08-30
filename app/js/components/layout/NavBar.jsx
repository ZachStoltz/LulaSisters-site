import Divider from '../common/Divider.jsx';
import Dropdown from '../common/Dropdown.jsx';
import { Link } from 'react-router';
import SideNav from '../common/SideNav.jsx';
import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <SideNav
          id="side-nav"
          className="button-collapse"
        />
        <Link to="about-lularoe" className="nav-item">
          <span>About LuLaRoe</span>
        </Link>
        <Dropdown
          id="team-dropdown"
          beloworigin
          alignment="right"
          className="nav-item"
          title="Team LuLa Sisters"
        >
          <li><Link to="team-lula-sisters">Check Out Our Team Members</Link></li>
          <li><a href="#!">two</a></li>
          <Divider />
          <li><a href="#!">three</a></li>
        </Dropdown>
        <Dropdown
          id="for-customers"
          className="nav-item"
          alignment="right"
          beloworigin
          title="For Customers"
        >
          <li><Link to="for-customers">For Customers</Link></li>
          <li><a href="#!">two</a></li>
          <Divider />
          <li><a href="#!">three</a></li>
        </Dropdown>
        <Link to="join-our-team" className="btn btn-small btn-secondary">
          Join Our Team
        </Link>
      </nav>
    );
  }
}
