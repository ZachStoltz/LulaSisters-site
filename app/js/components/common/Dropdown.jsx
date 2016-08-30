import React, { Component, PropTypes } from 'react';

const { string, bool } = PropTypes;

export default class Dropdown extends Component {
  static propTypes = {
    className: string,
    title: string,
    id: string,
    beloworigin: bool,
    constrainwidth: bool,
    alignment: string,
  };
  static defaultProps = {
    beloworigin: false,
    constrainwidth: false,
    alignment: 'left',
  }
  componentWillUnmount() {
    $(`.${this.props.className}`).off();
  }
  render() {
    const {
      alignment,
      className,
      id,
      beloworigin,
      constrainwidth,
      title,
      children, //eslint-disable-line
    } = this.props;
    return (
      <span className={className}>
        <a
          className="dropdown-button"
          data-activates={id}
          data-beloworigin={beloworigin}
          data-constrainwidth={constrainwidth}
          data-alignment={alignment}
        >
          {title}
          <i className="fa fa-chevron-down" aria-hidden="true" />
        </a>
        <ul id={id} className="dropdown-content">
          {children}
        </ul>
      </span>
    );
  }
}
