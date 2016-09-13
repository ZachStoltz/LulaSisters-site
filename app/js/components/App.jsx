import AboutLula from './about/AboutLula.jsx';
import ClothesContainer from './about/ClothesContainer.jsx';
import EventsContainer from './events/EventsContainer.jsx';
import FAQContainer from './about/FAQContainer.jsx';
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
    {/* <Route path="clothes" component={ClothesContainer} /> */}
    <Route path="frequently-asked" component={FAQContainer} />
    <Route path="events" component={EventsContainer} />
    <Route path="team-lula-queens" component={Team} />
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
