import {Route} from 'react-router';
import React from 'react';
import { Component } from 'react';
import SignupPage from './components/signup/SignupPage';
import Greetings from './components/Greetings';
import LoginPage from './components/login/LoginPage';
import NewEvent from './components/events/NewEventPage';

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Greetings}/>
        <Route exact path="/signup" component={SignupPage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/new-event" component={NewEvent}/>
      </div>
    );
  }
}

export default AppRoutes;