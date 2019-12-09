/* eslint-disable prettier/prettier */
import React, {PureComponent} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {Image, Text, Button, Badge, ListItem} from 'react-native-elements';
import {Card, CardItem, Thumbnail, Body, Footer, FooterTab} from 'native-base';
import {StageHeader, Divider} from './misc/PlugAndPlay';
import {Container} from './misc/Wrappers';
import {LinkButton} from './misc/Floating';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {actState, actMarket} from '../redux_file/actions/actionCreators';
import Icon from 'react-native-vector-icons/FontAwesome';

const EmptyPage = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Keranjang kosong</Text>
  </View>
);

class CartPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      nota: [],
      items: this.props.market.cart,
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Keranjang',
  });

  _onCheckout() {
    this.props.send({
      token: this.props.auth.token,
      user_id: this.props.auth.user_id,
      items: this.props.market.cart,
      amount: this.state.prices,
    });
  }

  componentDidMount = () => {
    this.navEvent = this.props.navigation.addListener('didFocus', () => {
      this.setState(
        {
          items: this.props.market.cart,
        },
        () => {
          this.state.prices = 0;
          this.state.items.forEach(e => {
            this.state.prices += e.price;
          });
          this.state.prices = Math.round(this.state.prices);
          console.log(this.state.items, 'prices');
          this.setState({
            nota: [
              {
                title: 'Sub-total',
                subtitle: this.state.prices.toString(),
              },
              {
                title: 'Pajak',
                subtitle: this.props.market.tax + '%',
              },
              {
                title: 'Total',
                subtitle: (
                  this.state.prices +
                  (this.state.prices * this.props.market.tax) / 100
                ).toString(),
              },
            ],
          });
        },
      );
    });
  };

  componentWillUnmount = () => {
    this.navEvent.remove();
  };

  render() {
    return this.state.items.length > 0 ? (
      <View>
        <ListItem title={`Daftar belanja (${this.state.items.length})`} />
        {this.state.items.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{source: {uri: l.item_image}}}
            title={l.item_name}
            subtitle={l.qty + 'x' + (l.price / l.qty).toString()}
            bottomDivider
          />
        ))}
        <ListItem title={'Nota'} />
        {this.state.nota.map((l, i) => (
          <ListItem
            key={i}
            title={l.title}
            rightSubtitle={l.subtitle}
            bottomDivider
          />
        ))}
        <Button
          title="Pesan"
          containerStyle={styles.btnOrder}
          buttonStyle={{backgroundColor: 'indigo'}}
          onPress={() => this._onCheckout()}
        />
      </View>
    ) : (
      <EmptyPage />
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
  send: actMarket.sendCheckout,
};

export default connect(mstp, mdtp)(CartPage);

const styles = StyleSheet.create({
  imgPromo: {
    // flex: 1,
    height: 200,
    width: 200,
    borderWidth: 2,
    borderColor: 'blue',
    marginBottom: 9,
  },
  contentPromo: {
    marginTop: 70,
  },

  itemPromo: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 10,
    marginBottom: 10,
  },

  footer: {
    // flex: 1,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnOrder: {
    borderRadius: 30,
    width: wp(30),
    alignSelf: 'center',
    marginVertical: 50,
  },
});
