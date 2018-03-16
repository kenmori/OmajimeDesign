import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import {topickReducer} from './TopickReducer';
import {modalReducer} from './modalReducer';
import {interviewFrameReducer} from './interviewFrameReducer';

const reducers =  combineReducers({
    routing: routerReducer,
    form: formReducer,
    topick: topickReducer,
    modal: modalReducer,
    interviewFrame: interviewFrameReducer
});

export default reducers;
