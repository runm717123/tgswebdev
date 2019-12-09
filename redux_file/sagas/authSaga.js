import {takeEvery, takeLatest, call, put} from 'redux-saga/effects';
import {authActions, appState} from '../actions/actionTypes';
import {navigatorRef} from './../../App';
import {NavigationActions} from 'react-navigation';
// import AsyncStorage from '@react-native-community/async-storage';

import {requestToken, push} from '../api/authApi';
import {Alert} from 'react-native';

export const authSaga = [
  takeLatest(authActions.getToken, loginWorker),
  takeLatest(authActions.doRegister, regWorker),
];

function* loginWorker(action) {
  console.log(action, 'login worker act');
  const response = yield call(requestToken, action.payload);
  console.log(response, 'login worker response');

  if (response.status === true) {
    yield put({type: authActions.tokenGranted, payload: response.data});
    navigatorRef.dispatch(
      NavigationActions.navigate({
        routeName: 'Shop',
      }),
    );
  } else {
    put({
      type: appState.requestFailed,
      payload: {
        loading: false,
        message: response.message,
      },
    });
    alert(response.message);
  }
}

function* regWorker(action) {
  console.log(action, 'reg worker..');
  action.payload.method = 'post';
  action.payload.segment = 'register';
  const response = yield call(push, action.payload);
  console.log(response, 'reg worker response');
  if (response.status === true) {
    Alert.alert('info', 'berhasil mendaftar', [
      {
        text: 'ok',
        onPress: () =>
          navigatorRef.dispatch(
            NavigationActions.navigate({
              routeName: 'Shop',
            }),
          ),
      },
    ]);
    // yield put({type: authActions.tokenGranted, payload: response.data});
  } else {
    put({
      type: appState.requestFailed,
      payload: {
        loading: false,
        message: response.message,
      },
    });
    alert(response.message);
  }
}
