import React, { Component } from 'react';
import logo from './logo.svg';

import  { Home } from './container/Home';
import  { About } from './container/About';
import  { Topics } from './container/Topics';
import './scss/utils/helper.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {createStore} from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const store = createStore(counter);
store.subscribe(()=> console.log(store.getState()));

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})


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
