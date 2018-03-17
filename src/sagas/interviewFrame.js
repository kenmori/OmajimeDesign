import {all, fork, take, call, put} from 'redux-saga/effects';
import {REQUEST_POST_INTERVIEWFRAME, MOVE_INTERVIEWFRAME,REQUEST_INIT,succcessAllinterviewFrame, requestInit, successInterviewFrame} from '../actions/interviewFrameAction'

function submitToServer(data) {
    console.log(data)
return fetch('http://localhost:3004/events', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
}).then(response => {
    console.log(response, "post");
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
    return fetch('http://localhost:3004/events', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify(data),
}).then(response => {
    return response.json()
})
    .catch(error => console.log(error));
    }
function* interviewFrame(){
    while(true){
    const action = yield take(REQUEST_INIT);
        debugger;
    console.log("fafa ii ")
    const result = yield call(getToServer)
    console.log(result, 'saga init')
    if(!result.errors){
        yield put(succcessAllinterviewFrame(result));
    } else {
        }
    }
}
function* moveInterviewFrame(){
    while(true){
    const action = yield take(MOVE_INTERVIEWFRAME);
    console.log(action, "action")
    const result = yield call(putToServer, action.payload)
    if(!result.errors){
        console.log(result, "put")
        yield put(successInterviewFrame(result));
    } else {
        console.log("failer")
        yield put('FAILEAR_INTERVIEWFRAME');
    }
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
        fork(moveInterviewFrame),
        fork(interviewFrame)
    ])
}





