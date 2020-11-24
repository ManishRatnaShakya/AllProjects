import userSaga from './cakeshop_container/sagas/userSaga';
import  watcherSaga from './saga_example/redux/exampleSaga';
import photoSaga from './saga_example/redux/photoSaga'
import {all, fork} from 'redux-saga/effects';

export default function* rootSaga() {
    console.log("i am in root saga")
    yield all([
        fork(userSaga),
        fork(watcherSaga),
        fork(photoSaga),
    ])
}