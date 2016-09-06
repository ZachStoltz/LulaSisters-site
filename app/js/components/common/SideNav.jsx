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
      <span>
        <a
          href="#"
          data-activates={this.props.id}
          className={this.props.className}
        >
          <i className="material-icons">menu</i>
        </a>
        <ul className="side-nav" id={this.props.id}>
          <li>Need to add items</li>
        </ul>
      </span>
    );
  }
}
