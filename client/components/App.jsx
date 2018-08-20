import React from 'react';
import {hot} from 'react-hot-loader';
import NavigationBar from './NavigationBar';
import Greetings from './Greetings';
import AppRoutes from '../AppRoutes';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return ( 
      <div className="container">
        <NavigationBar />
        <AppRoutes/>
      </div>
    );
  }
}
 
export default hot(module)(App);