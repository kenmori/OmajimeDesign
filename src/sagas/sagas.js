import { call, put, takeLatest } from 'redux-saga/effects';
import {request} from './../actions/request';



function* fetchUser(action) {
    console.log(request, 'requestApi');
    try {
        const user = yield call(
            request,
            action.payload.userId);
        yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* mySaga(){
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;