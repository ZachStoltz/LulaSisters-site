require('babel-register');
const compression = require('compression');
const express = require('express');
const hbs = require('express-handlebars');
const helmet = require('helmet');
const path = require('path');
const serveStatic = require('serve-static');
const favicon = require('serve-favicon');
const firebase = require('firebase');
const firebaseConfig = require('./firebase-config');

// Server Side React
const { match, RouterContext } = require('react-router');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Helmet = require('react-helmet');
const ClientApp = require('./app/js/components/App.jsx').default;
const routes = ClientApp.routes;

// Controllers
const EventController = require('./app/js/server/controllers/events-controller');

const app = express();
firebase.initializeApp(firebaseConfig);

app.eventRef = firebase.database().ref('events');

// event api endpoints
new EventController(app); // eslint-disable-line

app.use(helmet());
app.use(compression());
app.engine('hbs', hbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use('/static', serveStatic(path.join(__dirname, '/static')));
app.use(favicon(path.join(__dirname, '/static/style/img/favicon.ico')));

app.use((req, res) => {
  match({ routes: routes(), location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const DOM = ReactDOMServer.renderToString(
        React.createElement(RouterContext, renderProps)
      );
      const head = Helmet.rewind();

      res.render('index', { react: DOM, title: head.title, meta: head.meta });
    } else {
      res.render('404');
    }
  });
});

app.listen(process.env.PORT || 7001, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Express App listening @ port ${process.env.PORT || 7001}`);
});
