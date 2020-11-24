import {takeEvery, call,put} from 'redux-saga/effects';
import {PHOTO_REQUESTED,PHOTO_FETCHED,PHOTO_FETCHED_ERROR} from './actions';

export default function* photoSaga() {
    yield takeEvery(PHOTO_REQUESTED,workerSaga);

}

function* workerSaga() {
    try{
        const payload = yield call(getPhotos)
        yield put({type:PHOTO_FETCHED, payload})
    }
    catch(e){
        yield put({type:PHOTO_FETCHED_ERROR, payload:e})
    }
}

function getPhotos(){
    return fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response=>response.json())
}