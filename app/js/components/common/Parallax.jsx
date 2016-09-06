import React, { Component } from 'react';

export default class Parallax extends Component {
  componentDidMount() {
    $(`.${this.props.name}`).parallax();
  }

  render() {
    const {
      src,
      name,
      description,
      style
    } = this.props;
    return (
      <div className="parallax-container" style={style.parallaxContainer}>
        <div className={name} style={{ zIndex: 1 }}>
          <img src={src} alt={name} style={style.img} />
          <span style={style.description}>{description}</span>
        </div>
      </div>
    );
  }
}
