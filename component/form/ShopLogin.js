import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableHighlight,
  Text,
  ScrollView,
} from 'react-native';
import {FormWrapper} from '../misc/Wrappers';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {_pull} from './../func/fetcher';
import {connect} from 'react-redux';
import {actState} from './../../redux_file/actions/actionCreators';

export class ShopLogin extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'propss');
  }

  static navigationOptions = {
    header: null,
  };

  requestingToken() {
    this.props.app.isLoading
      ? this.props.requestDone()
      : this.props.requesting();
    // this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <FormWrapper>
        <View style={styles.jumbotron}>
          <Text>{this.props.app.isLoading.toString()}</Text>
          <TouchableHighlight onPress={() => this.requestingToken()}>
            <Text>Sudah mendaftar ?</Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.title}>Silahkan masuk</Text>
        <View style={styles.formWrapper}>
          <TextInput style={styles.txtInput} placeholder="masukkan emal" />
          <TextInput
            style={styles.txtInput}
            secureTextEntry
            placeholder="password"
          />
        </View>
        <View style={styles.buttonset}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Stage')}>
            <Text>Selanjutnya</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text>Masuk menggunakan Google</Text>
          </TouchableHighlight>
        </View>
      </FormWrapper>
    );
  }
}
const mstp = (state /*, ownProps*/) => {
  return {
    app: state.app,
    // user: state.user,
    // isLoading: state.app.isLoading,
  };
};

const mdtp = {
  requesting: actState.requesting,
  requestDone: actState.forceLoaded,
};

export default connect(mstp, mdtp)(ShopLogin);

const styles = StyleSheet.create({
  jumbotron: {
    // height: hp(25),
    flex: 2,
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2699FB',
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#BCE0FD',
    borderRadius: 24,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },

  formWrapper: {
    width: wp(65),
    flex: 2,
    // height: hp(35),
    marginBottom: 10,
    justifyContent: 'space-evenly',
    // borderWidth: 1,
    marginHorizontal: 20,
  },

  buttonset: {
    flex: 1,
    justifyContent: 'space-around',
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
});
