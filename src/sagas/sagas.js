
import { put, call, fork, take } from 'redux-saga/effects';
import axios from 'axios';
import {startSubmit, stopSubmit, reset} from 'redux-form';
import actionTypes from '../actions/request';

export function formPost(params) {
 return axios.post('http://localhost:3000/comments', params).then((res) => {
    return { data: res.data };
 }, (error) => {
    return { error };
 });
}

function* handleSubmitForm() {
    for (;;) {
        const action = yield take(actionTypes.SUBMIT_FORM);
        const {params} = action.payload;
        yield put(startSubmit('example'));
        const { data, error } = yield call(formPost, params);
        if (data && !error) {
            // Action on success
            yield put(stopSubmit('example'));
            console.log(data);
            yield put(reset('example'));
        } else {
            // Action on failure
            yield put(stopSubmit('example', error));
        }
    }
}

export function* rootSaga() {
    yield fork(handleSubmitForm);
}