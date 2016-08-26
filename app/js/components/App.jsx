import Home from './Home.jsx';
import Layout from './Layout.jsx';
import React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

// import { Provider } from 'react-redux';
// import { store } from ' ./Store';

const myRoutes = () => (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
  </Route>
);

const App = () => (
  // <Provider store={store}>
  <Router history={browserHistory}>
    {myRoutes()}
  </Router>
  // </Provider>
);

App.routes = myRoutes;
App.history = browserHistory;

export default App;
