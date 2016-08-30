require('babel-register');
const compression = require('compression');
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const serveStatic = require('serve-static');
const favicon = require('serve-favicon');
// Server Side React
const { match, RouterContext } = require('react-router');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const ClientApp = require('./app/js/components/App.jsx').default;
const routes = ClientApp.routes;

const app = express();

app.use(compression());
app.engine('hbs', hbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use('/static', serveStatic(path.join(__dirname, '/static')));
app.use(favicon(`${__dirname}/static/style/img/favicon.ico`));

app.use((req, res) => {
  match({ routes: routes(), location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const DOM = ReactDOMServer.renderToString(
        // React.createElement(Provider, {store},
          React.createElement(RouterContext, renderProps)
        );
      // )
      res.render('index', { react: DOM });
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
