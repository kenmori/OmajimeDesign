import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Root from './App';
import { createStore } from 'redux';
import {ohmajimeStore} from './reducers/reducers';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(ohmajimeStore);

render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
