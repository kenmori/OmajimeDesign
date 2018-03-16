import {createAction} from 'redux-actions';

export const REQUEST_INTERVIEWFRAME = 'REQUEST_INTERVIEWFRAME';

export const requestInterviewFrame = createAction(REQUEST_INTERVIEWFRAME)

export const MOVE_INTERVIEWFRAME = 'MOVE_INTERVIEWFRAME';
export const moveInterViewFrame = createAction(MOVE_INTERVIEWFRAME);
