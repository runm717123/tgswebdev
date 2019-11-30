// import React from 'react';
import AppNavigator from './component';

import React, {Component} from 'react';
import {useScreens, enableScreens} from 'react-native-screens';
import Echo from 'laravel-echo/dist/echo';
import Socketio from 'socket.io-client';
// useScreens();
// enableScreens();

// export let navigatorRef;
export default class App extends Component {
  // componentDidMount = () => {
  //   navigatorRef = this.navigator;
  // };
  constructor(props) {
    super(props);
    let echo = new Echo({
      broadcaster: 'socket.io',
      host: 'ws://your.host:8080',
      client: Socketio,
      auth: {},
    });

    echo.private('log.1').listen('UserComing', event => {
      console.log(event, 'event malming');
    });
  }

  render() {
    return (
      <AppNavigator
      // ref={nav => {
      //   this.navigator = nav;
      // }}
      />
    );
  }
}
