class EventsController {
  static baseUrl = '/api/events';
  constructor(app) {
    app.get('/api/events', this.getEvents);
  }

  getEvents(req, res) {
    const eventRef = req.app.eventRef;
    if (!eventRef) return res.status(500).json({ msg: 'Unable to process request due to env variable not being set', status: 500 });

    return eventRef.once('value')
      .then(snapshot => {
        const rtnEvents = [];
        snapshot.forEach(childSnapshot => {
          const event = { id: childSnapshot.key, ...childSnapshot.val() };

          rtnEvents.push(event);
        });
        return res.status(200).json(rtnEvents);
      })
      .catch(err => res.status(500).json(err));
  }
}

module.exports = EventsController;
