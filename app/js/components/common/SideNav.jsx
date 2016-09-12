import React, { Component, PropTypes } from 'react';
const { string } = PropTypes;
export default class SideNav extends Component {
  static propTypes = {
    id: string,
    className: string,
  };
  componentDidMount() {
    $(`.${this.props.className}`).sideNav();
  }
  render() {
    return (
      <span className="side-nav-toggle">
        <a
          href="#"
          data-activates={this.props.id}
          className={this.props.className}
        >
          <i className="fa fa-bars"></i>
        </a>
        <ul className="side-nav" id={this.props.id}>
          <li>Need to add items</li>
        </ul>
      </span>
    );
  }
}
