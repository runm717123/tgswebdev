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
import {Image, Text, Badge, ListItem} from 'react-native-elements';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Icon,
  Button,
  Footer,
  FooterTab,
} from 'native-base';
import {StageHeader, Divider} from './misc/PlugAndPlay';
import {Container} from './misc/Wrappers';
import {LinkButton} from './misc/Floating';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {actState, actMarket} from '../redux_file/actions/actionCreators';

class ProfilePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cartVisible: false,
    };
    this.nota = [
      {
        title: 'Sub-total',
        subtitle: '10000',
      },
      {
        title: 'Pajak',
        subtitle: this.props.market.tax + '%',
      },
    ];
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Welcome',
    // headerLeft: null,
    headerTitleStyle: {textAlign: 'center', flex: 1},
  });

  _seeMore(item) {
    let cart = this.props.market.cart.filter(i => i.id === item.id);
    if (cart.length === 1) {
      Alert.alert(
        'Peringatan',
        'Item ini sudah ada di dalam keranjang, apa anda ingin mengubahnya ?',
        [
          {
            text: 'Ya',
            onPress: () => this.props.navigation.navigate('Detail', cart),
          },
          {
            text: 'Tidak jadi',
            onPress: () => false,
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    } else {
      this.props.navigation.navigate('Detail', item);
    }
  }

  componentDidMount = () => {
    this.props.getItems([this.props.auth.token, '']);
    this.props.navigation.setParams({
      showCart: () => this.setState({cartVisible: true}),
    });
    this.navEvent = this.props.navigation.addListener('didFocus', () => {
      this.props.navigation.setParams({
        cartValue: this.props.market.cart.length,
      });
    });
  };

  componentWillUnmount = () => {
    this.navEvent.remove();
  };

  render() {
    return (
      <View>
        <ListItem title={'Judul'} />
        {this.props.market.items.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{source: {uri: l.item_image}}}
            title={l.item_name}
            subtitle={l.qty + 'x' + l.price}
            bottomDivider
          />
        ))}
        <ListItem title={'Nota'} />
        {this.nota.map((l, i) => (
          <ListItem
            key={i}
            title={l.title}
            rightSubtitle={l.subtitle}
            bottomDivider
          />
        ))}
        {/* <FlatList
          data={this.props.market.items}
          keyExtractor={i => i.id.toString()}
          renderItem={({item}) => (
            <View>
              <Image
                source={{uri: item.item_image}}
                style={{width: 70, height: 70}}
              />
              <Text>{item.item_name}</Text>
              <Text>
                {item.qty} x {item.price}{' '}
              </Text>
              <Text>{item.qty * item.price} </Text>
            </View>
            // listitem rn elemens
            // sub total
            // tax
            // total
            // tombol chekcout
          )}
        /> */}
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

export default connect(mstp, mdtp)(ProfilePage);

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
  btnDummy: {
    borderWidth: 1,
    width: wp(30),
    backgroundColor: 'red',
    borderColor: '#BCE0FD',
    borderRadius: 24,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
