import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Root from './App';
import { createStore } from 'redux';
import reducers from './reducers/reducers';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers);

render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
