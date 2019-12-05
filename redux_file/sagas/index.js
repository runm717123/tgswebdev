import {all} from 'redux-saga/effects';
import {authSaga} from './authSaga';
import {marketSaga} from './marketSaga';

export default function* rootSaga() {
  yield all([...authSaga, ...marketSaga]);
  console.log('Root Saga Loaded');
}
