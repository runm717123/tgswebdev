/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import DevToolsApp from 'remotedev-app';

import React from 'react';
// import {Provider} from 'react-redux';
// import {store, persistor} from './redux_file';
// import {SplashScreen} from './component/SplashScreen';

// import {PersistGate} from 'redux-persist/lib/integration/react';

const AppLauncher = () => <App />;

AppRegistry.registerComponent(appName, () => AppLauncher);
