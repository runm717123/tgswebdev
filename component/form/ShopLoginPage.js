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
import {Input, Image, Avatar} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {_pull} from './../func/fetcher';
import {connect} from 'react-redux';
import {actState, actAuth} from './../../redux_file/actions/actionCreators';

export class ShopLogin extends Component {
  constructor(props) {
    super(props);
    // console.log(props, 'propss');s
  }

  static navigationOptions = {
    // header: null,
    // tabBarVisible: false,
  };

  requestingToken() {
    this.props.app.isLoading
      ? this.props.requestDone()
      : this.props.requesting();
    this.props.getToken([this.state.name, this.state.password]);
    // this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <FormWrapper>
        <Avatar
          rounded
          source={require('./../img/stall-logo.jpg')}
          style={{width: 80, height: 80, borderRadius: 60}}
          // containerStyle={{borderRadius: 40}}
        />
        <View style={styles.jumbotron}>
          <TouchableHighlight onPress={() => this.requestingToken()}>
            <Text>SECRET SHOP</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.txtInput}
            placeholder="masukkan nama"
            onChangeText={name => this.setState({name})}
          />
          <TextInput
            style={styles.txtInput}
            secureTextEntry
            placeholder="password"
            onChangeText={password => this.setState({password})}
          />
        </View>
        <View style={styles.buttonset}>
          <TouchableHighlight
            style={{...styles.button, backgroundColor: '#2699FB'}}
            onPress={() => this.requestingToken()}>
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
  getToken: actAuth.getToken,
};

export default connect(mstp, mdtp)(ShopLogin);

const styles = StyleSheet.create({
  jumbotron: {
    // height: hp(25),
    flex: 2,
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2699FB',
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
