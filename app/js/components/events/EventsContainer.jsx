import eventJSON from '../../../../static/events.json';
import Loader from '../common/Loader.jsx';
import ReactGA from 'react-ga';
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
        <div key={ev.id}>
          <h5>{ev.host}</h5>
          <div>{ev.location}</div>
          <div>{ev.date}</div>
          <div>{ev.time}</div>
          <div>{ev.comments}</div>
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
            <div className="call-to-action">
              <ReactGA.OutboundLink
                eventLabel="Host-a-popup CTA"
                to="https://docs.google.com/forms/d/e/1FAIpQLScYFj1OYwwfvcDbdXknPxb4G0A6oEXdlxNgGgYqEeEDa67Ieg/viewform?usp=send_form"
                target="_blank"
              >
                <img alt="schedule a pop-up" src="/static/style/img/schedule-a-pop-up.jpeg" />
              </ReactGA.OutboundLink>
              <div className="wrapper">
                <ReactGA.OutboundLink
                  className="btn"
                  eventLabel="Host-a-popup CTA"
                  to="https://docs.google.com/forms/d/e/1FAIpQLScYFj1OYwwfvcDbdXknPxb4G0A6oEXdlxNgGgYqEeEDa67Ieg/viewform?usp=send_form"
                  target="_blank"
                >
                  Schedule Now!
                </ReactGA.OutboundLink>
              </div>
            </div>

            <h3>Upcoming Events</h3>
            {isFetching
              ? <Loader />
              : this.renderEvents(events)
            }
            <div className="calendar-wrapper">

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EventsContainer;
