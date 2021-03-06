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
import {Image, Text, Badge, Overlay} from 'react-native-elements';
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
import {actState, actMarket} from './../redux_file/actions/actionCreators';

class DisplayPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cartVisible: false,
    };
    console.log(props, 'pr');
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Halaman utama',
    tabBarLabel: 'wa',
    headerTitleStyle: {textAlign: 'center', flex: 1},
  });

  _seeMore(item) {
    let cart = this.props.market.cart.filter(i => i.id === item.id);
    // console.log(cart[0], 'cart value');
    if (cart.length === 1) {
      Alert.alert(
        'Peringatan',
        'Item ini sudah ada di dalam keranjang, apa anda ingin mengubahnya ?',
        [
          {
            text: 'Ya',
            onPress: () => this.props.navigation.navigate('Detail', cart[0]),
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
        <ScrollView>
          <Image
            source={{
              uri:
                'https://wallup.net/wp-content/uploads/2019/09/07/484478-dota-2-sven-heroes-748x468.jpg',
            }}
            style={{
              width: wp(100),
              height: hp(40),
              marginTop: wp(1),
              marginBottom: -10,
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <FlatList
            data={this.props.market.items}
            keyExtractor={i => i.id.toString()}
            renderItem={({item}) => (
              <Card style={styles.itemPromo}>
                <CardItem style={{alignSelf: 'center'}}>
                  <Text h4>{item.item_name}</Text>
                </CardItem>
                <CardItem button onPress onPress={() => this._seeMore(item)}>
                  <Body
                    style={{
                      alignItems: 'center',
                      borderWidth: 1,
                      margin: 10,
                      paddingTop: 10,
                      borderColor: 'blue',
                    }}>
                    <Image
                      source={{uri: item.item_image}}
                      style={styles.imgPromo}
                      PlaceholderContent={<Text>loading... </Text>}
                    />
                    <Text>{item.description}</Text>
                    <Text>....</Text>
                  </Body>
                </CardItem>
              </Card>
            )}
          />
        </ScrollView>
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
