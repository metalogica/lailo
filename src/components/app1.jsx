import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App1 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(<div>'App 1 renders too'<Link to='/'>To Original App</Link></div>)
  }
}

export default App1;
