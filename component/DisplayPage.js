import React, {PureComponent} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Text} from 'native-base';
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
  };

  static navigationOptions = {
    title: 'Welcome',
    // headerLeft: null,
    headerTitleStyle: {textAlign: 'center', flex: 1},
  };

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
          />
          <Divider color="#CFCFCF" dvWidth={90} />
        </View>
        <FlatList
          data={this.props.market.items}
          numColumns={2}
          contentContainerStyle={styles.contentBody}
          keyExtractor={i => i.id.toString()}
          // columnWrapperStyle={{borderWidth: 0.5}}
          renderItem={({item}) => (
            <Card style={styles.itemPromo}>
              <CardItem style={{alignItems: 'center'}}>
                <Left>
                  <Thumbnail source={require('./img/stall-logo.jpg')} />
                </Left>
                <Body>
                  <Text>{item.item_name}</Text>
                  <Text note>New</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body style={{alignItems: 'center'}}>
                  <Image
                    source={{uri: item.item_image}}
                    style={styles.imgPromo}
                  />
                  <Text>{item.description}</Text>
                  <LinkButton title="Selengkapnya ..." />
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
  wrapperPromo: {alignItems: 'center'},
  contentBody: {
    // alignItems: 'center',
    // marginBottom: 100,
    // flex: 1,
    // height: hp(150),
    // flexGrow: 1,
    // flex: 1,
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
