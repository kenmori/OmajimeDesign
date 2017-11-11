import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  { Home } from './container/Home';
import  { About } from './container/About';
import  { Topics } from './container/Topics';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/topics' component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
