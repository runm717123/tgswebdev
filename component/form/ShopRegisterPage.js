import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableHighlight,
  Text,
  Alert,
} from 'react-native';
import {FormWrapper} from '../misc/Wrappers';
import {Divider} from '../misc/PlugAndPlay';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {_pull} from '../func/fetcher';
import {connect} from 'react-redux';

export class ShopRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      cpassword: '',
      email: '',
    };

    console.log(this.props, 'propss');
  }

  static navigationOptions = {
    header: null,
  };

  async onPressRegister() {
    for (const key in this.state) {
      if (this.state[key] === '') {
        return alert('isi semua ...!');
      }
    }
    if (this.state.password === this.state.cpassword) {
      try {
        const greeting = await _pull('user/register', {
          method: 'post',
          body: {
            name: this.state.username,
            email: this.state.email,
            password: this.state.password,
            isOwner: 1,
          },
        });

        if (greeting.status === true) {
          this.props.navigation.navigate('Login');
        }
      } catch (error) {
        alert('Elol :' + error);
      }
    }
  }

  render() {
    return (
      <FormWrapper>
        <View style={styles.titlebar}>
          <Text>Buat akun mu!</Text>
        </View>
        <Divider dvWidth={65} stroke={2} />
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.txtInput}
            placeholder="masukkan nama"
            onChangeText={username => this.setState({username})}
          />
          <TextInput
            style={styles.txtInput}
            placeholder="masukkan email"
            onChangeText={email => this.setState({email})}
          />

          <TextInput
            style={styles.txtInput}
            secureTextEntry
            placeholder="password"
            onChangeText={password => this.setState({password})}
          />
          <TextInput
            style={styles.txtInput}
            placeholder="konfirmasi password"
            secureTextEntry
            onChangeText={cpassword => this.setState({cpassword})}
          />
        </View>
        <View style={styles.buttonset}>
          <Divider dvWidth={80} />
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.onPressRegister()}>
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

const mstp = (state /*, ownProps*/) => {
  return {
    stt: state,
  };
};
export default connect(mstp)(ShopRegister);

const styles = StyleSheet.create({
  txtInput: {
    borderBottomWidth: 1,
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
