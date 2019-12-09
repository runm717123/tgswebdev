import React, {PureComponent} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  Text,
  Alert,
} from 'react-native';
import {Image, Button, Badge, Avatar} from 'react-native-elements';
import {Divider} from './misc/PlugAndPlay';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {actState, actMarket} from '../redux_file/actions/actionCreators';
import {RFValue} from 'react-native-responsive-fontsize';

class DisplayPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      item: props.navigation.state.params,
      count: 1,
    };

    this._checkout = this._checkout.bind(this);
    this._fillCart = this._fillCart.bind(this);
  }

  static navigationOptions = {
    title: 'Halaman produk',
  };

  _checkout() {
    let items = {...this.state.item};
    items.qty = this.state.count;
    items.price = items.price * items.qty;
    items.price = items.price + (items.price * this.props.market.tax) / 100;
    this.props.navigation.navigate('Checkout', [items]);
  }

  _fillCart() {
    let items = {...this.state.item};
    items.qty = this.state.count;
    items.price = items.price * items.qty;
    this.props.fillCarts(items);
    Alert.alert(
      'Info',
      'Item telah di masukkan ke keranjang belanja, cek daftar belanja di tab keranjang',
      [{text: 'ok', onPress: () => this.props.navigation.goBack()}],
    );
  }

  render() {
    // console.log(this.state);
    // console.log(this.state.item[0].item_image);
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={styles.card}>
          <View style={{justifyContent: 'space-around'}}>
            <Text style={{fontWeight: '500'}}>
              The {this.state.item.item_name}
            </Text>
            <Text
              style={{width: widthPercentageToDP(40), lineHeight: 17}}
              numberOfLines={5}>
              {this.state.item.description}
            </Text>
            <View>
              <Text style={{color: 'grey'}}>Only</Text>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                {this.state.item.price}
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={{
                uri: this.state.item.item_image,
              }}
              style={styles.imgProduct}
              PlaceholderContent={<ActivityIndicator />}
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
              <Text>Harga</Text>
              <Text>Stok</Text>
              <Text>Pajak</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>Jumlah</Text>
                <TouchableHighlight
                  style={styles.incButton}
                  onPress={() =>
                    this.state.count < this.state.item.qty &&
                    this.setState({count: this.state.count + 1})
                  }>
                  <Text>+</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.incButton}
                  onPress={() =>
                    this.state.count !== 0 &&
                    this.setState({count: this.state.count - 1})
                  }>
                  <Text>-</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View>
              <Text>
                {Math.round(
                  this.state.item.price * this.state.count +
                    (this.state.item.price *
                      this.state.count *
                      this.props.market.tax) /
                      100,
                )}
              </Text>
              <Text>{this.state.item.qty}</Text>
              <Text>{this.props.market.tax} %</Text>
              <Text>{this.state.count}</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          {/* <Button
            title="Cek"
            txtColor="blue"
            bgColor="white"
            borderRadius={10}
            onPress={() => this._checkout()}
          /> */}
          <Button
            title="Tambah ke keranjang"
            borderRadius={10}
            onPress={() => this._fillCart()}
          />
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
  fillCarts: actMarket.fillCart,
};

export default connect(mstp, mdtp)(DisplayPage);

const styles = StyleSheet.create({
  imgProduct: {
    width: widthPercentageToDP(40),
    height: 100,
    borderWidth: 2,
    borderColor: 'darkorchid',
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
    marginBottom: 20,
  },
  footer: {
    // position: 'absolute',
    backgroundColor: 'skyblue',
    bottom: 0,
    flexDirection: 'row',
    height: heightPercentageToDP(10),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  incButton: {
    width: 30,
    borderWidth: 1,
    borderRadius: 40,
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
