import AboutLula from './about-lula/AboutLula.jsx';
import CustomerInfo from './info/CustomerInfo.jsx';
import Home from './Home.jsx';
import JoinOurTeam from './join-our-team/JoinOurTeam.jsx';
import Layout from './layout/Layout.jsx';
import React from 'react';
import Team from './team/Team.jsx';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

// import { Provider } from 'react-redux';
// import { store } from ' ./Store';

const myRoutes = () => (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="about-lularoe" component={AboutLula} />
    <Route path="team-lula-sisters" component={Team} />
    <Route path="for-customers" component={CustomerInfo} />
    <Route path="join-our-team" component={JoinOurTeam} />
  </Route>
);


const App = () => (
  // <Provider store={store}>
  <Router history={browserHistory}>
    {myRoutes()}
  </Router>
  // </Provider
);

App.routes = myRoutes;
App.history = browserHistory;

export default App;
