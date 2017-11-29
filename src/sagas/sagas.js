import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


const getCurrentLocAPI = () => axios.get('http://localhost:3000/comments', {
    headers: {
        'Accept': 'application/json'
    }
}).then(response => response.data)
.catch(err => {
    throw err;
});



function* fetchUser(action) {
    try {
        const user = yield call(
            postCurrentLocAPI,
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