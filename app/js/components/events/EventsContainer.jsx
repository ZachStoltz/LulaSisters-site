import Event from '../common/Event.jsx';
import Helmet from 'react-helmet';
import Loader from '../common/Loader.jsx';
import React, { Component } from 'react';
import { sendOutboundEvent, setOgCommons } from '../helpers';

export class EventsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      isFetching: true,
    };
  }
  componentDidMount() {
    fetch('/api/events', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    .then(function checkStatus(response) { //eslint-disable-line
      if (response.status >= 400) {
        const error = new Error('Unable to load events at this time.  Please check up later.');
        error.response = response;

        throw error;
      }
      return response;
    })
    .then(function parseJSON(response) { //eslint-disable-line
      return response.json();
    })
    .then(events => this.setState({
      events,
      isFetching: false,
    }))
    .catch(err => this.setState({
      err,
      events: [],
      isFetching: false,
    }));
  }

  renderEvents(events) {
    console.log(events);
    if (events.length === 0) {
      return (
        <div>
          <h5>Stay tuned for upcoming 2017 events!!</h5>
        </div>
      );
    }
    return events.map(ev => {
      return <Event key={ev.id} {...ev} className="event" />;
    });
  }

  render() {
    const { events, isFetching } = this.state;
    return (
      <section id="events">
        <Helmet
          title="Events - LuLaSisters"
          meta={[
            ...setOgCommons('events'),
          ]}
        />
        <div className="wrapper">
          <div className="content">
            <div className="call-to-action">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScYFj1OYwwfvcDbdXknPxb4G0A6oEXdlxNgGgYqEeEDa67Ieg/viewform?usp=send_form"
                target="_blank"
                data-event-label="Host-a-popup CTA"
                onTouchTap={sendOutboundEvent}
              >
                <img alt="schedule a pop-up" src="/static/style/img/schedule-a-pop-up.jpeg" />
              </a>
              <div className="wrapper">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScYFj1OYwwfvcDbdXknPxb4G0A6oEXdlxNgGgYqEeEDa67Ieg/viewform?usp=send_form"
                  target="_blank"
                  className="btn"
                  data-event-label="Host-a-popup CTA"
                  onTouchTap={sendOutboundEvent}
                >
                  Schedule Now!
                </a>
              </div>
            </div>

            <h3>Upcoming Events</h3>
            <div className="events-wrapper">
              {isFetching
                ? <Loader />
                : this.renderEvents(events)
              }
            </div>
            <div className="calendar-wrapper">

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EventsContainer;
