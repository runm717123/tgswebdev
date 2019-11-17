// // store files
// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import {persistStore, persistReducer} from 'redux-persist';
// import storage from '@react-native-community/async-storage';
// import {composeWithDevTools} from 'redux-devtools-extension';

// //reducers
// // import {alertReducer} from 'redux-saga-rn-alert';
// import authReducer from './reducers/authReducer';

// //saga
// import rootSaga from './sagas/index';

// const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//   key: 'primary',
//   storage: storage,
// };

// // const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

// // combine reducer
// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware)),
// );

// export const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);
