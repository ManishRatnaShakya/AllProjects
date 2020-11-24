import { takeEvery, call, put } from 'redux-saga/effects';
import { DATA_REQUESTED, DATA_FETCHED, API_ERRORED } from './actions';

export default function* watcherSaga() {
  console.log("i am in watcher")
  yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
   console.log("i am in worker ")
  try {
    const payload = yield call(getData)
    yield put({ type: DATA_FETCHED, payload })
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e })
  }
}

function getData() {
  console.log('i am in get data api call')
  return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
    response.json()
  );
}