import eventJSON from '../../../../static/events.json';
import Helmet from 'react-helmet';
import Loader from '../common/Loader.jsx';
import React, { Component } from 'react';
import { sendOutboundEvent, setOgCommons } from '../helpers';
// { example json
//   "id": ,
//   "host": ,
//   "location": ,
//   "date": ,
//   "time": ,
//   "comments":
// }
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
          <h5>Stay tuned for upcoming 2017 events!!</h5>
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
