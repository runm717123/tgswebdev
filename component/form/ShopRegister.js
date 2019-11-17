import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableHighlight,
  Text,
  ScrollView,
} from 'react-native';
import {FormWrapper} from './../misc/Wrappers';
import {Divider} from './../misc/PlugAndPlay';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default class ShopRegister extends Component {
  constructor(props) {
    super(props);
    // console.log('aw');
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <FormWrapper>
        <View style={styles.titlebar}>
          <Text>Buat akun mu!</Text>
        </View>
        <Divider dvWidth={65} stroke={2} />
        <View style={styles.formWrapper}>
          <TextInput style={styles.txtInput} placeholder="masukkan nama" />
          <TextInput style={styles.txtInput} placeholder="masukkan emal" />
          <TextInput
            style={styles.txtInput}
            secureTextEntry
            placeholder="password"
          />
          <TextInput
            style={styles.txtInput}
            placeholder="konfirmasi password"
            secureTextEntry
          />
        </View>
        <View style={styles.buttonset}>
          <Divider dvWidth={80} />
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text>Daftar</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text>Daftar menggunakan Google</Text>
          </TouchableHighlight>
        </View>
      </FormWrapper>
    );
  }
}

const styles = StyleSheet.create({
  txtInput: {
    borderWidth: 1,
    borderColor: '#BCE0FD',
    borderRadius: 24,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },

  formWrapper: {
    width: wp(70),
    flex: 3.5,
    // height: hp(35),
    marginBottom: 10,
    justifyContent: 'space-evenly',
    // borderWidth: 1,
    marginHorizontal: 20,
  },

  buttonset: {
    flex: 2,
    justifyContent: 'space-evenly',
    // height: hp(15),
    marginBottom: 30,
  },

  button: {
    borderWidth: 1,
    borderColor: '#BCE0FD',
    borderRadius: 24,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  title: {
    textDecorationLine: 'underline',
    fontSize: 20,
    fontWeight: '600',
  },
  titlebar: {
    flex: 1,
    justifyContent: 'center',
  },
});
