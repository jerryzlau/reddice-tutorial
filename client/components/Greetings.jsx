import React from 'react';

class Greetings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    console.log('greetings');
    return ( 
      <div className="jumbotron">
        <h1>Hi</h1>
      </div>
    );
  }
}
 
export default Greetings;

