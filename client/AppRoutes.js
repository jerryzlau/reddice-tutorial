import {Route} from 'react-router';
import React from 'react';
import { Component } from 'react';
import SignupPage from './components/signup/SignupPage';
import Greetings from './components/Greetings';

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Greetings}/>
        <Route exact path="/signup" component={SignupPage}/>
      </div>
    );
  }
}

export default AppRoutes;