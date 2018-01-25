import React  from 'react';
import { Home } from './container/Home';
import { About } from './container/About';
import { Topics } from './container/Topics';
import './scss/utils/helper.css';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { browseerHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/reducers';
import { rootSaga } from './sagas/sagas';

const defaultState = {};
const sagaMiddlware = createSagaMiddleware();
let store = createStore(reducers, defaultState, applyMiddleware(sagaMiddlware));

sagaMiddlware.run(rootSaga);

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
