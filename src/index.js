import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Root from './App';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/sagas';

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducers, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(mySaga);
render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
