import React  from 'react';
import { Home } from './container/Home';
import { About } from './container/About';
import { Topics } from './container/Topics';
import './scss/utils/helper.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import reducers from './reducers/reducers';
let store = createStore(reducers);

const App = () => (
    <Provider store={store}>
    <Router>
        <div>
         <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/topics' component={Topics} />
        </div>
    </Router>
    </Provider>
);
export default App;
