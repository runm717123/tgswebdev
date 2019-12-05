import {takeEvery, takeLatest, call, put} from 'redux-saga/effects';
import {authActions, appState} from '../actions/actionTypes';
import {navigatorRef} from './../../App';
import {NavigationActions} from 'react-navigation';
// import AsyncStorage from '@react-native-community/async-storage';

import {requestToken} from '../api/authApi';

export const authSaga = [
  takeLatest(authActions.getToken, loginWorker),
  takeLatest(authActions.doRegister, regWorker),
];

function* loginWorker(action) {
  console.log(action, 'login worker act');
  const response = yield call(requestToken, action.payload);
  console.log(response, 'login worker response');

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
    yield put({type: authActions.tokenGranted, payload: response.data});
    navigatorRef.dispatch(
      NavigationActions.navigate({
        routeName: 'Stage',
      }),
    );
  }
}

function* regWorker(action) {
  console.log(action, 'reg worker..');
  const response = yield call(requestToken, action.state);
  console.log(response, 'reg worker response');
  yield put({type: authActions.doRegister, payload: response});
}
