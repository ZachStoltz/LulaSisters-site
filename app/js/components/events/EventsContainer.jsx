import eventJSON from '../../../../static/events.json';
import Loader from '../common/Loader.jsx';
import React, { Component } from 'react';

export class EventsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      isFetching: true,
    };
  }
  componentDidMount() {
    // TODO: Testing out feature, Need to implement firebase or something;
    setTimeout(() => {
      this.setState({
        events: eventJSON,
        isFetching: false,
      });
    }, 1000);
  }

  renderEvents(events) {
    if (events.length === 0) {
      return (
        <div>
          <h5>No Popup Scheduled At This Time =(</h5>
        </div>
      );
    }
    return events.map(ev => {
      return (
        <div>
          <h5>{ev.host}</h5>
          <div>{ev.location}</div>
          <div>{ev.time}</div>
        </div>
      );
    });
  }

  render() {
    const { events, isFetching } = this.state;
    return (
      <section id="events">
        <div className="wrapper">
          <div className="content">
            <h1>
              Host/Shop A Popup!
            </h1>
            <button className="btn">Book A Popup</button>
            <h3>Currently Booked Events</h3>
            {isFetching
              ? <Loader />
              : this.renderEvents(events)
            }
            <p>
              PBR&B mustache pitchfork literally polaroid,
              echo park street art retro chartreuse portland.
              Disrupt microdosing cold-pressed, cornhole kitsch
              blog pop-up cronut. +1 banjo vegan meggings slow-carb,
              stumptown selfies DIY poutine. Blog shabby chic farm-to-table,
              cliche everyday carry meh offal yr you probably haven't heard
              of them humblebrag ugh swag. Austin flexitarian raw denim
              organic direct trade, vice salvia. Vegan lumbersexual brunch,
              biodiesel tumblr truffaut microdosing tousled paleo. Franzen
              everyday carry pitchfork four loko.
            </p>

            <div className="calendar-wrapper">

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EventsContainer;
