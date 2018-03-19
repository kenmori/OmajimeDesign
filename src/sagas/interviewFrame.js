import {all, fork, take, call, put} from 'redux-saga/effects';
import {REQUEST_POST_INTERVIEWFRAME, MOVE_INTERVIEWFRAME,REQUEST_INIT,succcessAllinterviewFrame, requestInit, successInterviewFrame} from '../actions/interviewFrameAction'
function submitToServer(data) {
return fetch('http://localhost:3004/events', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
}).then(response => {
    return response.json()
})
    .catch(error => console.log(error));
}
function getToServer() {
return fetch('http://localhost:3004/events', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
        credentials: 'same-origin',
}).then(response => {
    return response.json()})
    .catch(error => console.log(error));
}
function putToServer(data) {
    return fetch(`http://localhost:3004/events/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify(data.events[0]),
}).then(response => {
    return response.json()
})
    .catch(error => console.log(error));
    }
function* interviewFrame(){
    while(true){
    const action = yield take(REQUEST_INIT);
    const result = yield call(getToServer)
    if(!result.errors){
        yield put(succcessAllinterviewFrame(result));
    } else {
        }
    }
}
function* moveInterview(){
    const action = yield take(MOVE_INTERVIEWFRAME);
    const result = yield call(putToServer, action.payload)
    if(!result.errors){
        yield put(successInterviewFrame(result));
    } else {
        yield put('FAILEAR_INTERVIEWFRAME');
    }
}
//POST
function* requestCreateInterview(){
    const action = yield take(REQUEST_POST_INTERVIEWFRAME);
    const result = yield call(submitToServer, action.payload)
    if(!result.errors){
        yield put(successInterviewFrame(result));
    } else {
        yield put({type: '', errors: result.errors})
    }
}

export default function* rootSaga(){
    yield all([
        fork(requestCreateInterview),
        fork(moveInterview),
        fork(interviewFrame)
    ])
}





