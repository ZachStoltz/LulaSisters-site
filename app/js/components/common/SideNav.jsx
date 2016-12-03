import Collapsible from './Collapsible.jsx';
import CollapsibleItem from './CollapsibleItem.jsx';
import Divider from './Divider.jsx';
import Link from 'react-router/lib/Link';
import { sendOutboundEvent } from '../helpers';
import { unmountComponentAtNode } from 'react-dom';
import React, { Component, PropTypes } from 'react';

const { string } = PropTypes;
const SideLink = (props) => (
  <Link
    onTouchTap={() => {
      $(props.trigger).sideNav('hide');
    }}
    to={props.to}
  >
    {props.children}
  </Link>
);

export default class SideNav extends Component {
  static propTypes = {
    id: string,
    className: string,
  };
  componentDidMount() {
    return $(this.trigger).sideNav();
  }
  componentWillUnmount() {
    return unmountComponentAtNode(this.trigger);
  }
  render() {
    return (
      <span className="side-nav-toggle">
        <a
          href="#"
          data-activates={this.props.id}
          className={this.props.className}
          ref={(c) => this.trigger = c}
        >
          <i className="fa fa-bars"></i>
        </a>
        <ul className="side-nav" id={this.props.id}>
          <li className="logo">
            <SideLink to="/" trigger={this.trigger}>
              <img src={'/static/style/img/logo_small.png'} alt="LuLa Sisters: Dicia & Erica" />
            </SideLink>
          </li>
          <Divider />
          <li>
            <Collapsible collapsible="accordion">
              <CollapsibleItem
                header="About LuLaRoe"
              >
                <ul>
                  <li>
                    <SideLink to="about-lularoe" trigger={this.trigger}>
                      About LuLaRoe
                    </SideLink>
                  </li>
                  <li>
                    <SideLink to="frequently-asked" trigger={this.trigger}>
                      FAQ
                    </SideLink>
                  </li>
                </ul>
              </CollapsibleItem>
            </Collapsible>
          </li>
          <Divider />
          <li>
            <a
              href="https://www.facebook.com/groups/LuLaRoeSistersDiciaErica/"
              target="_blank"
              data-event-label="Facebook Group CTA"
              onTouchTap={sendOutboundEvent}
            >
              Shop Our FB Page
            </a>
          </li>
          <li>
            <SideLink to="events" trigger={this.trigger}>
              Host/Shop A Popup!
            </SideLink>
          </li>
          <li>
            <SideLink
              to="team-lula-queens"
              className="nav-item"
              trigger={this.trigger}
            >
              Team LuLa Queens
            </SideLink>
          </li>
          <li>
            <SideLink to="join-our-team" trigger={this.trigger}>
              Join Our Team
            </SideLink>
          </li>
        </ul>
      </span>
    );
  }
}
