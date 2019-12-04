import {takeEvery, takeLatest, call, put} from 'redux-saga/effects';
import {authActions} from '../actions/actionTypes';
import {navigatorRef} from './../../App';
import {NavigationActions} from 'react-navigation';
// import AsyncStorage from '@react-native-community/async-storage';

import {fetchingData} from '../api/authApi';

export const authSaga = [
  takeLatest(authActions.doLogin, loginWorker),
  takeLatest(authActions.doRegister, regWorker),
];

function* loginWorker(action) {
  console.log(action, 'login worker act');
  const response = yield call(fetchingData, action.state);
  console.log(response, 'login worker response');
  // yield put({type: authActions.tokenGranted, payload: response});
  // if (response.status === false) {
  //   alert('something isnt correct');
  // } else {
  //   navigatorRef.dispatch(
  //     NavigationActions.navigate({
  //       routeName: 'Login',
  //     }),
  //   );
  // }
}

function* regWorker(action) {
  console.log(action, 'reg worker..');
  const response = yield call(fetchingData, action.state);
  console.log(response, 'reg worker response');
  yield put({type: authActions.doRegister, payload: response});
}
