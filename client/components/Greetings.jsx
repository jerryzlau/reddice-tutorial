import React from 'react';
import { Link } from 'react-router-dom';

class Greetings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return ( 
      <div className="jumbotron">
        <h1>Hi</h1>
        <Link to="/new-event">New Event</Link>
      </div>
    );
  }
}
 
export default Greetings;

