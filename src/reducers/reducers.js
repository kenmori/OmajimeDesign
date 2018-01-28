import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import {topickReducer} from './TopickReducer';

const reducers =  combineReducers({
   routing: routerReducer,
    form: formReducer,
    topick: topickReducer,
});

export default reducers;
