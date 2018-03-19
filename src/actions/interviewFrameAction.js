import {createAction} from 'redux-actions';

export const REQUEST_INTERVIEWFRAME = 'REQUEST_INTERVIEWFRAME';
export const requestInterviewFrame = createAction(REQUEST_INTERVIEWFRAME);

export const REQUEST_POST_INTERVIEWFRAME = 'REQUEST_POST_INTERVIEWFRAME';
export const requrestPostInterviewFrame = createAction(REQUEST_POST_INTERVIEWFRAME);

export const REQUEST_INIT = 'REQUEST_INIT';
export const requestInit = createAction(REQUEST_INIT);

export const MOVE_INTERVIEWFRAME = 'MOVE_INTERVIEWFRAME';
export const moveInterViewFrame = createAction(MOVE_INTERVIEWFRAME);

export const SUCCESS_INTERVIEWFRAME = 'SUCCESS_INTERVIEWFRAME';
export const successInterviewFrame = createAction(SUCCESS_INTERVIEWFRAME);

export const SUCCESS_ALLINTERVIEWFRAME = 'SUCCESS_ALLINTERVIEWFRAME';
export const succcessAllinterviewFrame = createAction(SUCCESS_ALLINTERVIEWFRAME);

export const ON_SELECTED = 'ON_SELECTED';
export const onSelectedSlot = createAction(ON_SELECTED);

