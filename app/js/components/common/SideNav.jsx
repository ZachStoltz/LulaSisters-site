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
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </span>
    );
  }
}
