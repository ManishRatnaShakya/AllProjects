import {all} from 'redux-saga/effects';

import userSaga from './userSaga';

export default function* rootSaga() {
    console.log("i am in root saga")
    yield all([userSaga()])
}