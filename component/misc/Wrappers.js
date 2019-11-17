import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export class FormWrapper extends PureComponent {
  render() {
    return <View style={styles.formWrapper}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    // height: heightPercentageToDP(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
