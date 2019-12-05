// // store files
import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import {persistStore, persistReducer} from 'redux-persist';
// import storage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';

// //reducers
// // import {alertReducer} from 'redux-saga-rn-alert';
import authReducer from './reducers/authReducer';
import appReducer from './reducers/appReducer';
import marketReducer from './reducers/marketReducer';
// import {helloSaga} from './sagas/helloSaga';

//saga
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//   key: 'primary',
//   storage: storage,
// };

// combine reducer
const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  market: marketReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
// export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
