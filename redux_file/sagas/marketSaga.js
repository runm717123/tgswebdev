import {takeEvery, takeLatest, call, put} from 'redux-saga/effects';
import {appState, marketTrans} from '../actions/actionTypes';

import {getItem, push} from '../api/marketApi';

export const marketSaga = [
  takeLatest(marketTrans.getItems, getItemWorker),
  takeLatest(marketTrans.sendCheckout, sendCheckoutWorker),
];

function* getItemWorker(action) {
  // console.log(action.payload, 'getItem worker act');
  // return;
  const response = yield call(getItem, action.payload);
  // console.log(response, 'getItem worker response');

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

function* sendCheckoutWorker(action) {
  // console.log(action.payload, 'getItem worker act');
  // return;
  action.payload.method = 'post';
  action.payload.kind = 'order';
  action.payload.segment = '';
  console.log(action.payload);
  const response = yield call(push, action.payload);
  // console.log(response, 'getItem worker response');

  if (response.status === true) {
    console.log(response, 'resp');
    alert('checkout berhasil');
  } else {
    put({
      type: appState.requestFailed,
      payload: {
        loading: false,
        message: response.message,
      },
    });
    alert(response.message);
    // yield put({type: marketTrans.itemServed, payload: response.data});
  }
}
