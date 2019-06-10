import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(<div>'original app renders'<Link to='/app1'>To App1</Link></div>)
  }
}

export default App;
