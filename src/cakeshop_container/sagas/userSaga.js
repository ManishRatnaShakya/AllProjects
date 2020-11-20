import {put,call,takeEvery} from 'redux-saga/effects'
// import axios from 'axios';
import {FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE,FETCH_USERS_REQUEST} from '../redux/User/userTypes'

const apiURL = 'https://jsonplaceholder.typicode.com/users';

function getAPI(){
    console.log('i am in userSaga-getAPI');
    return fetch(apiURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json()
            // console.log(data)
        )
        .catch(error => {
            throw error;
        });
}

function* fetchUsers(){
    
    try{
        console.log('i am in userSaga-fetchuser');
        const users = yield call(getAPI);
        console.log("fetchuser",users);
        yield put({type:FETCH_USERS_SUCCESS,payload:users});
    }
    catch(e){
        yield put({type:FETCH_USERS_FAILURE,payload:e.message});
    }
}
function* userSaga(){
    console.log('i am in userSaga');
    yield takeEvery(FETCH_USERS_REQUEST,fetchUsers);
}
export default userSaga;