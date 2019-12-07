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
} from 'react-native';
import {Image, Text, Badge, Button} from 'react-native-elements';
import {Card, CardItem, Thumbnail, Body, Icon} from 'native-base';
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
  }
  componentDidMount = () => {
    this.props.getItems([this.props.auth.token, '']);
    this.navEvent = this.props.navigation.addListener('didFocus', () => {
      this.props.navigation.setParams({
        cartValue: this.props.market.cart.length,
      });
    });
  };

  componentWillUnmount = () => {
    this.navEvent.remove();
  };

  static navigationOptions = ({navigation}) => ({
    title: 'Welcome',
    // headerLeft: null,
    headerTitleStyle: {textAlign: 'center', flex: 1},
    headerRight: () => (
      <View>
        <Button title="Clear button" type="clear" />
        <Badge
          value={navigation.getParam('cartValue', '0')}
          status="success"
          containerStyle={{position: 'absolute', top: -4, left: -4}}
        />
      </View>
    ),
  });

  _seeMore(item) {
    this.props.navigation.navigate('Detail', item);
    // console.log(id);
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        {/* <StageHeader /> */}
        <View style={styles.wrapperPromo}>
          {/* <FlatList
            data={this.promotions}
            renderItem={({item}) => (
              <View style={styles.itemPromo}>
                <Image source={{uri: item.img}} style={styles.imgPromo} />
                <Text>{item.item_name}</Text>
              </View>
            )}
            horizontal
            keyExtractor={i => i.id.toString()}
            contentContainerStyle={styles.contentPromo}
          /> */}
          <Image
            source={{
              uri:
                'https://wallup.net/wp-content/uploads/2019/09/07/484478-dota-2-sven-heroes-748x468.jpg',
            }}
            style={{width: wp(100), height: hp(40), marginTop: wp(1)}}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Divider color="#CFCFCF" dvWidth={90} />
        </View>
        <FlatList
          data={this.props.market.items}
          keyExtractor={i => i.id.toString()}
          renderItem={({item}) => (
            <Card style={styles.itemPromo}>
              <CardItem style={{alignSelf: 'flex-start'}}>
                <Thumbnail
                  source={require('./img/stall-logo.jpg')}
                  style={{marginRight: 40}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}>
                  <Text h4>{item.item_name}</Text>
                  <Text note>New</Text>
                </View>
              </CardItem>
              <CardItem>
                <Body style={{alignItems: 'center'}}>
                  <Image
                    source={{uri: item.item_image}}
                    style={styles.imgPromo}
                    PlaceholderContent={<Text>loading... </Text>}
                  />
                  <Text>{item.description}</Text>
                  <LinkButton
                    title="Selengkapnya ..."
                    onPress={() => this._seeMore(item)}
                  />
                </Body>
              </CardItem>
            </Card>
          )}
        />
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.btnDummy}>
            <Text>Keluar</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
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
  wrapperPromo: {alignItems: 'center', flexDirection: 'column'},

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
