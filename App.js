// import React from 'react';
import AppNavigator from './component';

import React, {Component} from 'react';
import {useScreens, enableScreens} from 'react-native-screens';
import Echo from 'laravel-echo/dist/echo';
import Socketio from 'socket.io-client';
import {apiUrl} from './config';
// useScreens();
// enableScreens();

export let navigatorRef;
export default class App extends Component {
  componentDidMount = () => {
    navigatorRef = this.navigator;
    // let echo = new Echo({
    //   broadcaster: 'socket.io',
    //   host: 'http://localhost:8000:6001/',
    //   client: Socketio,
    //   auth: {},
    // });
    // console.log('calling echo', echo);
    // echo.channel('log').listen('.userLog', event => {
    //   console.log(event, 'event log');
    // });
    // fetch(apiUrl + '/api/user')
    //   .then(r => r.json())
    //   .then(r => {
    //     console.log(r);
    //   });
  };

  render() {
    return (
      <AppNavigator
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}
