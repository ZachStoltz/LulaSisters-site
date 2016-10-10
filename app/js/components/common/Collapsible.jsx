import React, { Component } from 'react';

export default class Collapsible extends Component {
  componentDidMount() {
    $(this.target).collapsible({ // eslint-disable-line
      accordion: this.props.type === 'accordion',
    })
  }
  render() {
    return (
      <ul
        ref={(c) => this.target = c} // eslint-disable-line
        className={`collapsible ${this.props.popout ? 'popout' : ''}`}
        data-collapsible={this.props.type}
      >
        {this.props.children}
      </ul>
    );
  }
}
