
import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import {startSubmit, stopSubmit, reset} from 'redux-form';
import actionTypes from '../actions/actionTypes';

function submitToServer(data) {
    return fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
        .catch(error => console.log(error));
}


function* callSubmit(action) {
    console.log('callSubmit', action)
    yield put(startSubmit('contact'));
    let errors = {};
    const result = yield call(submitToServer, action.data);
    console.log(result);
    if (result.errors) {
        yield put({ type: 'REQUEST_FAILED', errors: result.errors});
    } else {
        yield put({ type: 'REQUEST_SUCCESSFULL'});
    }
    console.log('start submit');
    yield put(stopSubmit('contact', errors));
}

function* submitSaga() {
    console.log('submitSaga')
    yield takeLatest('REQUEST_SUBMIT', callSubmit);
}

export function* rootSaga() {
    yield [
        fork(submitSaga),
    ]
}
