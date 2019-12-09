import React, {PureComponent} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import {Image, Input, Button, ButtonGroup} from 'react-native-elements';
import {connect} from 'react-redux';
import {StageHeader, Divider} from './misc/PlugAndPlay';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {actState, actMarket} from './../redux_file/actions/actionCreators';

class Checkout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: props.auth.username,
      code: '',
      payMethod: 0,
    };

    this.items = this.props.navigation.state.params;

    this.prices = 0;
    this.items.forEach(e => {
      this.prices += e.price;
    });
    this.prices = Math.round(this.prices);
    this.payMethodStr = ['Cash', 'Kartu kredit', 'Gunakan saldo'];
  }

  static navigationOptions = {
    title: 'Finish',
  };

  _onCheckout() {
    this.props.send({
      token: this.props.auth.token,
      user_id: this.props.auth.user_id,
      items: this.items,
      amount: this.prices,
    });
  }

  render() {
    return (
      <View>
        <ButtonGroup
          onPress={payMethod => this.setState({payMethod})}
          selectedIndex={this.state.payMethod}
          buttons={this.payMethodStr}
          containerStyle={{height: 50}}
        />

        <FlatList
          data={this.items}
          numColumns={4}
          keyExtractor={i => i.id.toString()}
          contentContainerStyle={{margin: 20}}
          PlaceholderContent={<ActivityIndicator />}
          renderItem={({item}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={{uri: item.item_image}}
                style={styles.item_image}
              />
            </View>
          )}
        />
        <Divider />
        <View style={styles.viewRow}>
          <Text>jumlah barang : {this.items.length.toString()}</Text>
          <Text>total harga : {this.prices}</Text>
          <Text>perkiraan terkirim : 4 hari</Text>
        </View>
        {this.state.payMethod === 1 && (
          <View>
            <Input
              placeholder="Nama kamu"
              value={this.state.username}
              onChangeText={username => this.setState({username})}
            />
            <Input
              placeholder="Nomor kartu kredit (opsional)"
              value={this.state.code}
              onChangeText={code => this.setState({code})}
            />
          </View>
        )}
        <Button
          title="Pesan sekarang"
          type="outline"
          containerStyle={{width: wp(80), alignSelf: 'center'}}
          onPress={() => this._onCheckout()}
        />
      </View>
    );
  }
}

const mstp = (state /*, ownProps*/) => {
  return {
    auth: state.auth,
    market: state.market,
  };
};

const mdtp = {
  send: actMarket.sendCheckout,
};

export default connect(mstp, mdtp)(Checkout);

const styles = StyleSheet.create({
  item_image: {
    width: 50,
    height: 50,
  },

  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
});
