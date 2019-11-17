// import React from 'react';
import AppNavigator from './component';

import React, {Component} from 'react';
import {useScreens, enableScreens} from 'react-native-screens';
// useScreens();
// enableScreens();

// export let navigatorRef;
export default class App extends Component {
  // componentDidMount = () => {
  //   navigatorRef = this.navigator;
  // };

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
