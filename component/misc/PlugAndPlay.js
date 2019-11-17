import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Divider = ({dvColor = 'black', stroke = 1, dvWidth = 100}) => (
  <View
    style={{
      width: wp(dvWidth),
      borderBottomWidth: stroke,
      height: 0,
      color: dvColor,
    }}
  />
);

export const StageHeader = () => (
  <View style={styles.header}>
    <Text style={styles.dummyHead}> Selamat Datang ! </Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: hp(10),
    width: wp(100),
    position: 'absolute',
    top: 0,
    backgroundColor: '#2699FB',
  },

  dummyHead: {
    textAlign: 'center',
    lineHeight: hp(10),
    color: '#fff',
  },
});
