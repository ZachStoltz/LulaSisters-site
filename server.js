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
const Helmet = require('react-helmet');
const ClientApp = require('./app/js/components/App.jsx').default;
const routes = ClientApp.routes;

const app = express();

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
      const html = `
      <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
            <meta name="google-site-verification" content="-_ld41eYmBh4SopKleO-RQQMcSM6JaFwRkXrvyiA6Lk" />
            ${head.meta}
            <title>${head.title}</title>
            <link href="https://fonts.googleapis.com/css?family=Sofia" rel="stylesheet">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">
            <link href="/static/style/font-awesome.min.css" rel="stylesheet" />
            <link type="text/css" href="/static/style/css/main.css" rel="stylesheet" />
          </head>
          <body>
            <div id="app">${DOM}</div>
            <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
            <script src="/static/bundle.js"></script>
          </body>
        </html>
      `;
      res.write(html);
      res.end();
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
