import React  from 'react';
import { Home } from './container/Home';
import { About } from './container/About';
import  Calendar  from './container/Calendar';
import  DragDropContext  from './container/CalendarDragAndDrop';
import { Topics } from './container/Topics';
import { Form } from './container/Form';
import './scss/utils/helper.css';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { BrowserRouter,  Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/reducers';
import rootSaga from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultState = {};
const middlewares = []
if(process.env.NODE_ENV === 'development'){
    const {logger} = require('redux-logger')
    middlewares.push(logger);
}

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware)
const store = createStore(
    reducers,
    defaultState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

const App = () => (
    <Provider store={store}>
    <BrowserRouter>
        <div>
         <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/topics' component={Topics} />
          <Route exact path='/form' component={Form} />
          <Route exact path='/calendar' component={Calendar} />
          <Route exact path='/calendardnd' component={DragDropContext} />
        </div>
    </BrowserRouter>
    </Provider>
);
export default App;
