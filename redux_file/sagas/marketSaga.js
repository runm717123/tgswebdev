import {takeEvery, takeLatest, call, put} from 'redux-saga/effects';
import {appState, marketTrans} from '../actions/actionTypes';

import {getItem} from '../api/marketApi';

export const marketSaga = [takeLatest(marketTrans.getItems, getItemWorker)];

function* getItemWorker(action) {
  // console.log(action.payload, 'getItem worker act');
  // return;
  const response = yield call(getItem, action.payload);
  console.log(response, 'getItem worker response');

  if (response.status === false) {
    put({
      type: appState.requestFailed,
      payload: {
        loading: false,
        message: response.message,
      },
    });
    alert(response.message);
  } else {
    yield put({type: marketTrans.itemServed, payload: response.data});
  }
}
