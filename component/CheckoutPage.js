import React, {PureComponent} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import {Image, Input, Button, CheckBox} from 'react-native-elements';
import {connect} from 'react-redux';
import {StageHeader, Divider} from './misc/PlugAndPlay';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Checkout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: props.auth.username,
      code: '',
      payMethod: 1,
    };

    this.items = this.props.navigation.state.params;

    this.prices = 0;
    this.items.forEach(e => {
      this.prices += e.price;
    });
    this.prices = Math.round(this.prices);
  }

  static navigationOptions = {
    title: 'Finish!',
  };

  render() {
    return (
      <View>
        <View style={styles.viewRow}>
          <Text>jumlah barang : {this.items.length.toString()}</Text>
          <Text>total harga : {this.prices}</Text>
        </View>
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
          <CheckBox
            title="Cash"
            checked={this.state.payMethod === 1}
            onPress={() => this.setState({payMethod: 1})}
          />
          <CheckBox
            title="Kartu kredit"
            checked={this.state.payMethod === 2}
            onPress={() => this.setState({payMethod: 2})}
          />
          <CheckBox
            title="Gunakan saldo"
            checked={this.state.payMethod === 3}
            onPress={() => this.setState({payMethod: 3})}
          />
        </View>
        {this.state.payMethod === 2 && (
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

export default connect(mstp)(Checkout);

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
