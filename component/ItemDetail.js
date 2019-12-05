import React, {PureComponent} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
  Text,
} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left} from 'native-base';
import {StageHeader, Divider} from './misc/PlugAndPlay';
import {Container} from './misc/Wrappers';
import {Button} from './misc/Floating';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {actState, actMarket} from '../redux_file/actions/actionCreators';

class DisplayPage extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {};

  static navigationOptions = {
    title: 'Halaman produk',
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={styles.card}>
          <View style={{justifyContent: 'space-around'}}>
            <Text style={{fontWeight: '500'}}>title</Text>
            <Text style={{}}>deskripsi</Text>
            <View>
              <Text style={{color: 'grey'}}>Only</Text>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>10000</Text>
            </View>
          </View>
          <View>
            <Image
              source={{
                uri:
                  'https://www.oatey.com//ASSETS/IMAGES/ITEMS/DETAIL_PAGE/NoImage.png',
              }}
              style={styles.imgProduct}
            />
          </View>
        </View>
        <View style={styles.receipt}>
          <Text>ITEM DETAILS</Text>
          <Divider color="#CFCFCF" dvWidth={90} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'stretch',
            }}>
            <View>
              <Text>Prices</Text>
              <Text>Tax</Text>
            </View>
            <View>
              <Text>10000</Text>
              <Text>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            title="Cek"
            txtColor="blue"
            bgColor="white"
            borderRadius={10}
          />
          <Button title="Tambah ke keranjang" borderRadius={10} />
        </View>
      </View>
    );
  }
}

const mstp = (state /*, ownProps*/) => {
  return {
    app: state.app,
    auth: state.auth,
    market: state.market,
  };
};

const mdtp = {
  getItems: actMarket.getItems,
  requesting: actState.requesting,
  requestDone: actState.forceLoaded,
};

export default connect(mstp, mdtp)(DisplayPage);

const styles = StyleSheet.create({
  imgProduct: {
    width: 200,
    height: 200,
  },
  card: {
    margin: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  receipt: {
    alignItems: 'center',
    paddingHorizontal: 50,
    marginTop: -200,
  },
  contentBody: {
    // alignItems: 'center',
    // marginBottom: 100,
    // flex: 1,
    // height: hp(150),
    // flexGrow: 1,
    // flex: 1,
  },

  footer: {
    // position: 'absolute',
    backgroundColor: 'skyblue',
    bottom: 0,
    // marginTop: 70,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
