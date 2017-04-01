import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Login, AppBarExampleIcon, Main, DonateForm, Thanks } from './components';
import './index.css';


import configureStore from './store/configureStore';

import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';


const store = configureStore();

injectTapEventPlugin();

  var config = {
    apiKey: "AIzaSyBxHlc4wqTFrnQY3uWyMN6E7_NSHVXWCiE",
    authDomain: "redux-58e92.firebaseapp.com",
    databaseURL: "https://redux-58e92.firebaseio.com",
    storageBucket: "redux-58e92.appspot.com",
    messagingSenderId: "163504187384"
  };
firebase.initializeApp(config);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>

      <Router history={browserHistory}>
        <Route path="/" component={AppBarExampleIcon} >
          <IndexRoute component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/thanks" component={Thanks}/>
          <Route path="/donateform" component={DonateForm}/>
        </Route>

      </Router>

    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
