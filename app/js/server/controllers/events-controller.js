class EventsController {
  static baseUrl = '/api/events';
  constructor(app) {
    app.get('/api/events', this.getEvents);
  }

  getEvents(req, res) {
    req.app.eventRef.once('value')
      .then(snapshot => {
        const rtnEvents = [];
        snapshot.forEach(childSnapshot => {
          const event = { id: childSnapshot.key, ...childSnapshot.val() };

          rtnEvents.push(event);
        });
        res.status(200).json(rtnEvents);
      })
      .catch(err => res.status(500).json(err));
  }
}

module.exports = EventsController;
