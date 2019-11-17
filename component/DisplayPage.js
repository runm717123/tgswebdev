import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import {StageHeader, Divider} from './misc/PlugAndPlay';
import {Container} from './misc/Wrappers';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default class DisplayPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    const promotions = [];
    const content = [];
    for (let i = 1; i <= 7; i++) {
      promotions.push({
        id: i,
        img:
          'https://gamepedia.cursecdn.com/dota2_gamepedia/4/46/Cosmetic_icon_The_Lightning_Orchid.png',
        title: 'product ' + i.toString(),
      });
      content.push({
        id: i,
        img:
          'http://3.bp.blogspot.com/-RlkqdA_XIis/VCpiCEqLGFI/AAAAAAAAAzI/PxAzEMIkRdU/s1600/crimson_guard_dota_2.png',
        title: 'product ' + i.toString(),
      });
    }
    this.promotions = promotions;
    this.content = content;
    // console.log(this.promotions, 'oro');
    //
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StageHeader />
        <View style={styles.wrapperPromo}>
          <FlatList
            data={this.promotions}
            renderItem={({item}) => (
              <View style={styles.itemPromo}>
                <Image source={{uri: item.img}} style={styles.imgPromo} />
                <Text>{item.title}</Text>
              </View>
            )}
            horizontal
            keyExtractor={i => i.id.toString()}
            contentContainerStyle={styles.contentPromo}
          />
          <Divider color="#CFCFCF" dvWidth={90} />
        </View>
        <FlatList
          data={this.content}
          numColumns={2}
          contentContainerStyle={styles.contentBody}
          keyExtractor={i => i.id.toString()}
          // columnWrapperStyle={{borderWidth: 0.5}}
          renderItem={({item}) => (
            <View style={styles.itemPromo}>
              <Image source={{uri: item.img}} style={styles.imgPromo} />
              <Text>{item.title}</Text>
            </View>
          )}
        />
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.btnDummy}>
            <Text>Keluar</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgPromo: {
    height: 100,
    width: 100,
  },
  contentPromo: {
    marginTop: 70,
  },

  itemPromo: {
    // justifyContent: 'center',
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
