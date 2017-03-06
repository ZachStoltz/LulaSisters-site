const firebase = require('firebase');

class EventsController {
  constructor(app) {
    this.app = app;
  }

  getEvents() {
    this.app.get('/', (req, res) => {
      firebase.database().ref('events')
    });
  }
}

module.exports = EventsController;
