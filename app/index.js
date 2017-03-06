import '../static/style/scss/lula.scss';
import 'isomorphic-fetch';
import App from './js/components/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import { render } from 'react-dom';

injectTapEventPlugin();
render(<App />, document.getElementById('app')
);
