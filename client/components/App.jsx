import React from 'react';
import {hot} from 'react-hot-loader';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return ( 
      <h1>Hello from React!</h1>
    );
  }
}
 
export default hot(module)(App);